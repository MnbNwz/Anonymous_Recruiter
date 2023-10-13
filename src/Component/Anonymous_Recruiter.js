import React, { useState } from "react";
import "./anonymousRectuiter.css";
import homepage from "../assets/Homepage.png";
import homepage1 from "../assets/homepage1.jpg";
import homepage2 from "../assets/homepage2.jpg";
import homepage3 from "../assets/homepage3.jpg";
import homepage5 from "../assets/homepage5.jpg";

import RecruiterDialogue from "./RecruiterDialogue";

const Anonymous_Recruiter = () => {
  const [showGif, setShowGif] = useState(true);
  const [showDiv, setShowDiv] = useState(false);
  const [showFirstDiv, setshowFirstDiv] = useState(true);

  setTimeout(() => {
    setShowGif(false);
    setShowDiv(true);
  }, 5800);
  return (
    <div
      className="background"
      style={{
        backgroundColor: showGif ? "black" : "white",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <img src={homepage1} className=" background" /> */}
      <div className="custom-container">
        {showGif && (
          <div className="gifVideo">
            <img
              src={require("../assets/ezgif.com-gif-maker.gif")}
              alt="loading..."
            />
          </div>
        )}
        {showDiv && (
          <div className="recruiter">
            {showFirstDiv && (
              <RecruiterDialogue
                showFirstDiv={showFirstDiv}
                setshowFirstDiv={setshowFirstDiv}
              />
            )}
          </div>
        )}
      </div>
      <span>
        <p className="footer1"> ©️ Anonymous Recruiter 2022</p>
      </span>
    </div>
  );
};

export default Anonymous_Recruiter;
