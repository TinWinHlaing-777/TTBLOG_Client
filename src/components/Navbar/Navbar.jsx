import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { HiOutlineViewList } from "react-icons/hi";
import { IoIosCreate } from "react-icons/io";
import { MdFindInPage } from "react-icons/md";
import { TiInfo } from "react-icons/ti";
import "./navbar.css";
import { getLocalData } from "../../utils/common";
import { useAlert } from "react-alert";

const Navbar = () => {
  const [profileStatus, setProfileStatus] = React.useState(false);
  const token = getLocalData().getToken;
  const alert = useAlert();

  useEffect(() => {
    checkProfile();
  });

  const checkProfile = () => {
    if (token !== null) {
      setProfileStatus(true);
    } else {
      setProfileStatus(false);
      alert.error("Please login or create account first!");
    }
  };

  return (
    <div className="nav__container">
      <Link to="/" className="logo__container">
        <img src="/images/main_logo.png" alt="logo" className="main__logo" />
      </Link>
      <div className="navList__container">
        <ul className="main__list">
          <Link className="list__item active" to="/services/view">
            <HiOutlineViewList className="list__item__icon" />
            <li className="list__item__text">View Blogs</li>{" "}
          </Link>
          <Link className="list__item" to="/services/create">
            <IoIosCreate className="list__item__icon" />
            <li className="list__item__text">Create</li>
          </Link>
          <Link className="list__item" to="/services/overview">
            <MdFindInPage className="list__item__icon" />
            <li className="list__item__text">Overview</li>
          </Link>
          <Link className="list__item" to="/about">
            <TiInfo className="list__item__icon" />
            <li className="list__item__text">About Us</li>
          </Link>
        </ul>
      </div>
      <div className="authBtn__container">
        {profileStatus === false ? (
          <ul className="auth__list">
            <Link className="auth__list__item login__btn" to="/login">
              <li>Login</li>
            </Link>
            <Link className="auth__list__item register__btn" to="/register">
              <li>Get Started</li>
            </Link>
          </ul>
        ) : (
          <ul className="auth__list">
            <Link className="auth__list__item" to="/profile/main">
              <CgProfile className=" profile__icon" />
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
