import React,{useEffect} from "react";
import Typical from "react-typical";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {


  const languages = [
    {
      code: 'br',
      name: 'Português (BR)',
      country_code: 'br',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'العربية',
      dir: 'rtl',
      country_code: 'sa',
    },
  ]
  

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])


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
                    "Enthusiastic Dev",
                    1000,
                    "Full stack Developer",
                    1000,
                    ".NET Developer",
                    1000,
                    "Cross Platform Dev",
                    1000,
                    "React Dev",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <a href="https://api.whatsapp.com/send?phone=5511957978876&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site!">
              <button className="btn hireme-btn">
                {" "}
                Talk To Me{" "}
              </button>
            </a>
            <a href="Herbert SouzaCV.pdf" download="Herbert SouzaCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
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
