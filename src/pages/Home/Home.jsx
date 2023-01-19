import React, { useCallback, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { API_URL, MAIN_URL } from "../../config";
import axios from "axios";
import { clearLocalData, getLocalData } from "../../utils/common";
import "./home.css";
import { Fade } from "react-reveal";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const token = getLocalData().getToken;
  const alert = useAlert();

  const [popular, setPopular] = useState([]);

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

  const checkToken = useCallback(async () => {
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
          console.log(err);
          clearLocalData();
        });
    } catch (error) {
      console.log(error);
      alert.error(error.message);
    }
  }, [alert, token]);

  const getPopularPosts = useCallback(async () => {
    try {
      const postData = [];
      await axios
        .get(`${API_URL}/post/popular`)
        .then((res) => {
          res.data.forEach((item) => {
            console.log(item);
            postData.push(item);
            let postArray = postData.slice(0, 4);
            setPopular(postArray);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPopularPosts();
    checkToken();
  }, [getPopularPosts, checkToken]);
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
              <Link className="start__btn">Get Started</Link>
            </Fade>
          </div>
        </div>
        <div className="first__sub__container">
          <Fade bottom cascade>
            <div className="first__sub__left">
              <h1 className="first__sub__title">View all contents</h1>
              <p className="first__sub__body">
                {/* All of the contents related with technology, science, medical,
                entertainment, sports, business and so many articles can be foud
                in our system. */}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium cumque dolore, temporibus adipisci nam maxime aperiam
                consectetur optio velit cupiditate! Labore laudantium quia, enim
                itaque molestiae incidunt ut architecto minus.
              </p>
              <Link to="/views/all">
                <button className="first__sub__btn">View</button>
              </Link>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="first__sub__right">
              <img
                src="/images/view_image.png"
                alt="view"
                className="first__sub__img"
              />
            </div>
          </Fade>
        </div>
        <div className="second__sub__container">
          <h1 className="second__sub__text">
            <Fade top cascade>
              Most Popular Blogs
            </Fade>
          </h1>
          <Fade bottom cascade>
            <div className="card__main">
              {popular.map((result, index) => {
                return (
                  <div className="card" key={index}>
                    <div className="card__header">
                      <img
                        crossOrigin="anonymous"
                        src={`${MAIN_URL}/${result.postImage}`}
                        alt="smaple"
                        className="card__img"
                      />
                    </div>
                    <div className="card__body">
                      <h3 className="card__body__title">{result.post_title}</h3>
                      <p className="card__body__text">{result.post_body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
          <Fade bottom>
            <Link to="/views/all">
              <button className="more__btn">Explore More</button>
            </Link>
          </Fade>
        </div>
        <div className="third__sub__container">
          <Fade bottom>
            <div className="third__sub__left">
              <img
                src="/images/dashboard.png"
                alt="dashboard"
                className="third__sub__img"
              />
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="third__sub__right">
              <h1 className="third__sub__title">Check Your Dashboard</h1>
              <p className="third__sub__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                ea expedita dolorem tempora tenetur possimus. Necessitatibus
                quam modi quod neque iure saepe delectus ad, aperiam natus
                consectetur ex odit voluptatem?
              </p>
              <Link to="/profile/dashboard">
                <button className="third__sub__btn">Check</button>
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
