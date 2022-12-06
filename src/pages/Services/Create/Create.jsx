import React from "react";
import { Fade } from "react-reveal";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import "./create.css";

const Create = () => {
  return (
    <>
      <Navbar />
      <div className="create__main__container">
        <Fade top>
          <h1 className="create__main__title">
            Are you finding to share your experience? <br /> This is the best
            place
          </h1>
        </Fade>
        <Fade bottom>
          <button className="create__main__btn">Create New Content</button>
        </Fade>
      </div>
      <div className="create__manage__container">
        <Fade left cascade>
          <div className="create__manage__text__container">
            <h1 className="create__manage__title">Edit Contents</h1>
            <p className="create__manage__body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              cupiditate quaerat at voluptatum quae aspernatur exercitationem
              illo, error dignissimos ex, fugiat, autem magnam molestias quam
              minus! Sequi molestiae obcaecati eveniet.
            </p>
            <button className="create__manage__btn">Manage</button>
          </div>
        </Fade>
        <Fade right cascade>
          <div className="create__manage__image__container">
            <img
              src="/images/create__manage.jpeg"
              alt="create__manage"
              className="create__manage__image"
            />
          </div>
        </Fade>
      </div>
      <div className="create__card__container">
        <h1 className="create__card__container__title">
          <Fade top cascade>
            Available Services
          </Fade>
        </h1>
        <Fade left cascade>
          <div className="create__card">
            <div className="create__main__card">
              <div className="create__main__card__header">
                <img
                  src="/images/profile__image.jpeg"
                  alt="profile"
                  className="create__main__card__image"
                />
              </div>
              <div className="create__main__card__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quis. Tenetur, earum asperiores! Optio cum odit
                tenetur dolores dolore soluta iste rerum ducimus corrupti unde
                consequatur, blanditiis iure doloribus corporis?
              </div>
            </div>
            <div className="create__main__card">
              <div className="create__main__card__header">
                <img
                  src="/images/create__image.jpeg"
                  alt="profile"
                  className="create__main__card__image"
                />
              </div>
              <div className="create__main__card__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quis. Tenetur, earum asperiores! Optio cum odit
                tenetur dolores dolore soluta iste rerum ducimus corrupti unde
                consequatur, blanditiis iure doloribus corporis?
              </div>
            </div>
            <div className="create__main__card">
              <div className="create__main__card__header">
                <img
                  src="/images/manage__image.jpeg"
                  alt="profile"
                  className="create__main__card__image"
                />
              </div>
              <div className="create__main__card__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quis. Tenetur, earum asperiores! Optio cum odit
                tenetur dolores dolore soluta iste rerum ducimus corrupti unde
                consequatur, blanditiis iure doloribus corporis?
              </div>
            </div>
            <div className="create__main__card">
              <div className="create__main__card__header">
                <img
                  src="/images/create__view.jpeg"
                  alt="profile"
                  className="create__main__card__image"
                />
              </div>
              <div className="create__main__card__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quis. Tenetur, earum asperiores! Optio cum odit
                tenetur dolores dolore soluta iste rerum ducimus corrupti unde
                consequatur, blanditiis iure doloribus corporis?
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <button className="create__card__btn">More</button>
        </Fade>
      </div>
      <div className="create__check__container">
        <Fade left cascade>
          <div className="create__check__image__container">
            <img
              src="/images/services__image.png"
              alt="services__image"
              className="create__check__image"
            />
          </div>
        </Fade>
        <Fade right cascade>
          <div className="create__check__text__container">
            <h1 className="create__check__title">
              Explore our available services
            </h1>
            <p className="create__check__body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae excepturi voluptatibus ipsa, nemo fugiat quo sint,
              praesentium eos facilis, tempore ab ipsam veritatis vel iusto
              voluptates perferendis quisquam aperiam placeat.
            </p>
            <button className="create__check__btn">Services</button>
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
};

export default Create;
