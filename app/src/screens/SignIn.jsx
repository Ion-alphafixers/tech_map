import "../styles/signUp.css";
import "../styles/signIn.css";
import SignUpHeader from "../components/SignUpHeader";
import SignUpInput from "../components/SignUpInput";
import { toast } from "react-toastify";
import backend_cnx from "../tools/backend_connection";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    secret: "",
  });
  const redirect = () => {
    navigate("/home");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await backend_cnx.sign_in(formData);
    const json_response = await response.json();
    localStorage.setItem("user", json_response["user"]);
    localStorage.setItem("name", json_response["name"]);
    localStorage.setItem("email", json_response["email"]);
    if (response?.status === 200) {
      toast.success("Logged In", {
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/techs_map");
      }, 1000);
    } else {
      toast.error("Wrong Credentials", {
        autoClose: 1000,
      });
    }
  };
  return (
    <div className="signup_container sign_in_container">
      <form className="form_inputs" onSubmit={handleSubmit}>
        <SignUpHeader placeholder={"Sign In"} />

        <div className="row sign_in">
          <SignUpInput
            placeholder={"Email"}
            setFormData={setFormData}
            formData={formData}
          />
          <SignUpInput
            placeholder={"Password"}
            setFormData={setFormData}
            formData={formData}
          />
        </div>
        <div className="input_component submit sign_in">
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
