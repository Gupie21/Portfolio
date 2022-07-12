import React from "react";
import profileImg from "../assets/images/stock/profile.jpg";

function AboutMe() {
  return (
    <section className="about-me">
    <div className="section-title">
      <h2>
        <span>01</span>About Me
      </h2>
    </div>
      <div className="about-me__inner">
        <div>
          <p>
            Hi! My name is Arturo and I like to develop visual solutions through
            programming and technology.
            <br />
            It all started in 2013, when I met for the first time the C
            language, something in me changed that day and motivated me to learn
            new things every day. <br />
            Today, I have had the privilege to work from{" "}
            <a
              href="https://mutuofinanciera.com/"
              target="_blank"
              rel="noreferrer"
            >
              a Fintech
            </a>{" "}
            and in a{" "}
            <a href="https://www.enapsys.com/" target="_blank" rel="noreferrer">
              technology consulting firm
            </a>
            .
          </p>
          <p>
            Currently, my main focus is to create accessible and intuitive
            digital products and experiences at Arrivia for a wide variety of
            clients. <br />
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
            <img src={profileImg} alt="profile" />
          </picture>
        </div>
      </div>
    </section>
  );
}

export { AboutMe };
