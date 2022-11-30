import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { API_URL } from "../../config";
import axios from "axios";
import { clearLocalData, getLocalData } from "../../utils/common";
import { useNavigate } from "react-router";
import "./home.css";
import { Fade } from "react-reveal";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const token = getLocalData().getToken;
  const alert = useAlert();
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae qui voluptatem eveniet, fugit voluptate expedita architecto voluptates neque. Iure autem maxime itaque quisquam voluptatibus accusamus tempora beatae quae consectetur tenetur!",
    },
    {
      id: 2,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae qui voluptatem eveniet, fugit voluptate expedita architecto voluptates neque. Iure autem maxime itaque quisquam voluptatibus accusamus tempora beatae quae consectetur tenetur!",
    },
    {
      id: 3,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae qui voluptatem eveniet, fugit voluptate expedita architecto voluptates neque. Iure autem maxime itaque quisquam voluptatibus accusamus tempora beatae quae consectetur tenetur!",
    },
    {
      id: 4,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae qui voluptatem eveniet, fugit voluptate expedita architecto voluptates neque. Iure autem maxime itaque quisquam voluptatibus accusamus tempora beatae quae consectetur tenetur!",
    },
  ];

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
        });
    } catch (error) {
      alert.error(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="home__container">
        <div className="landing__container">
          <div className="landing__main">
            <Fade top>
              <h1 className="landing__text">
                Enlarge Your Idea, explore your skills and <br /> share your
                experiences here
              </h1>
            </Fade>
            <Fade bottom>
              <button className="start__btn">Get Started</button>
            </Fade>
          </div>
        </div>
        <div className="view__container">
          <Fade left cascade>
            <div className="view__left">
              <h1 className="view__container__title">View all contents</h1>
              <p className="view__container__body">
                {/* All of the contents related with technology, science, medical,
                entertainment, sports, business and so many articles can be foud
                in our system. */}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium cumque dolore, temporibus adipisci nam maxime aperiam
                consectetur optio velit cupiditate! Labore laudantium quia, enim
                itaque molestiae incidunt ut architecto minus.
              </p>
              <Link to="/views/all">
                <button className="view__container__btn">View</button>
              </Link>
            </div>
          </Fade>
          <Fade right cascade>
            <div className="view__right">
              <img
                src="/images/view_image.png"
                alt="view"
                className="view__img"
              />
            </div>
          </Fade>
        </div>
        <div className="detail__container">
          <h1 className="detail__text">
            <Fade top cascade>
              Most Popular Blogs
            </Fade>
          </h1>
          <Fade left cascade>
            <div className="card__main">
              {data.map((index) => {
                const { id, body } = index;
                return (
                  <div className="card" key={id}>
                    <div className="card__header">
                      <img
                        src="/images/bg.png"
                        alt="smaple"
                        className="card__img"
                      />
                    </div>
                    <div className="card__body">
                      <p className="card__body__text">{body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
          <Fade bottom>
            <Link to="/views/all">
              <button className="explore__more__btn">Explore More</button>
            </Link>
          </Fade>
        </div>
        <div className="dashboard__view">
          <Fade left>
            <div className="dashboard_left">
              <img
                src="/images/dashboard.png"
                alt="dashboard"
                className="dashboard__img"
              />
            </div>
          </Fade>
          <Fade right cascade>
            <div className="dashboard_right">
              <h1 className="dashboard__view__title">Check Your Dashboard</h1>
              <p className="dashboard__view__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                ea expedita dolorem tempora tenetur possimus. Necessitatibus
                quam modi quod neque iure saepe delectus ad, aperiam natus
                consectetur ex odit voluptatem?
              </p>
              <Link to="/profile/dashboard">
                <button className="dashboard__view__btn">Check</button>
              </Link>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
