import React from "react";
import { RiFileEditLine } from "react-icons/ri";
import { VscLayersActive } from "react-icons/vsc";
import { IoTrashBinOutline } from "react-icons/io5";
import MenuItem from "../../../components/Menu/MenuItem";
import Navbar from "../../../components/Navbar/Navbar";
import "./dashboard.css";
import { useEffect } from "react";
import { useCallback } from "react";
import { getLocalData } from "../../../utils/common";
import axios from "axios";
import { API_URL } from "../../../config";

const Dashboard = () => {
  const [createdPost, setCreatedPost] = React.useState();
  const [activePost, setActivePost] = React.useState();
  const [deletedPost, setDeletedPost] = React.useState();

  const data = getLocalData();

  const postCount = useCallback(async () => {
    try {
      await axios
        .get(`${API_URL}/post/dashboard/postcount/${data.getId}`)
        .then((res) => {
          const countData = res.data.postCount;
          setCreatedPost(countData.created);
          setActivePost(countData.active);
          setDeletedPost(countData.deleted);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, [data.getId]);

  useEffect(() => {
    postCount();
  }, [postCount]);

  return (
    <>
      <Navbar />
      <div className="main__dashboard__container">
        <MenuItem />
        <div className="chart__container">
          <div className="chart__header">
            <div className="create__count__container">
              <RiFileEditLine className="chart__card__icon" />
              <p className="count__text">{createdPost} Posts Created</p>
            </div>
            <div className="active__count__container">
              <VscLayersActive className="chart__card__icon" />
              <p className="count__text">{activePost} Posts Active</p>
            </div>
            <div className="delete__count__container">
              <IoTrashBinOutline className="chart__card__icon" />
              <p className="count__text">{deletedPost} Posts Deleted</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
