import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Testimonial.css";

import lucas from "../../../src/img/Testimonial/tutaTestemunha.jpg"
import marta from "../../../src/img/Testimonial/Marta.png"
import erica from "../../../src/img/Testimonial/erica.jpg"
import diego from "../../../src/img/Testimonial/Diego.png"

import shape from "../../../src/img/Testimonial/wavesNegative.svg";

import { useLanguage } from "../../utilities/languages";

export default function Testimonial(props) {
  const { t } = useLanguage();

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  };

  return (
    <div className="testimonial-container" id={props.id || ""}>
      <ScreenHeading
        title={t("Testimonial")}
        subHeading={t("What My Clients Say About Me")}
      />
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      {t("DiegoText")}
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={diego} alt="no internet connection"></img>
                    <h5>Diego Dias</h5>
                    <p>CEO Bioway Acessoria Esportiva</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      {t("MartaText")}
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={marta} alt="no internet connection"></img>
                    <h5>Marta Carnauba</h5>
                    <p>{t("Acupuncturist and Ozone Therapist")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      {t("EricaText")}
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={erica} alt="no internet connection"></img>
                    <h5>Erica Moro</h5>
                    <p>{t("Owner of the Avra Tatajuba Hotel")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      {t("LucasText")}
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lucas} alt="no internet connection"></img>
                    <h5>Lucas Monteiro</h5>
                    <p>{("Photographer and Video Editor")}</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="footer-image">
          <img src={shape} alt="Phot0 not responding" />
        </div>
      </section>
    </div>
  );
}
