import React, { useEffect, useState } from "react";

function Dashboard() {
  const detail = localStorage.getItem("detail");
  const newdetail = JSON.parse(detail);
  const [text, setText] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [data, setData] = useState([]);

  const handleAdd = () => {
    if (!text) {
      return;
    }
    setData((prev) => [...prev, text]);
    setText("");
  };

  const editHandlePress = (val, i) => {
    setText(val);
    setSelectedIndex(i);
    setShowEdit(true);
  };

  const editValue = () => {
    data[selectedIndex] = text;
    setText("");
    setSelectedIndex(null);
    setShowEdit(false);
  };

  console.log(selectedIndex, "Index");
  return (
    <div style={{ marginTop: 50 }}>
      {/*
        newdetail.map((ele)=>{
            return <h1>{ele.text}</h1>
        })
      */}
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      &nbsp;&nbsp;
      {showEdit ? (
        <button onClick={editValue}>Edit</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
      <ul style={{ listStyle: "none" }}>
        {data?.map((val, i) => {
          return (
            <li>
              {val}{" "}
              <button onClick={() => editHandlePress(val, i)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dashboard;
