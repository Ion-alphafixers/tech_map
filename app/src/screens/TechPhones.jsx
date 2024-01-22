import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import HomeLeftContainer from "../components/HomeLeftContainer";
import "../styles/tech_phones.css";
import { toast } from "react-toastify";
import { FaPen, FaTimes, FaSave } from "react-icons/fa";
function TechPhones() {
  const [burgerMenuClicked, setBurgerMenuClicked] = useState(false);
  const [techNums, setTechNums] = useState([]);
  const [techNumsRev, setTechNumsRev] = useState([]);
  const [editState, setEditState] = useState({});

  useEffect(() => {
    const q = `SELECT * FROM techs`;

    const getNums = async () => {
      const response = await fetch(
        "https://i3gzeqflqihryswsazg6cf7eja0xqysp.lambda-url.us-east-2.on.aws/",
        {
          method: "POST",
          body: JSON.stringify({
            query: q,
          }),
        }
      );
      const techs = await response.json();
      setEditState((prevMap) => {
        let updatedState = { ...prevMap };

        for (let tech = 0; tech < techs.length; tech++) {
          updatedState = {
            ...updatedState,
            [techs[tech][2]]: false,
          };
        }

        return updatedState;
      });
      setTechNums((prevMap) => {
        let updatedState = { ...prevMap };

        for (let tech = 0; tech < techs.length; tech++) {
          updatedState = {
            ...updatedState,
            [techs[tech][2]]: techs[tech][1],
          };
        }

        return updatedState;
      });
      setTechNumsRev((prevMap) => {
        let updatedState = { ...prevMap };

        for (let tech = 0; tech < techs.length; tech++) {
          updatedState = {
            ...updatedState,
            [techs[tech][2]]: techs[tech][1],
          };
        }

        return updatedState;
      });
    };

    getNums();
  }, []);

  const burgerMenuHandler = () => {
    setBurgerMenuClicked(!burgerMenuClicked);
  };

  const editClickHandler = (e) => {
    setEditState((prevMap) => ({
      ...prevMap,
      [e.target.parentElement.id]: true,
    }));
  };

  const nameChangeHandler = (e, techId) => {
    const updatedTechNums = { ...techNums, [techId]: e.target.value };
    setTechNums(updatedTechNums);
  };
  const cancelEditHandler = (e, techId) => {
    const updatedTechNums = { ...techNums, [techId]: techNumsRev[techId] };
    setTechNums(updatedTechNums);
    setEditState((prevMap) => ({
      ...prevMap,
      [techId]: false,
    }));
  };
  const saveEditHandler = async (e, techId) => {
    setEditState((prevMap) => ({
      ...prevMap,
      [techId]: false,
    }));
    const q = `UPDATE techs SET tech_name = '${techNums[techId]}' WHERE tech_phone = '${techId}';`;
    console.log(q)
    const changeTechName = async () => {
      try {
        const response = await fetch(
          "https://i3gzeqflqihryswsazg6cf7eja0xqysp.lambda-url.us-east-2.on.aws/",
          {
            method: "POST",
            body: JSON.stringify({
              query: q,
            }),
          }
        );
        const updatedTechNums = {
          ...techNumsRev,
          [techId]: techNums[techId],
        };
        setTechNumsRev(updatedTechNums);
        toast.success(
          `The name for phone number ${techId} has been changed to ${techNums[techId]}`
        );
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    changeTechName();
  };
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
      }}
      className="phone_page"
    >
      {burgerMenuClicked === false ? (
        <RxHamburgerMenu
          size={30}
          onClick={burgerMenuHandler}
          className="burger_menu_right_container white_bg"
        />
      ) : (
        <HomeLeftContainer
          burgerMenuHandler={burgerMenuHandler}
          burgerMenuClicked={burgerMenuClicked}
        />
      )}

      {techNums.length !== 0 ? (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Tech Name</th>
              <th>Tech Phone</th>
            </tr>
          </thead>

          <tbody className="custom-table-body">
            {Object.keys(techNums).map((number) => (
              <tr key={number}>
                <td
                  id={number}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRight: "none",
                  }}
                >
                  {editState[number] === false ? (
                    <>
                      <span>{techNums[number]}</span>
                      <FaPen
                        style={{ cursor: "pointer", padding: "10px" }}
                        onClick={(e) => editClickHandler(e)}
                      />
                    </>
                  ) : (
                    <div>
                      <input
                        value={techNums[number]}
                        onChange={(e) => nameChangeHandler(e, number)}
                        style={{
                          border: "1px solid #705cc9",
                          borderRadius: "3px",
                        }}
                      />
                      <div className="action-icons">
                        <FaTimes
                          style={{ cursor: "pointer" }}
                          onClick={(e) => cancelEditHandler(e, number)}
                        />

                        <FaSave
                          style={{ cursor: "pointer" }}
                          onClick={async (e) =>
                            await saveEditHandler(e, number)
                          }
                        />
                      </div>
                    </div>
                  )}
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {number}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div class="spinner"></div>
      )}
    </div>
  );
}

export default TechPhones;
