import React from "react";
import "./footer.css";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlinePolicy, MdOutlineContactMail } from "react-icons/md";
import { Fade } from "react-reveal";
import { checkToken } from "../../utils/common";
import axios from "axios";
import { API_URL } from "../../config";
import { useAlert } from "react-alert";

const Footer = () => {
  const [values, setValues] = React.useState({
    email: "",
    message: "",
  });

  const alert = useAlert();

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const createContentMessage = async () => {
    try {
      const checkData = checkToken();
      if (checkData) {
        const contentMessage = {
          email: values.email,
          message: values.message,
        };
        await axios
          .post(`${API_URL}/contact/create`, contentMessage)
          .then((res) => {
            setValues({
              email: "",
              message: "",
            });
          })
          .catch((err) => {
            alert.error("Data Input Error!!!");
          });
      } else {
        alert.error("Please Login or Register first!!!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="footer__container">
        <Fade bottom cascade>
          <div className="first__footer">
            <p className="footer__text">Help</p>
            <IoMdHelpCircleOutline className="footer__icon" />
            <ul className="first__list">
              <li className="first__list__item">Help Center</li>
              <li className="first__list__item">Help Inform</li>
              <li className="first__list__item">Our Community</li>
            </ul>
          </div>
          <div className="second__footer">
            <p className="footer__text">Privacy</p>
            <MdOutlinePolicy className="footer__icon" />
            <ul className="second__list">
              <li className="second__list__item">Privacy Policy</li>
              <li className="second__list__item">Developer Community</li>
            </ul>
          </div>
          <div className="third__footer">
            <p className="contact__text">Contact</p>
            <MdOutlineContactMail className="footer__icon" />
            <div className="contact__form">
              <input
                type="email"
                placeholder="Email"
                className="contact__email__input"
                value={values.email}
                onChange={handleChange("email")}
              />
              <textarea
                name="message"
                id="message"
                rows="5"
                className="message__input"
                placeholder="Message"
                value={values.message}
                onChange={handleChange("message")}
              ></textarea>
              <button
                type="submit"
                className="contact__btn"
                onClick={createContentMessage}
              >
                Send
              </button>
            </div>
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
