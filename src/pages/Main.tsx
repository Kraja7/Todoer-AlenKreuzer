import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Main.css";
import Lista from "./Lista";
const Main = () => {
  return (
    <>
      <h1 className="naslov">ToDoer</h1>
      <div className="layout">
        <div className="content">
          <Lista />
        </div>
      </div>
      <Link to={"/add"}>
        <button className="add">Dodaj ToDo</button>
      </Link>
    </>
  );
};

export default Main;
