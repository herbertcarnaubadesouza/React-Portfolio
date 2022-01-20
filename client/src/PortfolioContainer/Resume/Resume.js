import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Services", logoSrc: "service.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Xamarin Forms", ratingPercentage: 85 },
    { skill: ".NET Core", ratingPercentage: 89 },
    { skill: ".NET Framework", ratingPercentage: 89 },
    { skill: "SQL Server", ratingPercentage: 70 },
    { skill: "Wordpress", ratingPercentage: 80 },    
    { skill: "Bootstrap", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "SAP B1 Data Collector",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: .NET Core, Xamarin Forms, SQL Server",
    },
    {
      title: "Hotel Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Created a beautiful responsive website for a hotel in Tatajuba, Ceará.",
      subHeading:
        "Technologies Used:  Javascript, Html, Css, Jquery, Wordpress.",
    },
    {
      title: "Free Lances",
      duration: { fromDate: "2020", toDate: "Present" },
      description:
        "Online ecommerce website, personal portfolio and more. Come to see the best of the responsive websites.",
      subHeading:
        "Technologies That I Use: Node Js, React Js, Wordpress, Bootstrap, Jquery.",
    },
  ];


  const workHistoryDetails = [
    {
      title: "Claudino Softaware ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developed a lot projects with Xamarin Forms and REST API for a SAPB1 Data Collector.",
      subHeading: "Technologies Used: .NET Core, Xamarin Forms, SQL Server",
    },
    {
      title: "Smark CRM",
      duration: { fromDate: "2022", toDate: "Present" },
      description:
        "Works in the maintenance and development of the company's product.",
      subHeading:
        "Technologies That I Use:  .NET Framework, SQL Server, Jquery, Bootstrap, Ajax.",
    },
  ];


  const resumeDetails = [
    /* Services */
    <div className="resume-screen-container" key="services">
      <ResumeHeading
        heading="Website Development"
        description="Come put your services on a fully responsive website, working on mobile, tablet, notebook and computers. The development time is proportional to the size of the site."
      />
      <ResumeHeading
        heading="Social Media Management"
        description="Currently, if you dont't put your services on social media, you are at a disadvantage. Talk to me and I solve this problem. The group manages more than 15 Intagram accounts."
      />
      <ResumeHeading
        heading="Put Your Site At The Top Of Google"
        description="It's not enough to build a beautiful website if it doesn't appear to anyone. Make your website with us. We put your website at the top of Google. That way you will be able to reach more people with your product."
      />
    </div>,

    /* WORK HISTORY */
    <div className="resume-screen-container" key="workHistory">
      {workHistoryDetails.map((workHistoryDetails, index) => (
        <ResumeHeading
          key={index}
          heading={workHistoryDetails.title}
          subHeading={workHistoryDetails.subHeading}
          description={workHistoryDetails.description}
          fromDate={workHistoryDetails.duration.fromDate}
          toDate={workHistoryDetails.duration.toDate}
        />
      ))}
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <div className="skill-content">
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>          
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Basketball Games"
        description="I like to challenge my reflexes a lot while competing in basketball games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
