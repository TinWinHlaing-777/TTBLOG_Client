import React, { useCallback, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import MenuItem from "../../../components/Menu/MenuItem";
import { HiOutlineUpload } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";
import { IoTrashBinOutline } from "react-icons/io5";
import "./createBlog.css";
import {
  checkToken,
  clearLocalData,
  getLocalData,
} from "../../../utils/common";
import axios from "axios";
import { API_URL, MAIN_URL } from "../../../config";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";

const CreateBlog = (props) => {
  const [postValue, setPostValue] = React.useState({
    title: "",
    body: "",
  });
  const [postImage, setPostImage] = React.useState();
  const [formTitle, setFormTitle] = React.useState();
  const [checkRoute, setCheckRoute] = React.useState(false);
  const [checkState, setCheckState] = React.useState(false);

  const userdata = getLocalData();
  const alert = useAlert();
  const navigate = useNavigate();
  const { id } = useParams();

  const checkStorage = useCallback(() => {
    const checkData = checkToken();
    if (checkData === true) setCheckState(true);
    else {
      clearLocalData();
      setCheckState(false);
    }
  }, []);

  const checkFormRoutes = useCallback(async () => {
    if (window.location.pathname.includes("/update_blog/")) {
      setCheckRoute(true);
      setFormTitle("Update Post");
      const getPostDetails = async () => {
        try {
          await axios
            .get(`${API_URL}/post/detail/${id}`)
            .then((res) => {
              res.data.forEach((data) => {
                setPostValue({
                  title: data.post_title,
                  body: data.post_body,
                });
                setPostImage(`${MAIN_URL}/${data.postImage}`);
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      };
      getPostDetails();
    } else {
      setCheckRoute(false);
      setFormTitle("Create a new category");
      setPostValue({
        title: "",
        body: "",
      });
    }
  }, [id]);

  useEffect(() => {
    checkStorage();
    checkFormRoutes();
  }, [checkStorage, checkFormRoutes]);

  const handleTextFields = (props) => (event) => {
    setPostValue({ ...postValue, [props]: event.target.value });
  };

  const handlePostImage = (event) => {
    setPostImage(event.target.files[0]);
  };

  const createPost = (e) => {
    e.preventDefault();
    try {
      if (postValue !== null && postImage !== null) {
        const formData = new FormData();
        formData.append("postImage", postImage);
        formData.append("post_title", postValue.title);
        formData.append("post_body", postValue.body);
        formData.append("userId", userdata.getId);
        formData.append("postStatus", true);
        const config = {
          Headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        axios
          .post(`${API_URL}/post/upload`, formData, config)
          .then((res) => {
            navigate("/views/all");
            alert.success("New post created!");
          })
          .catch((err) => {
            alert.error(
              "Some Internal problem occured! Please try again later!"
            );
          });
      }
    } catch (error) {
      alert.error("Internal Server error!");
    }
  };

  const updatePost = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        post_title: postValue.title,
        post_body: postValue.body,
      };
      await axios
        .patch(`${API_URL}/post/update/${id}`, updateData)
        .then((res) => {
          navigate("/profile/manage");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      await axios
        .patch(`${API_URL}/post/delete/${id}`)
        .then((res) => {
          navigate("/profile/manage");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      {checkState === true ? (
        <div className="create__main__blog__container">
          <MenuItem />
          <div className="createBlog__container">
            <div className="create__title">{formTitle}</div>
            <div className="create__container">
              <label htmlFor="title" className="create__label">
                Content Title
              </label>
              <input
                type="text"
                className="create__input"
                placeholder="Content Title"
                id="title"
                value={postValue.title}
                onChange={handleTextFields("title")}
              />
              <label htmlFor="contentBody" className="create__label">
                Content Body{" "}
              </label>
              <textarea
                name="contentBody"
                id="contentBody"
                rows="15"
                className="create__input"
                placeholder="Write content to upload"
                value={postValue.body}
                onChange={handleTextFields("body")}
              ></textarea>
              {checkRoute === true ? (
                <div className="current__update__container">
                  <p className="image__text">
                    Image in this post (** Image Cannot be Updatable **)
                  </p>
                  <img
                    crossOrigin="anonymous"
                    src={postImage}
                    alt="profile"
                    className="current__img"
                  />
                </div>
              ) : (
                <div className="upload__image__container">
                  <label htmlFor="upload_image" className="create__label">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    name="image__file"
                    id="upload_image"
                    className="upload__image__input"
                    onChange={handlePostImage}
                  />
                </div>
              )}
              {checkRoute === true ? (
                <div className="update__btn__container">
                  <button
                    type="submit"
                    className="update__btn"
                    onClick={updatePost}
                  >
                    <RiEdit2Line className="update__btn__icon" />
                    Update
                  </button>
                  <button
                    type="submit"
                    className="delete__btn"
                    onClick={deletePost}
                  >
                    <IoTrashBinOutline className="delete__btn__icon" />
                    Delete
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  className="upload__btn"
                  onClick={createPost}
                >
                  <HiOutlineUpload className="upload__btn__icon" />
                  Upload
                </button>
              )}
            </div>
          </div>
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

export default CreateBlog;
