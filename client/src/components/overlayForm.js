import React from "react";
import Form from "./form/form";
import "./overlayForm.css";
import { useState } from "react";
import Loader from "../ui/loading/loading";
const Overlay = () => {
  const [LoadingHandler, setLoadingHandler] = useState(false);
  const isLoadingHandler = (val) => {
    setLoadingHandler(val);
  };
  return !LoadingHandler ? (
    <Form isLoadingHandler={isLoadingHandler} />
  ) : (
    <Loader visible={LoadingHandler} />
  );
};

export default Overlay;
