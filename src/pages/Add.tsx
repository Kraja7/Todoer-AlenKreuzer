import React, { useState } from "react";
import axios from "axios";
import { Checkbox } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Add = () => {
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: {
    target: { name: string; checked: boolean; value: any };
  }) => {
    if (e.target.name === "completed") {
      setTodo({ ...todo, [e.target.name]: e.target.checked });
    } else {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todo)
      .then((res) => {
        navigate("/fetch");
      });
  };

  return (
    <>
      <h1 className="naslov1">ToDoer</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Completed:
          <input
            type="checkbox"
            name="completed"
            checked={todo.completed}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Todo</button>
        <br></br>
        <Link to={"/"}>
          <button className="x">X </button>
        </Link>
      </form>
    </>
  );
};

export default Add;
