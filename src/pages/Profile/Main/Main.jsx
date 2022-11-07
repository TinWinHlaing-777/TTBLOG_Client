import React from "react";
import Form from "../../../components/Form/Profile/Form";
import Navbar from "../../../components/Navbar/Navbar";
import "./main.css";

const Main = ({ openMenu, onCloseMenu }) => {
  const style = {
    paddingBottom: "20px",
  };

  console.log(openMenu);

  return (
    <div style={style} className="container">
      <Navbar />
      <div className="main__profile__container">
        <Form />
      </div>
    </div>
  );
};

export default Main;
