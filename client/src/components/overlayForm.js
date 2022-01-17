import React from "react";
import Form from "./form/form";
import "./overlayForm.css";
import { useState } from "react";
import Loader from "../ui/loading/loading";

const Overlay = (props) => {
  const [LoadingHandler, setLoadingHandler] = useState(false);
  const isLoadingHandler = (val) => {
    setLoadingHandler(val);
  };
  const showModal = () => {
    props.showModalClickHandler();
  };
  const itemShow = (val) => {
    props.setItemShow(val);
  };
  return !LoadingHandler ? (
    <Form
      showModal={showModal}
      itemShow={itemShow}
      isLoadingHandler={isLoadingHandler}
    />
  ) : (
    <Loader visible={LoadingHandler} />
  );
};

export default Overlay;
