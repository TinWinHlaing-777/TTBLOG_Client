import React from "react";
import "./dialog.css";
import { HiOutlineUpload } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { API_URL } from "../../config";
import { getLocalData } from "../../utils/common";
import { useAlert } from "react-alert";

const Dialog = ({ open, onClose }) => {
  const [selectFile, setSelectFile] = React.useState();

  const data = getLocalData();
  const alert = useAlert();

  const handleImage = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    try {
      if (selectFile !== null) {
        const formData = new FormData();
        formData.append("image", selectFile);
        const config = {
          Headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        console.log(formData);
        axios
          .patch(`${API_URL}/user/update_image/${data.getId}`, formData, config)
          .then((res) => {
            onClose();
            window.location.reload(true);
          })
          .catch((err) => {
            alert.error(err.message);
          });
      } else {
        alert.error("File muse be selected!");
      }
    } catch (error) {
      alert.error(error.message);
    }
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
