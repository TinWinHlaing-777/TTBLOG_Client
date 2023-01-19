import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import ProductCards from "../../../components/ProductCards/ProductCards";
import Footer from "../../../components/Footer/Footer";
import "./manage.css";
import { checkToken, clearLocalData } from "../../../utils/common";
import { Link } from "react-router-dom";

const Manage = () => {
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
        <div className="manageCards__container">
          <ProductCards />
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

export default Manage;
