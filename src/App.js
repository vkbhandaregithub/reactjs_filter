import { useState } from "react";
import "./styles.css";
import data from "../src/data";
export default function App() {
  const [getData, setGetData] = useState(data);
  console.log(getData);
  const getType = (type) => {
    setGetData(
      type === "all"
        ? data
        : data.filter((item, i) => {
            return item.type === type;
          })
    );
    // console.log(filterdata);
  };
  return (
    <>
      <h1>ReactJs Filter By Type</h1>
      <div className="App">
        <div className="parent ">
          {["all", "electronics", "food", "car", "fruit"].map((item, i) => {
            return (
              <button
                onClick={() => {
                  getType(item);
                }}
              >
                {item.toLocaleLowerCase()}
              </button>
            );
          })}
        </div>
      </div>
      <div className="parent">
        <div className="card_container parent-two">
          {getData.map((item, i) => {
            return (
              <div className="card">
                <p>{item.id} </p>
                <p>{item.name} </p>
                <p>{item.type} </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
