import axios from "axios";
import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { API_URL, MAIN_URL } from "../../config";
import "./viewContent.css";

const ViewContent = () => {
  const [postData, setPostData] = React.useState([]);
  const [viewImage, setViewImage] = React.useState([]);

  useEffect(() => {
    getPostData();
  }, []);

  const getPostData = () => {
    const viewData = [];
    try {
      axios
        .get(`${API_URL}/post/all`)
        .then((res) => {
          res.data.forEach((element) => {
            viewData.push(element);
            setPostData(viewData);
          });
          getPostImage();
          console.log("hello");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getPostImage = async () => {
    postData.forEach((element) => {
      console.log(element);
    });
  };

  return (
    <>
      <Navbar />
      <div className="show__list__container">
        <div className="list__header">
          <h1 className="show__list__title">Find Preferable Content</h1>
          <input
            type="text"
            className="find__post__input"
            placeholder="Find the relevant contents"
          />
        </div>
        <div className="list__card__container">
          {postData.map((element, index) => {
            return (
              <Fade bottom key={index}>
                <div className="list__card">
                  <div className="list__card__image__container">
                    <img
                      src={element.postImage}
                      alt="sample"
                      className="list__card__image"
                    />
                  </div>
                  <div className="list__card__body">
                    <h3 className="body__title">{element.post_title}</h3>
                    <p className="body__text">{element.post_body}</p>
                  </div>
                  <div className="list__card__footer">
                    <button className="edit__card__btn">Edit</button>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewContent;
