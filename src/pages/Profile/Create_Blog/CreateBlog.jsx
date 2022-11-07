import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import MenuItem from "../../../components/Menu/MenuItem";
import { HiOutlineUpload } from "react-icons/hi";
import "./createBlog.css";
import { getLocalData } from "../../../utils/common";
import axios from "axios";
import { API_URL } from "../../../config";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router";

const CreateBlog = () => {
  const [postValue, setPostValue] = React.useState({
    title: "",
    body: "",
  });
  const [postImage, setPostImage] = React.useState();

  const userdata = getLocalData();
  const alert = useAlert();
  const navigate = useNavigate();

  const handleTextFields = (props) => (event) => {
    setPostValue({ ...postValue, [props]: event.target.value });
  };

  const handlePostImage = (event) => {
    console.log(event.target.files[0]);
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

  return (
    <div style={{ paddingBottom: "20px" }}>
      <Navbar />
      <div className="create__main__blog__container">
        <MenuItem />
        <div className="createBlog__container">
          <div className="create__title">Create a new category</div>
          <form
            method="post"
            className="create__container"
            onSubmit={createPost}
          >
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
              About User{" "}
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
            <button type="submit" className="upload__btn">
              <HiOutlineUpload />
              Upload
            </button>
          </form>
        </div>
      </div>
      {/* <EditorBox setDescription={setDescription} /> */}
    </div>
  );
};

export default CreateBlog;
