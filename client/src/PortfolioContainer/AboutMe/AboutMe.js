import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./AboutMe.css";
import { useLanguage } from "../../utilities/languages";

export default function AboutMe(props) {
  const { t } = useLanguage();

  const SCREEN_CONSTSANTS = {
    description:
      t('Description1'),
    highlights: {
      bullets: [
        t("Mobile and Web Developer"),
        t("Interactive Front End as per the design"),
        t("React and Xamarin Forms Knowledge"),
        t(".NET Developer"),
        t("Building REST API"),
        t("Managing database"),
      ],
      heading: t("Here are a Few Highlights:"),
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={t("AboutMe")} subHeading={t("Why Choose Me?")} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
            <a href="https://api.whatsapp.com/send?phone=5511957978876&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site!">
              <button className="btn hireme-btn">
                {" "}
                {t('Talk To Me')}{" "}
              </button>
            </a>
              <a href="Herbert SouzaCV.pdf" download="Herbert SouzaCV.pdf">
                <button className="btn highlighted-btn">{t('Get Resume')}</button>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
