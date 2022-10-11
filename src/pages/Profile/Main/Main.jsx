import React from "react";
import Form from "../../../components/Form/Profile/Form";
import MenuItem from "../../../components/Menu/MenuItem";
import Navbar from "../../../components/Navbar/Navbar";
import "./main.css";

const Main = () => {
  const style = {
    paddingBottom: "20px",
  };

  return (
    <div style={style} className="container">
      <Navbar />
      <MenuItem />
      <Form />
    </div>
  );
};

export default Main;
