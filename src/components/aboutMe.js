import React from "react";
import profileImg from "../assets/images/stock/me.jpg";

function AboutMe() {
  return (
    <section className="about-me reveal-section">
      <div className="section-title">
        <h2>
          <span>01</span>About Me
        </h2>
      </div>
      <div className="about-me__inner">
        <div className="stagger-item">
          <p>
            Hi, I'm Arturo Miranda, and I am dedicated to creating visual
            solutions through programming and technology. My journey in this
            field started in 2013 when I discovered the C language, which ignited
            my passion for continuous learning and improvement.{" "}
          </p>
          <p>
            Currently, my main focus is to create accessible and intuitive
            digital products and experiences at LSEG in B2B projects. <br />
            I also freelance in my spare time, so I have a great portfolio to
            showcase. <br />
          </p>
          <p>
            Here are some of the technologies I've been working with recently:{" "}
            <br />
          </p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>Laravel</li>
            <li>Python</li>
            <li>WordPress</li>
            <li>AWS</li>
          </ul>
        </div>
        <div>
          <picture>
            <img src={profileImg} alt="Arturo Miranda portrait" loading="lazy" decoding="async" />
          </picture>
        </div>
      </div>
    </section>
  );
}

export { AboutMe };
