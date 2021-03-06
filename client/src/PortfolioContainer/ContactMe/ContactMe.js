import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.png";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./ContactMe.css";

import { useLanguage } from "../../utilities/languages";

export default function ContactMe(props) {

  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`https://portfolio-herbert.herokuapp.com:5000/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={t("Lets Keep In Touch")} title={t("ContactMe")} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={[t("Get In Touch 📧"), 1000]} />
          </h2>{" "}
          <a href="https://web.facebook.com/?_rdc=1&_rdr">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="https://github.com/herbertcarnaubadesouza">
            <i className="fa fa-github" />
          </a>
          <a href="https://www.instagram.com/herbert_souza/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/herbert-carnauba-de-souza-14866a1bb/">
            <i className="fa fa-linkedin-square" />
          </a>         
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>{t("Send Your Email Here!")}</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">{t('Name')}</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">{t('Email')}</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">{t('Message')}</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                {t('send')}
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>      
    </div>
  );
}
