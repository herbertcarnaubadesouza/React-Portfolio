import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Footer from "../PortfolioContainer/Footer/Footer"
import Team from "../PortfolioContainer/Team/Team"

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
    isMenu : true,
    shouldFade: false
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
    isMenu : true,
    shouldFade: true
  },  
  {
    screen_name: "Team",
    component: Team,
    isMenu : true,
    shouldFade: true
  },  
  {
    screen_name: "Resume",
    component: Resume,
    isMenu : true,
    shouldFade: true
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
    isMenu : true,
    shouldFade: true
  }, 
  {
    screen_name: "ContactMe",
    component: ContactMe,
    isMenu : true,
    shouldFade: true
  },  
  {
    screen_name: "Footer",
    component: Footer,
    isMenu: false,
    shouldFade: false
  },
];
