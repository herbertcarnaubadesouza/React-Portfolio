import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import tuta from "../../../src/assets/Team/tutaNaLente.png";
import senior from "../../../src/assets/Team/senior.png";
import ribas from "../../../src/assets/Team/ribas.png";
import maintz from "../../../src/assets/Team/maintz.png";
import gustavoWordpress from "../../../src/assets/Team/gustavoWordpress.png";
import "./Team.css";

export default function Team(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props?.id) return;
    Animations.animations.fadeInScreen(props?.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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
    <div className="team-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Team"} subHeading={"Who Works With Me?"} />
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
                    Lucas is an excellent video and photo editor. Graduated in
                    radio TV, at the age of 24, is part of the content editing
                    team in a general way of the clients that close with us.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <img src={senior} alt="" />
                  <div className="text">Thiago Medeiros</div>
                  <p>
                    It is part of the team of developers. Computer Engineering
                    student, Thiago is currently working on the developer team from Apple
                    Developer Academy.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <img src={ribas} alt="" />
                  <div className="text">Matheus Ribas</div>
                  <p>
                    Matheus Ribas de Miranda, is part of the area that is most
                    valued in Digital Marketing, Traffic Management. Matheus has
                    skills essential to show you reach more customers and users.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <img src={maintz} alt="" />
                  <div className="text">Fellipe Maintz</div>
                  <p>
                    Maintz is the best digital strategist I know. know the
                    algorithm Instagram like no one else. Felipe has the skills
                    right to kickstart your business on Instagram.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <img src={gustavoWordpress} alt="" />
                  <div className="text">Gustavo Romeiro</div>
                  <p>
                    Gustavo is an extremely versatile guy technically. Have
                    experience with photo editing, design and website
                    development. has skills essential to differentiate your
                    online business.
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
