import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
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
      <div className="timeline__inner">
        <div className="section-title">
          <h2>
            <span>02</span>Professional Path
          </h2>
        </div>
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
            <Tab label="IPADE" />
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
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
        </div>
      </div>
    </section>
  );
}

export { Timeline };
