import React from "react";
import { CTABtn } from "./actionButtons";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__content">
        <div className="hero-banner__content--inner">
          <h1>
            <span className="code-text">Hello folks,</span>
            <br />
            I&apos;m Arturo Miranda.
          </h1>
          <p>
            I craft polished digital experiences that help businesses and people stand out.
          </p>
          <CTABtn
            text="Download resume"
            src="/files/80294_Diaz_Arturo_2024-03-13.pdf"
            download
            ariaLabel="Download Arturo Miranda resume"
          />
        </div>
      </div>
    </section>
  );
}

export { HeroBanner };
