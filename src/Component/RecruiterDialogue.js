import classNames from "classnames";
import React, { useState } from "react";
import back from "../assets/back.png";
import "./anonymousRectuiter.css";

const RecruiterDialogue = (props) => {
  const [showFirstDiv, setshowFirstDiv] = useState(true);
  const [secondDiv, setSecondDiv] = useState(false);
  const [backDiv1, setBackDiv1] = useState(true);

  const classes1 = classNames("backText backText1", { backText11: backDiv1 });
  const classes2 = classNames("backText backText2", { backText22: backDiv1 });
  const classes3 = classNames("backText backText3", { backText33: backDiv1 });
  const classes4 = classNames("backText backText4", { backText44: backDiv1 });
  const classes5 = classNames("secondTitle", { secondTitle1: backDiv1 });
  return (
    <div className="main-div">
      <div
        style={{
          visibility: showFirstDiv ? "visible" : "hidden",
          height: showFirstDiv ? "auto" : "0",
        }}
      >
        {/* <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
            }}
          >
            <h2 className="title">
              Anonymous Recruiter <span className="border"></span>
            </h2>
          </div>
        </div> */}

        <div className="selectionDiv">
          <div className="heading-div">
            <h2 className="heading">
              Are you a member? <span className="border1"></span>
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "60px",
              justifyContent: "center",
            }}
          >
            <a href="https://www.google.com" target="_black">
              <button className="btn1">Yes</button>
            </a>
            <button
              className="btn2"
              onClick={() => setshowFirstDiv(false) + setSecondDiv(true)}
            >
              No
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: secondDiv ? "block" : "none",
          // visibility: backDiv ? "visible" : "hidden",
          // height: backDiv ? "auto" : 0,
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
            }}
          >
            <h2 className={classes5}>
              Anonymous Recruiter <span className="border1"></span>
            </h2>
          </div>
        </div>

        <div
          onClick={() =>
            setshowFirstDiv(true) + setSecondDiv(false) + setBackDiv1(false)
          }
          className="backDiv"
        >
          <img className="backButton" src={back} alt="loading..." />
          <h2 className="back">Back</h2>
        </div>
        <div className="container">
          <div>
            <h3 className={classes1}>
              Anonymous Recruiter is an elite, private
            </h3>
            <h3 className={classes2}>
              network of freelance recruiters that work
            </h3>
            <h3 className={classes3}>
              together to place more candidates.
              <span className="border1"></span>
            </h3>
            <h3 className={classes4}>
              <span className="backText5">Link to </span>

              <a href="https://www.google.com" target="_black">
                <u style={{ color: "black" }}>notion</u>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDialogue;
