import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Timeline() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Tab label="Arrivia" />
            <Tab label="Enapsys" />
            <Tab label="Torus" />
            <Tab label="Mutuo Financiera" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className="timeline__tab-container">
              <div className="timeline__tab-container--title">
                <span>
                  UI/UX Developer{" "}
                  <a href="https:/arrivia.com" target="_blank" rel="noreferrer">
                    Arrivia
                  </a>
                </span>
              </div>
              <div className="timeline__tab-container--date">
                <span className="code-text">Nov 2020 - Present</span>
              </div>
              <div className="timeline__tab-container--content">
                <ul>
                  <li>
                    Develop intuitive, performant, maintainable code for a big
                    array of international clients.
                  </li>
                  <li>
                    Handle a variety of different languages, frameworks and
                    design softwares such as JavaScript, TypeScript, Vue Js,
                    React, Angular, Adobe Suite, SASS, and Python.
                  </li>
                  <li>
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis.
                  </li>
                  <li>
                    Work through an agile methodology (SCRUM), keeping track of
                    objectives and working hours.
                  </li>
                  <li>
                    Lead and development projects with people from different
                    countries.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="timeline__tab-container">
              <div className="timeline__tab-container--title">
                <span>
                  UI/UX Developer{" "}
                  <a href="https:/enapsys.com" target="_blank" rel="noreferrer">
                    Enapsys
                  </a>
                </span>
              </div>
              <div className="timeline__tab-container--date">
                <span className="code-text">May 2020 - Nov 2020</span>
              </div>
              <div className="timeline__tab-container--content">
                <ul>
                  <li>
                    Leader of UI/UX team to achieve objectives based on customer
                    needs.
                  </li>
                  <li>
                    Development of prototyping ideas and connection to SAP
                    HYBRIS for customer applications.
                  </li>
                  <li>
                    Project leader and developer of the MABE brand site for all
                    Latin America.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="timeline__tab-container">
              <div className="timeline__tab-container--title">
                <span>
                  Fullstack Developer{" "}
                  <a
                    href="https://www.behance.net/somostorus"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Torus
                  </a>
                </span>
              </div>
              <div className="timeline__tab-container--date">
                <span className="code-text">Jul 2017 - Dec 2019</span>
              </div>
              <div className="timeline__tab-container--content">
                <ul>
                  <li>
                    Development all projects for clients such as websites,
                    systems and applications according to their needs.
                  </li>
                  <li>
                    Development all branding and marketing (SEO/SEM) of the
                    brands managed by the company, as well as the maintenance of
                    each one.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="timeline__tab-container">
              <div className="timeline__tab-container--title">
                <span>
                  Fullstack Developer{" "}
                  <a href="https:/arrivia.com" target="_blank" rel="noreferrer">
                    Mutuo Financiera
                  </a>
                </span>
              </div>
              <div className="timeline__tab-container--date">
                <span className="code-text">Jan 2017 - Nov 2020</span>
              </div>
              <div className="timeline__tab-container--content">
                <ul>
                  <li>
                    Development of functionality from scratch for the company's
                    CMB system built on Laravel and Angular.
                  </li>
                  <li>
                    Engineered and maintained major features of CMB system using
                    Angular, Laravel and CSS.
                  </li>
                  <li>
                    Design and implement the user interface for a web
                    application to help employees easily perform their tasks in
                    the area of sales and credit analysis.
                  </li>
                  <li>
                    Develop in PHP (Laravel) some important modules for risk
                    analysis, leads interface, user roles and application for
                    new clients.
                  </li>
                  <li>Design and branding all the company image.</li>
                </ul>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </section>
  );
}

export { Timeline };
