import Overlay from "../components/overlayForm";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Expenses from "./expenses";
import "./landingPage.css";

const LandingPage = () => {
  const [showOverlay, setshowOverlay] = useState("true");

  const showModalClickHandler = () => {
    setshowOverlay(!showOverlay);
  };
  let button_title = "Add Item";
  if (showOverlay) button_title = "See Items";
  else button_title = "Add Item";

  let msg = "";
  if (showOverlay) msg = "Add your expenses...";
  else msg = "";

  const setItemShow = (val) => {
    setshowOverlay(!val);
  };
  return (
    <div className="landing_page_container">
      <h2 className="msg_container">{msg}</h2>

      {showOverlay ? (
        <Overlay
          setItemShow={setItemShow}
          showModalClickHandler={showModalClickHandler}
        />
      ) : (
        <>
          <div
            className="back_button_container"
            onClick={showModalClickHandler}
          >
            <BsArrowRight />
          </div>
          <Expenses />
        </>
      )}
      <div className="button_container">
        <button className="add_button" onClick={showModalClickHandler}>
          {button_title}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
