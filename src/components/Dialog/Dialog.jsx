import React from "react";
import "./dialog.css";
import { HiOutlineUpload } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";

const Dialog = ({ open, onClose }) => {
  const [selectFile, setSelectFile] = React.useState();

  const handleImage = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    console.log(selectFile);
  };

  return (
    <>
      {open === true ? (
        <div className="dialog__container">
          <h3 className="dialog__title">Upload an Image</h3>
          <form method="post" className="profile__attach">
            <input
              type="file"
              className="profile__input"
              onChange={handleImage}
            />
            <div className="dialog__btn__container">
              <button className="profile__upload__btn" onClick={uploadImage}>
                <HiOutlineUpload />
                Upload
              </button>
              <button className="profile__cancel__btn" onClick={onClose}>
                <MdDeleteForever />
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default Dialog;
