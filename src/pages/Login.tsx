import "../css/Login.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions, getIsLoggedIn } from "../store/auth/authState";
import { Form } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const onFinish = () => {
    dispatch(authActions.setIsLoggedIn());
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/fetch");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="login-parent">
      <div className="div1">
        <Form className="login-form" onFinish={onFinish}>
          <label>
            Ime:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Lozinka:
            <input
              type="password"
              name="password"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$"
            />
          </label>
          <br />
          <button type="submit">Log in</button>
        </Form>
      </div>
      <div className="div2">
        <h1>ToDoer</h1>
        <p>
          <span className="pt">Discipline is the bridge</span> <br></br>
          <span className="pt1">between goals and accomplishment.</span>
          <br></br>--- Jim Rohn ---
        </p>
      </div>
      <p>By: Alen Kreuzer</p>
    </div>
  );
};

export default Login;
