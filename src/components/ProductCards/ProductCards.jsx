import React, { useEffect } from "react";
import { API_URL, MAIN_URL } from "../../config";
import { Fade } from "react-reveal";
import axios from "axios";
import "./productcard.css";
import { getLocalData } from "../../utils/common";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const ProductCards = () => {
  const [postData, setPostData] = React.useState([]);
  const [editField, setEditField] = React.useState(false);

  const userId = getLocalData();
  const navigate = useNavigate();

  useEffect(() => {
    getPostData();
  });

  const getPostData = async () => {
    const viewData = [];
    if (window.location.pathname === "/views/all") {
      try {
        setEditField(true);

        await axios
          .get(`${API_URL}/post/all`)
          .then((res) => {
            res.data.forEach((element) => {
              viewData.push(element);
              setPostData(viewData.reverse());
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        setEditField(false);

        await axios
          .get(`${API_URL}/post/all/user/${userId.getId}`)
          .then((res) => {
            res.data.forEach((data) => {
              viewData.push(data);
              setPostData(viewData.reverse());
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const viewDetails = (data) => {
    navigate(`/views/detail/${data}`);
  };

  const updatePostInfo = (data) => {
    navigate(`/profile/update_blog/${data}`);
  };

  return (
    <>
      <div className="list__header">
        <h1 className="show__list__title">
          🎉 Incredible Contents are Ready for you 🎉
        </h1>
      </div>
      <div className="list__card__container">
        {postData.map((element, index) => {
          return (
            <Fade bottom key={index}>
              <div className="list__card">
                <div className="list__card__image__container">
                  <img
                    crossOrigin="anonymous"
                    src={`${MAIN_URL}/${element.postImage}`}
                    alt="sample"
                    className="list__card__image"
                  />
                </div>
                <div className="list__card__body">
                  <h3 className="body__title">{element.post_title}</h3>
                  <p className="body__text">{element.post_body}</p>
                </div>
                {editField === false ? (
                  <div className="list__card__footer">
                    <button
                      className="edit__card__btn"
                      onClick={() => updatePostInfo(element._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="view__card__btn"
                      onClick={() => viewDetails(element._id)}
                    >
                      View
                    </button>
                  </div>
                ) : (
                  <div className="list__card__footer">
                    <button
                      className="view__card__btn"
                      onClick={() => viewDetails(element._id)}
                    >
                      View
                    </button>
                  </div>
                )}
              </div>
            </Fade>
          );
        })}
      </div>
    </>
  );
};

export default ProductCards;
