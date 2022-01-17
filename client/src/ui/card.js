import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import "./card.css";
import axios from "axios";
const Card = (props) => {
  const food_pic =
    "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg";
  const snack_pic =
    "https://us.123rf.com/450wm/dipakshelare/dipakshelare1911/dipakshelare191110606/136641245-indian-snack-besan-gram-flour-sev-and-chakli-chakali-or-murukku-.jpg?ver=6";
  const stationary_pic =
    "https://5.imimg.com/data5/BY/LQ/FX/ANDROID-9227468/product-jpeg-500x500.jpg";
  const others_pic =
    "https://logos.flamingtext.com/Word-Logos/others-design-sketch-name.png";
  let url = others_pic;
  const getUrl = (val) => {
    if (!val) url = others_pic;
    else {
      const lowVal = val.toLowerCase();
      if (lowVal === "food") url = food_pic;
      else if (lowVal === "stationary") url = stationary_pic;
      else url = snack_pic;
    }
  };
  const optionsClickHandler = () => {
    alert("You Clicked ");
  };

  const deletePost = () => {
    axios.delete("http://localhost:5000/posts/" + props.id);
    props.setShow(false);
    console.log(props.id + " from console");
  };
  return (
    <div className="card_container">
      <div className="card_header_container">
        <div className="card_image_container">
          {getUrl(props.type)}
          <img src={url} alt="food"></img>
        </div>
        <div className="card_title_container">{props.title}</div>
      </div>
      <div className="card_body_container">
        <div className="card_details_container">
          <div className="card_type_container">Type: {props.type}</div>
          <div className="card_type_container">Payment: {props.method}</div>
          <div className="card_type_container">Place: {props.place}</div>
        </div>
        <div className="card_price_container">
          <div className="card_price">Rs. {props.price}</div>
          <div className="card_options_container">
            <div className="card_option_edit" onClick={optionsClickHandler}>
              <AiOutlineEdit />
            </div>
            <div className="card_option_delete" onClick={deletePost}>
              <AiOutlineDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
