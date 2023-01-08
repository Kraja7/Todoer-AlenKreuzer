import React, { useEffect, useState } from "react";
import "../css/Main.css";
import { Button, Card, Checkbox, Grid, Spin } from "antd";
import axios from "axios";
import { DeleteFilled } from "@ant-design/icons";

const Lista = () => {
  const [todos, setTodos] = useState([] as any[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data.slice(-10)));
    setLoading(false);
  }, []);
  if (loading) {
    return <Spin />;
  }

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="content_lista">
      {todos.length > 0 &&
        todos.map((todo) => (
          <Card
            size="small"
            bordered={false}
            style={{ width: 300 }}
            key={todo.id}
          >
            <p>{todo.title}</p>
            <div className="flex-row">
              <br></br>
              <p>Gotovo</p>
              <Checkbox checked={todo.completed} />
            </div>
            <DeleteFilled
              className="ikona"
              onClick={() => removeTodo(todo.id)}
            />
          </Card>
        ))}
    </div>
  );
};

export default Lista;
