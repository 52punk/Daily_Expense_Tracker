import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../ui/card.js";
import "./epenses.css";

const Expenses = (props) => {
  const [post, setPost] = useState([]); // initialize here
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:5000/posts`)
        .then((res) => setPost(res.data));
    }
    fetchData();
    setShowHandler();
  }); // pass id as a dependency here

  const setShowHandler = () => {
    setShow(true);
  };
  // return post;
  /*
  const data = axios
    .get("http://localhost:5000/posts")
    .then((data) => console.log(data))
    .then((data) => {
      const allData = [];
     
      for (const key in data) {
        const Data = {
          id: key,
          ...data[key],
        };
        allData.push(Data);
      }
      console.log(allData);
    });
    */

  const [show, setShow] = useState(false);
  //let show = true;
  console.log(post);
  console.log(show);
  return (
    <div className="expenses_container">
      {show ? (
        <>
          {post.map((Data) => {
            return (
              <Card
                id={Data._id}
                title={Data.title}
                type={Data.type}
                method={Data.method}
                price={Data.price}
                place={Data.place}
                setShow={setShow}
              />
            );
          })}
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default Expenses;
