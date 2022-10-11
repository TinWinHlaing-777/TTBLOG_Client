import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoCreateOutline } from "react-icons/io5";
import validator from "validator";
import { useAlert } from "react-alert";
import axios from "axios";
import { API_URL } from "../../../config";
import { saveLocalData } from "../../../utils/common";

const Register = () => {
  const alert = useAlert();
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    first_name: "",
    last_name: "",
    org_name: "",
    business_name: "",
    email: "",
    password: "",
    co_password: "",
  });

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const registerUser = (e) => {
    e.preventDefault();
    try {
      if (
        values.first_name !== "" &&
        values.last_name !== "" &&
        values.org_name !== "" &&
        values.business_name !== "" &&
        values.email !== "" &&
        values.password !== ""
      ) {
        if (
          validator.isStrongPassword(values.password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          })
        ) {
          if (values.password === values.co_password) {
            const data = {
              first_name: values.first_name,
              last_name: values.last_name,
              org_name: values.org_name,
              business_name: values.business_name,
              email: values.email,
              password: values.password,
            };
            axios
              .post(`${API_URL}/register`, data)
              .then((res) => {
                saveLocalData(res.data.user_id, res.data.token);
                navigate("/");
                alert.success("Successfully created an account!");
              })
              .catch((err) => {
                alert.error(err.message);
              });
          } else {
            alert.error("Password didn't match!");
          }
        } else {
          alert.error("Password should contain special characters!");
        }
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
          <form method="post" onSubmit={registerUser}>
            <div className="name__container">
              <div className="fname__container">
                <input
                  type="text"
                  name="First Name"
                  id="first_name"
                  className="input__check"
                  placeholder="First Name"
                  value={values.first_name}
                  onChange={handleChange("first_name")}
                />
              </div>
              <div className="lname__container">
                <input
                  type="text"
                  name="First Name"
                  id="last_name"
                  className="input__check"
                  placeholder="Last Name"
                  value={values.last_name}
                  onChange={handleChange("last_name")}
                />
              </div>
            </div>
            <div className="business__container">
              <div className="org__container">
                <input
                  type="text"
                  name="Organization Name"
                  id="org_name"
                  className="input__check"
                  placeholder="Organization Name"
                  value={values.org_name}
                  onChange={handleChange("org_name")}
                />
              </div>
              <div className="b__container">
                <input
                  type="text"
                  name="Business Name"
                  id="business_name"
                  className="input__check"
                  placeholder="Business Name"
                  value={values.business_name}
                  onChange={handleChange("business_name")}
                />
              </div>
            </div>

            <div className="email__container">
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="example@gmail.com"
                className="input__check"
                value={values.email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="password__container">
              <input
                type="password"
                name="Password"
                id="password"
                className="input__check"
                placeholder="Password"
                value={values.password}
                onChange={handleChange("password")}
              />
            </div>
            <div className="password__container">
              <input
                type="password"
                name="CoPassword"
                id="co_password"
                className="input__check"
                placeholder="Re-enter Password"
                value={values.co_password}
                onChange={handleChange("co_password")}
              />
            </div>

            <div className="btn__container">
              <button type="submit" className="submit__btn">
                <IoCreateOutline className="btn__icon" />
                Create an account
              </button>
            </div>
          </form>
          <Link className="google__container">
            <FcGoogle className="google__icon" />
            Create an account with Google
          </Link>
          <p className="spam__text__container">
            Already have an account? Please{" "}
            <Link to="/login" className="spam__text">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
