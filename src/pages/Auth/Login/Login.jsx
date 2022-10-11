import React from "react";
import "../auth.css";
import { Link, useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useAlert } from "react-alert";
import {
  clearLocalData,
  getLocalData,
  saveLocalData,
} from "../../../utils/common";
import axios from "axios";
import { API_URL } from "../../../config";

const Login = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const localdata = getLocalData();

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    try {
      if (values.email !== "" && values.password !== "") {
        const data = {
          email: values.email,
          password: values.password,
          token: localdata.getToken,
        };
        axios
          .post(`${API_URL}/login`, data)
          .then((res) => {
            clearLocalData();
            saveLocalData(res.data.user_id, res.data.token);
            navigate("/");
            alert.success("Login Successful!");
          })
          .catch((err) => {
            alert.error(err.message);
          });
      } else {
        alert.error("All input data are required!");
      }
    } catch (error) {
      alert.error(error.message);
    }
  };

  return (
    <div className="main__container">
      <div className="card__container">
        <img src="/images/formGif.gif" alt="form__gif" className="form__gif" />
        <div className="form__container">
          <img src="/images/main_logo.png" alt="logo" className="logo__img" />
          <form method="post" onSubmit={loginUser}>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="example@gmail.com"
              className="input__check margin__fixed"
              value={values.email}
              onChange={handleChange("email")}
            />
            <input
              type="password"
              name="Password"
              id="password"
              className="input__check margin__fixed"
              placeholder="Password"
              value={values.password}
              onChange={handleChange("password")}
            />
            <Link to="/forget_password" className="forget__text margin__fixed">
              Forget Password?
            </Link>
            <button type="submit" className="submit__btn margin__fixed">
              <MdLogin className="btn__icon" />
              Login
            </button>
          </form>
          <Link className="google__container">
            <FcGoogle className="google__icon" />
            Login with Google
          </Link>
          <p className="spam__text__container">
            If you don't have an account, please{" "}
            <Link to="/register" className="spam__text">
              register first
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
