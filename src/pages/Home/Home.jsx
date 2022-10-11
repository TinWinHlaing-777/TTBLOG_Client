import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { API_URL } from "../../config";
import axios from "axios";
import { clearLocalData, getLocalData } from "../../utils/common";
import { useNavigate } from "react-router";

const Home = () => {
  const token = getLocalData().getToken;
  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  });

  const checkToken = async () => {
    try {
      const data = {
        token: token,
      };
      await axios
        .post(`${API_URL}/check_token`, data)
        .then((res) => {
          alert.success("Welcome back!");
        })
        .catch((err) => {
          clearLocalData();
          navigate("/login");
        });
    } catch (error) {
      alert.error(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="home__container">
        
      </div>
    </>
  );
};

export default Home;
