import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import MenuItem from "../../../components/Menu/MenuItem";
// import EditorBox from "../../../components/Form/Editor/EditorBox";
import { useState } from "react";
// import parse from "html-react-parser";
import "./createBlog.css";
import { RMIUploader } from "react-multiple-image-uploader";
import { HiOutlineUpload } from "react-icons/hi";

const CreateBlog = () => {
  // const [description, setDescription] = useState("");
  // console.log(parse(description));
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  const hideModal = () => {
    setVisible(false);
  };

  const onUpload = (data) => {
    console.log(`Upload files ${data}`);
    setData(data);
  };

  const onSelect = (data) => {
    console.log(`Select files ${data}`);
  };

  const onRemove = (id) => {
    console.log(`Remove image id ${id}`);
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      <Navbar />
      <MenuItem />
      <div className="createBlog__container">
        <div className="create__title">Create a new blog</div>
        <div className="create__container">
          <label htmlFor="title" className="create__label">
            Content Title
          </label>
          <input
            type="text"
            className="create__input"
            placeholder="Content Title"
            id="title"
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
          ></textarea>
          <label htmlFor="upload_image" className="create__label">
            Upload Multiple Images
          </label>
          <RMIUploader
            isOpen={visible}
            hideModal={hideModal}
            onSelect={onSelect}
            onUpload={onUpload}
            onRemove={onRemove}
            dataSources={data}
          />
          <button type="submit" className="upload__btn">
            <HiOutlineUpload />
            Upload
          </button>
        </div>
      </div>
      {/* <EditorBox setDescription={setDescription} /> */}
    </div>
  );
};

export default CreateBlog;
