import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

import tuta from "../../../src/assets/Team/tutaNaLente.png";
import senior from "../../../src/assets/Team/senior.png";
import ribas from "../../../src/assets/Team/ribas.png";
import maintz from "../../../src/assets/Team/maintz.png";
import gustavoWordpress from "../../../src/assets/Team/gustavoWordpress.png";
import "./Team.css";
import { useLanguage } from "../../utilities/languages";

export default function Team(props) {

  const { t } = useLanguage();

  const options = {
    margin: 20,
    loop: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },    
      600: {
        items: 1,
        nav: false,
      },
      1030: {
        items: 3,
        nav: false,
      },
    },
  };

  return (
    <div className="team-container" id={props.id || ""}>
      <ScreenHeading title={t("Team")} subHeading={t("Who Works With Me?")} />
      <section className="team-section">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="team-carousel"
              {...options}
            >
              {/* Cards */}
              <div className="card">
                <div className="box">
                  <img src={tuta} alt="" />
                  <div className="text">Lucas Monteiro</div>
                  <p>
                    {t('TutaDescription')}
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <img src={senior} alt="" />
                  <div className="text">Thiago Medeiros</div>
                  <p>
                    {t('SeniorDescription')}
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <img src={ribas} alt="" />
                  <div className="text">Matheus Ribas</div>
                  <p>
                    {t('RibasDescription')}
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <img src={maintz} alt="" />
                  <div className="text">Fellipe Maintz</div>
                  <p>
                    {t('MaintzDescription')}
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <img src={gustavoWordpress} alt="" />
                  <div className="text">Gustavo Romeiro</div>
                  <p>
                    {t('GustavoDescription')}
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
