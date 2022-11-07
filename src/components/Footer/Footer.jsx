import React from "react";
import "./footer.css";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlinePolicy, MdOutlineContactMail } from "react-icons/md";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <Fade right cascade>
          <div className="first__footer">
            <IoMdHelpCircleOutline className="footer__icon" />
            <ul className="first__list">
              <li className="first__list__item">Help Center</li>
              <li className="first__list__item">Help Inform</li>
              <li className="first__list__item">Our Community</li>
            </ul>
          </div>
          <div className="second__footer">
            <MdOutlinePolicy className="footer__icon" />
            <ul className="second__list">
              <li className="second__list__item">Privacy Policy</li>
              <li className="second__list__item">Developer Community</li>
            </ul>
          </div>
          <div className="third__footer">
            <MdOutlineContactMail className="footer__icon" />
            <form className="contact__form">
              <input
                type="email"
                placeholder="Email"
                className="contact__email__input"
              />
              <textarea
                name="message"
                id="message"
                rows="5"
                className="message__input"
                placeholder="Message"
              ></textarea>
              <button type="submit" className="contact__btn">
                Send
              </button>
            </form>
          </div>
        </Fade>
      </div>
      <div className="copyright__container">
        <Fade bottom cascade>
          <p> &copy;Copyright TT Tech. All Rights Reserved</p>
        </Fade>
      </div>
    </>
  );
};

export default Footer;
