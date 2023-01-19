import React, { useCallback, useEffect } from "react";
import "./dashboardTable.css";
import { MdCheckCircle } from "react-icons/md";
import axios from "axios";
import { API_URL, MAIN_URL } from "../../config";
import moment from "moment";

const DashboardTable = ({ data }) => {
  const [activeList, setActiveList] = React.useState([]);

  const getActiveList = useCallback(async () => {
    try {
      const dataList = [];
      await axios
        .get(`${API_URL}/post/dashboard/active/${data}`)
        .then((res) => {
          res.data.forEach((result) => {
            dataList.push(result);
            setActiveList(dataList);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  useEffect(() => {
    getActiveList();
  }, [getActiveList]);

  return (
    <div className="main__table">
      {activeList.map((activeData, index) => {
        return (
          <div className="table__list" key={index}>
            <img
              crossOrigin="anonymous"
              src={`${MAIN_URL}/${activeData.postImage}`}
              alt="profile"
              className="table__image"
            />
            <div className="table__text">
              <h2 className="table__text__title">{activeData.post_title}</h2>
              <p className="table__text__subtitle">
                {moment(activeData.created_at).format("lll")}
              </p>
            </div>
            <div className="table__active">
              <p className="table__active__text">Active</p>
              <MdCheckCircle className="table__active__icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardTable;
