import React from "react";
import "./dashboardTable.css";
import { MdCheckCircle } from "react-icons/md";

const DashboardTable = () => {
  return (
    <div className="main__table">
      <div className="table__list">
        <img src="/images/profile.png" alt="profile" className="table__image" />
        <div className="table__text">
          <h2 className="table__text__title">Post Title</h2>
          <p>Author</p>
        </div>
        <div className="table__btn">
          <p className="table__btn__text">Active</p>
          <MdCheckCircle className="table__btn__icon" />
        </div>
      </div>
      <div className="table__list">
        <img src="/images/profile.png" alt="profile" className="table__image" />
        <div className="table__text">
          <h2 className="table__text__title">Post Title</h2>
          <p>Author</p>
        </div>
        <div className="table__btn">
          <p className="table__btn__text">Active</p>
          <MdCheckCircle className="table__btn__icon" />
        </div>
      </div>
      <div className="table__list">
        <img src="/images/profile.png" alt="profile" className="table__image" />
        <div className="table__text">
          <h2 className="table__text__title">Post Title</h2>
          <p>Author</p>
        </div>
        <div className="table__btn">
          <p className="table__btn__text">Active</p>
          <MdCheckCircle className="table__btn__icon" />
        </div>
      </div>
      <div className="table__list">
        <img src="/images/profile.png" alt="profile" className="table__image" />
        <div className="table__text">
          <h2 className="table__text__title">Post Title</h2>
          <p>Author</p>
        </div>
        <div className="table__btn">
          <p className="table__btn__text">Active</p>
          <MdCheckCircle className="table__btn__icon" />
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
