import React from "react";
import { CTABtn, PrimaryActionBtn } from "./actionButtons";

function HeroBanner() {
  return (
    <section className="hero-banner reveal-section">
      <div className="hero-banner__content">
        <div className="hero-banner__content--inner">
          <div className="hero-banner__eyebrow stagger-item">Software Engineer | UI/UX  Gurú</div>
          <h1 className="stagger-item">
            I&apos;m Arturo Miranda.
          </h1>
          <p className="stagger-item">
            I design and build polished interfaces for brands, products, and business teams.
          </p>
          <div className="hero-banner__actions stagger-item">
            <PrimaryActionBtn
              text="View projects"
              src="#portfolio"
              ariaLabel="Scroll to portfolio projects"
            />
            <CTABtn
              text="Download resume"
              src="/files/Profile.pdf"
              download
              ariaLabel="Download Arturo Miranda resume"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroBanner };
