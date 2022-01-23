import React from "react";
import Typical from "react-typical";

import "./Profile.css";

import { useLanguage } from "../../../utilities/languages";

export default function Profile() {
  const { t } = useLanguage()

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              {t('Hello')} <span className="highlighted-text">Herbert</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    t('Enthusiastic Dev'),
                    1000,
                    t('Full stack Developer'),
                    1000,
                    t('.NET Developer'),
                    1000,
                    t('Cross Platform Dev'),
                    1000,
                    t('React Dev'),
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              {t('Knack of building applications with front and back end operations.')}
            </span>
          </div>

          <div className="profile-options">
            <a href="https://api.whatsapp.com/send?phone=5511957978876&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site!">
              <button className="btn hireme-btn">
                {" "}
                {t('Talk To Me')}{" "}
              </button>
            </a>
            <a href="Herbert SouzaCV.pdf" download="Herbert SouzaCV.pdf">
              <button className="btn highlighted-btn">{t('Get Resume')}</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
