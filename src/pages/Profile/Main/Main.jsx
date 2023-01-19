import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Form from "../../../components/Form/Profile/Form";
import Navbar from "../../../components/Navbar/Navbar";
import { checkToken, clearLocalData } from "../../../utils/common";
import "./main.css";

const Main = () => {
  const [checkState, setCheckState] = useState(false);

  const checkStorage = useCallback(() => {
    const checkData = checkToken();
    if (checkData === true) setCheckState(true);
    else {
      clearLocalData();
      setCheckState(false);
    }
  }, []);

  useEffect(() => {
    checkStorage();
  }, [checkStorage]);

  return (
    <>
      <Navbar />
      {checkState === true ? (
        <div className="main__profile__container">
          <Form />
        </div>
      ) : (
        <h1 className="warning__login__text">
          Please
          <Link to="/login" className="warning__span">
            &nbsp;Login&nbsp;
          </Link>
          to access your account!
        </h1>
      )}
      <Footer />
    </>
  );
};

export default Main;
