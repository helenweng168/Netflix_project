import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./List.css";

function FetchingData() {
  const [lists, setLists] = useState([]);
  const [reclists, setRecLists] = useState([]);
  const [indicator, setInd] = useState(0);

  useEffect(() => {
    axios.get("data.json").then((response) => {
      console.log(response);
      if (indicator === 0) {
        setLists(response.data.mylist);
        setRecLists(response.data.recommendations);
        setInd(1);
      }
    });
  });
  const deleteItem = (id) => {
    setLists(lists.filter((i) => i.id !== id));
  };
  const addItem = (id) => {
    const newLists = lists.concat(reclists.find((x) => x.id === id));
    //setLists({ lists: [lists, reclists.find((x) => x.id === id)] });
    setLists(newLists);
    setRecLists(reclists.filter((i) => i.id !== id));
  };

  return (
    <div className="container">
      <div className="mylist">
        <div>
          <h1>My List:</h1>
        </div>
        {lists.map((l) => {
          return (
            <div className="mylistrow">
              <div className="img">
                <img src={l.img} alt="p1" />
              </div>

              <div className="title">
                <p>{l.title}</p>{" "}
              </div>
              <div>
                <button
                  className="button"
                  onClick={() => {
                    deleteItem(l.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="recom">
        <div>
          <h1>Recommendations:</h1>
        </div>
        {reclists.map((r) => {
          return (
            <div className="recorow">
              <div className="img">
                <img src={r.img} alt="p1" />
              </div>
              <div className="title">
                <p>{r.title}</p>
              </div>

              <div>
                <button
                  className="button"
                  onClick={() => {
                    addItem(r.id);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchingData;
