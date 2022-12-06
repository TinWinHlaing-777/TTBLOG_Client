import React from "react";
import { Fade } from "react-reveal";
import { MdBusinessCenter, MdComputer, MdSportsHandball } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import Navbar from "../../../components/Navbar/Navbar";
import "./view.css";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";

const View = () => {
  return (
    <>
      <Navbar />
      <div className="blog__container">
        <div className="main__blog">
          <Fade top>
            <h1 className="blog__title">
              Bloggers love to share <br /> & <br /> readers love to seek
              knowledge
            </h1>
          </Fade>
          <Fade bottom>
            <Link to="/views/all">
              <button className="explore__btn">Explore</button>
            </Link>
          </Fade>
        </div>
        <div className="blog__create__container">
          <Fade left cascade>
            <div className="blog__left">
              <h1 className="blog__left__title">Enlarge Your Idea</h1>
              <p className="blog__left__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, dolorum nisi eos nulla in, hic totam vero quam atque
                voluptatibus voluptatem debitis illum assumenda explicabo quod
                perspiciatis, fugit velit ipsum.
              </p>
              <Link to="/profile/create_blog">
                <button className="blog__left__btn">Create a post</button>
              </Link>
            </div>
          </Fade>
          <Fade right>
            <div className="blog__right">
              <img
                src="/images/create.png"
                alt="create"
                className="create__img"
              />
            </div>
          </Fade>
        </div>
        <div className="content__available__container">
          <h1 className="content__container__title">
            <Fade top cascade>
              Most available content types
            </Fade>
          </h1>
          <Fade right cascade>
            <div className="content__card__container">
              <div className="content__card">
                <div className="content__header">
                  <MdBusinessCenter className="content__card__icon" />
                </div>
                <div className="content__body">
                  <p className="content__body__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum, quis! Ad aliquam ipsum quos dolorem odit
                    reiciendis nostrum nemo eligendi aliquid unde, consectetur
                    voluptas impedit ea dignissimos, vel, sequi nesciunt.
                  </p>
                </div>
              </div>
              <div className="content__card">
                <div className="content__header">
                  <MdComputer className="content__card__icon" />
                </div>
                <div className="content__body">
                  <p className="content__body__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum, quis! Ad aliquam ipsum quos dolorem odit
                    reiciendis nostrum nemo eligendi aliquid unde, consectetur
                    voluptas impedit ea dignissimos, vel, sequi nesciunt.
                  </p>
                </div>
              </div>
              <div className="content__card">
                <div className="content__header">
                  <AiOutlineGlobal className="content__card__icon" />
                </div>
                <div className="content__body">
                  <p className="content__body__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum, quis! Ad aliquam ipsum quos dolorem odit
                    reiciendis nostrum nemo eligendi aliquid unde, consectetur
                    voluptas impedit ea dignissimos, vel, sequi nesciunt.
                  </p>
                </div>
              </div>
              <div className="content__card">
                <div className="content__header">
                  <MdSportsHandball className="content__card__icon" />
                </div>
                <div className="content__body">
                  <p className="content__body__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum, quis! Ad aliquam ipsum quos dolorem odit
                    reiciendis nostrum nemo eligendi aliquid unde, consectetur
                    voluptas impedit ea dignissimos, vel, sequi nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <Link to="/views/all">
              <button className="content__detail__btn">Details</button>
            </Link>
          </Fade>
        </div>
        <div className="profile__create__container">
          <Fade left>
            <div className="left__create__container">
              <img
                src="/images/setProfile.png"
                alt="setProfile"
                className="set__profile__img"
              />
            </div>
          </Fade>
          <Fade right cascade>
            <div className="right__create__container">
              <h1 className="right__create__title">Stay Update your profile</h1>
              <p className="right__create__body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus doloremque magni neque odit voluptatum fugit, ducimus
                perspiciatis veniam optio culpa beatae assumenda necessitatibus?
                Aliquam doloribus sapiente facilis nam, inventore consectetur.
              </p>
              <Link to="/profile/main">
                <button className="right__create__btn">Check Profile</button>
              </Link>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default View;
