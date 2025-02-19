import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@mui/material";

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
    {...other}
  >
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Timeline = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "KPMG",
      date: "May 2024 - Present",
      company: "KPMG / KTSA",
      url: "https://www.ktsa.com.mx/",
      role: "SR UI/UX Frontend Developer",
      points: [
        "Developed a custom design system and component library in Angular from scratch, ensuring scalability and consistency across multiple applications.",
        "Implemented and maintained SCSS-based styling for all UI components, optimizing performance and maintainability.",
        "Designed and built visually engaging components for Azure Power Apps, enhancing user interaction and usability.",
        "Collaborated with cross-functional teams to integrate Angular Material and custom UI solutions within enterprise applications.",
        "Ensured seamless integration between front-end components and back-end services, improving system efficiency and responsiveness.",
        "Applied best practices in modular CSS and SCSS architecture to create reusable styles and improve code maintainability.",
      ]
    },
    {
      label: "LSEG",
      date: "Sept 2023 - May 2024",
      company: "London Stock Exchange Group | at Luxoft",
      url: "https://lseg.com",
      role: "Software Engineer",
      points: [
        "Developed intuitive and visually consistent front-end components using Angular Material for an innovative platform integrating Neo4j's graph technology.",
        "Worked closely with back-end development teams to ensure seamless integration between visual and functional aspects.",
        "Optimized the user experience through engaging designs and ensuring visual consistency across the platform.",
        "Applied technologies such as Angular Material and SASS to enhance the platform's user interface.",
      ],
    },
    {
      label: "Arrivia",
      date: "Nov 2020 - Sept 2023",
      company: "Arrivia",
      url: "https://arrivia.com",
      role: "UI/UX Developer",
      points: [
        "Develop intuitive, performant, maintainable code for a big array of international clients.",
        "Handle a variety of different languages, frameworks and design softwares such as JavaScript, TypeScript, Vue Js, React, Angular, Adobe Suite, SASS, and Python.",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.",
        "Work through an agile methodology (SCRUM), keeping track of objectives and working hours.",
        "Lead and development projects with people from different countries.",
      ],
    },
    {
      label: "Enapsys",
      date: "May 2020 - Nov 2020",
      company: "Enapsys",
      url: "https://enapsys.com",
      role: "UI/UX Developer",
      points: [
        "Leader of UI/UX team to achieve objectives based on customer needs.",
        "Development of prototyping ideas and connection to SAP HYBRIS for customer applications.",
        "Project leader and developer of the MABE brand site for all Latin America.",
      ],
    },
    {
      label: "Torus",
      date: "Jul 2017 - Dec 2019",
      company: "Torus",
      url: "https://www.behance.net/somostorus",
      role: "Fullstack Developer",
      points: [
        "Development all projects for clients such as websites, systems and applications according to their needs.",
        "Development all branding and marketing (SEO/SEM) of the brands managed by the company, as well as the maintenance of each one.",
      ],
    },
    {
      label: "Mutuo Financiera",
      date: "Jan 2017 - Nov 2020",
      company: "Mutuo Financiera",
      url: "https://arrivia.com",
      role: "Fullstack Developer",
      points: [
        "Development of functionality from scratch for the company's CMB system built on Laravel and Angular.",
        "Engineered and maintained major features of CMB system using Angular, Laravel and CSS.",
        "Design and implement the user interface for a web application to help employees easily perform their tasks in the area of sales and credit analysis.",
        "Develop in PHP (Laravel) some important modules for risk analysis, leads interface, user roles and application for new clients.",
        "Design and branding all the company image.",
      ],
    },
  ];

  return (
    <section className="timeline">
      <div className="section-title">
        <h2>
          <span>02</span>Professional Path
        </h2>
      </div>
      <div className="timeline__inner">
        <div className="timeline__container">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
          {tabs.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              <div className="timeline__tab-container">
                <div className="timeline__tab-container--title">
                  <span>
                    {tab.role} <br />
                    <a href={tab.url} target="_blank" rel="noreferrer">
                      {tab.company}
                    </a>
                  </span>
                </div>
                <div className="timeline__tab-container--date">
                  <span className="code-text">{tab.date}</span>
                </div>
                <div className="timeline__tab-container--content">
                  <ul>
                    {tab.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline };
