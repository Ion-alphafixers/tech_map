import React from "react";

const TechMaps = () => {
  return (
    <div style={{ margin: 0, padding: 0, width: "100%", height: "100vh" }}>
      <iframe
        title="Report Section"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/view?r=eyJrIjoiNTMxYzFmZmMtOGFlMy00NTNlLWJkOWEtZDJkZTE3YTJhNDJhIiwidCI6IjdjODUwYzdjLWE3YTUtNGNhMi1iMTljLTM5MzE5MjM5ZDc2OSIsImMiOjl9"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default TechMaps;
