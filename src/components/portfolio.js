import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FileOpenIcon from "@mui/icons-material/FileOpen";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="section-title">
        <h2>
          <span>03</span>Portfolio
        </h2>
      </div>
      <div className="portfolio__featured-inner">
        {featureData.map((item) => {
          return (
            <div className="portfolio__card" key={item.img}>
              <div className="portfolio__card-img">
                <a href={item.url.toString()} target="_blank" rel="noreferrer">
                  <img
                    src={item.img.toString()}
                    alt={item.title.toString()}
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="portfolio__card-content">
                <div className="portfolio__card-content--title">
                  Featured Project
                </div>
                <div className="portfolio__card-content--subtitle">
                  {item.title}
                </div>
                <div className="portfolio__card-content--description">
                  {item.description}
                </div>
                <div className="portfolio__card-content--techs">
                  {item.tech}
                </div>
                <div className="portfolio-card-content--cta">
                  {item.url && (
                    <a
                      className="portfolio-cta"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Tooltip title="View Project">
                        <IconButton>
                          <FileOpenIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    </a>
                  )}
                  <a
                    className="portfolio-cta"
                    href={item.clink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip title="View Site">
                      <IconButton>
                        <OpenInNewIcon color="primary" />
                      </IconButton>
                    </Tooltip>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="primary-text">Other Projects</h2>
      </div>
      <div className="portfolio__other-inner">
        {otherData.map((item) => (
          <div className="portfolio__card" key={item.img}>
            <div className="portfolio__card-content">
              <div className="portfolio__card-content--subtitle">
                {item.title}
              </div>
              <div className="portfolio__card-content--techs">{item.tech}</div>
              <div className="portfolio-card-content--cta">
                {item.url && (
                  <a
                    className="portfolio-cta"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip title="View Project">
                      <IconButton>
                        <FileOpenIcon color="primary" />
                      </IconButton>
                    </Tooltip>
                  </a>
                )}
                {item.clink && (
                  <a
                    className="portfolio-cta"
                    href={item.clink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip title="View Site">
                      <IconButton>
                        <OpenInNewIcon color="primary" />
                      </IconButton>
                    </Tooltip>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const featureData = [
  {
    img: "../assets/images/portfolio/Mrsoul.jpg",
    title: "MR Soul",
    url: "",
    description:
      "MrSoul is an eCommerce platform built on WooCommerce and WordPress, dedicated to offering an extensive range of premium optical fashion products, including stylish sunglasses and frames. We focus on providing an efficient and satisfying shopping experience, supported by the reliability and flexibility of these leading platforms. Our design ethos emphasizes a minimalist and elegant UI/UX for users.",
    tech: " Wordpress | Woocommerce | HTML | CSS | SEO | SEM | Adobe CC",
    clink: "https://mrsouleyewear.com/",
  },
  {
    img: "../assets/images/portfolio/Indaga.jpg",
    title: "Indagamedia",
    url: "",
    description:
      "Indagamedia, built with Python and Angular, is a platform that generates statistical reports on public sentiment about products, companies, or individuals from online and social media sources. It helps people and businesses target their marketing and advertising campaigns by providing insights into public acceptance and opinions.",
    tech: "Angular | Tailwind | SCSS | Python | Netlify | Figma | Adobe CC",
    clink: "https://indagaadmin.netlify.app/home",
  },
  {
    img: "../assets/images/portfolio/Kintsugi.jpg",
    title: "Kintsugi",
    url: "",
    description:
      "The project at the martial arts and kickboxing academy was developed in React with SCSS and deployed on Netlify. This allowed them to provide a modern and agile platform, ensuring users had a smooth and reliable experience while showcasing the facility and services.",
    tech: "React | SCSS | Netlify | Adobe CC",
    clink: "https://kintsugimfa.netlify.app/",
  },
  {
    img: "../assets/images/portfolio/Rtoutdoorl.jpg",
    title: "RT Outdoor Living",
    url: "",
    description:
      "This project for RT Lawn Services & Outdoor Living LLC, was built a captivating outdoor haven using WordPress, Elementor, and CSS, hosted on AWS Lightsail. Implementing intuitive interface, designed to showcase their extensive landscaping services.",
    tech: "Wordpress | Elementor | CSS | AWS Lightsail | Adobe CC",
    clink: "https://rtoutdoorliving.com/",
  },
  {
    img: "../assets/images/portfolio/IMJUS.jpg",
    title: "IMJUS",
    url: "https://www.behance.net/gallery/148034359/IMJUS",
    description:
      "Build a site in a Laravel environment with Wordpress that allows people to learn more about this institution, its certifications, seminars and courses through a friendly and intuitive platform. ",
    tech: "Laravel | Wordpress | AWS Lightsail | Adobe CC",
    clink: "https://imjus.org.mx/",
  },
  {
    img: "../assets/images/portfolio/Globaljuris.jpg",
    title: "GlobalJuris",
    url: "",
    description:
      "This website dedicated to José Luis Vargas Valdez, a Mexican lawyer and jurist, is built using React with SCSS and hosted on Netlify. It serves as a modern platform to showcase his 25 years of experience in Constitutional, Administrative, and Electoral Law, including his tenure as a litigating lawyer at JL Vargas y Asociados S.C.",
    tech: "React | SCSS  | Netlify | Adobe CC",
    clink: "globaljuris",
  },
  {
    img: "./assets/images/portfolio/Kaikou.jpg",
    title: "Kaikou",
    url: "https://www.behance.net/gallery/148034563/Kaikou",
    description:
      "Build and design a Wordpress multisite site that hosts vendors, sellers and users in a custom marketplace programmed with SCSS, PHP and Javascript.",
    tech: "Woocommerce | Wordpress | Laravel | PHP | Javascript | SCSS | AWS Lightsail | Adobe CC",
    clink: "http://kaikoucbd.com/",
  },
  {
    img: "./assets/images/portfolio/Mabe.jpg",
    title: "Mabe",
    url: "https://www.behance.net/gallery/148040961/Mabe",
    description:
      "Lead and build a project hand in hand with Mabe's designers a site mounted on SAP Hybris for the sale of products of the brand, taking into account the needs of the company and creating a good UX for end users of this platform.",
    tech: "SCSS | Javascript | Hybris(Java) | Balsamiq | Adobe CC",
    clink: "https://mabe.com.mx/",
  },
  {
    img: "./assets/images/portfolio/Tecnolite.jpg",
    title: "Tecnolite",
    url: "https://www.behance.net/gallery/148041407/Tecnolite",
    description:
      "Visually improve the platform through end-user testing, taking into account the target market and best practices for the generation of a new UI on your sales site.",
    tech: "SCSS | Javascript | Hybris(Java) | Balsamiq | Adobe CC",
    clink: "https://tecnolite.mx/",
  },
];

const otherData = [
  {
    title: "AMPPR",
    url: "https://amppr.com.mx/",
    tech: "Laravel | SCSS",
  },
  {
    title: "Condesa 71",
    url: "https://condesa71.com/inicio/",
    tech: "Wordpress | CSS | Figma",
  },
  {
    title: "Go Club Freedom",
    url: "https://goclubfreedom.com.mx/",
    tech: "Vue Js | SCSS | Figma",
  },
  {
    title: "Gov Vacations Rewards",
    url: "https://govvacationrewards.com/",
    tech: "Vanila JS | SCSS | Figma",
  },
  {
    title: "Laud",
    url: "https://www.behance.net/gallery/148034615/Laud",
    tech: "Wordpress | CSS",
  },
  {
    title: "MAA Talent",
    url: "https://www.behance.net/gallery/148040887/MAA-Talent",
    tech: "Wordpress | CSS",
  },
  {
    title: "Totalplay",
    url: "https://www.behance.net/gallery/148041345/Totalplay",
    tech: "Vanilla JS | HTML | CSS | Boostrap",
  },
  {
    title: "Vicarq",
    url: "https://www.behance.net/gallery/148041439/Vicarq",
    tech: "Wordpress | Elementor | CSS",
  },
  {
    title: "Mutuo Financiera",
    url: "https://www.behance.net/gallery/148041055/Mutuo-Financiera",
    tech: "Laravel | Angular | SCSS",
  },
  {
    title: "Odontotec",
    url: "https://www.behance.net/gallery/148041279/Odontotec",
    tech: "Wordpress | CSS",
  },
  {
    title: "Nexo Integra",
    url: "https://www.behance.net/gallery/148041121/Nexo-Integra",
    tech: "Laravel | SCSS",
  },
];

export { Portfolio };
