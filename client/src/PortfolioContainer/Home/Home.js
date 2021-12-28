import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Particles from "react-tsparticles";
import particlesConfig from "./Particles/particles";

import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Particles className="particles" options={particlesConfig}/>
      <div className="home-content">
        <Header />
        <Profile />
        <Footer />
      </div>
    </div>
  );
}
