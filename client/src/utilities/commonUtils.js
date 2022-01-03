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
    isMenu : true
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
    isMenu : true
  },  
  {
    screen_name: "Team",
    component: Team,
    isMenu : true
  },  
  {
    screen_name: "Resume",
    component: Resume,
    isMenu : true
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
    isMenu : true
  }, 
  {
    screen_name: "ContactMe",
    component: ContactMe,
    isMenu : true
  },  
  {
    screen_name: "Footer",
    component: Footer,
    isMenu: false
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;    
  }

  return -1;
};
