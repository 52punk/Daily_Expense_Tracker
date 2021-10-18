import "./styles.css";
import { useRef } from "react";

const Form = (props) => {
  const url = "http://localhost:5000/posts";
  const type = useRef();
  const place = useRef();
  const method = useRef();
  const item = useRef();
  const price = useRef();

  const addDataFormHandler = () => {
    console.log("Data should be posted");
    const formData = new FormData();
    formData.append("item", item.current.value);
    formData.append("price", price.current.value);
    formData.append("type", type.current.value);
    formData.append("place", place.current.value);
    formData.append("method", method.current.value);
    props.isLoadingHandler(true);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        props.isLoadingHandler(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form_container">
      <div className="form_input_container">
        <label htmlFor="item_input" className="item_label form_label">
          Item
        </label>
        <input
          ref={item}
          id="item_input"
          className="form_input"
          type="text"
          placeholder="eg. snacks, fruits etc"
        />
        <label htmlFor="type_input" className="type_label form_label">
          Type
        </label>
        <textarea
          ref={type}
          id="type_input"
          className="form_input"
          type="text"
          placeholder="eg. food, stationary etc"
        />
        <label htmlFor="method_input" className="method_label form_label">
          Method
        </label>
        <input
          ref={method}
          id="method_input"
          className="form_input"
          type="text"
          placeholder="eg. Cash, UPI"
        />
        <label htmlFor="place_input" className="plcae_label form_label">
          Place
        </label>
        <input
          ref={place}
          id="place_input"
          className="form_input"
          type="text"
          placeholder="eg. hornbill, kalpana etc"
        />

        <label htmlFor="price_input" className="price_label form_label">
          Price
        </label>
        <input
          ref={price}
          id="price_input"
          className="form_input"
          type="number"
          placeholder="0"
        />
      </div>
      <div className="addData_button_container">
        <button className="addData_button" onClick={addDataFormHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
