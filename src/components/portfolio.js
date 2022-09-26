import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FileOpenIcon from '@mui/icons-material/FileOpen';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="section-title">
        <h2>
          <span>03</span>Portfolio
        </h2>
      </div>
      <div className="portfolio__inner">
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
                <div className="portfolio__card-content--title">Featured Project</div>
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
                  <a
                    className="portfolio-cta"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip title="View Project">
                      <IconButton>
                        <FileOpenIcon color="primary"/>
                      </IconButton>
                    </Tooltip>
                  </a>
                  <a
                    className="portfolio-cta"
                    href={item.clink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip title="View Site">
                      <IconButton>
                        <OpenInNewIcon color="primary"/>
                      </IconButton>
                    </Tooltip>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const featureData = [
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
  }
];

const otherData = [
  {
    img: "./assets/images/portfolio/Laud.jpg",
    title: "Laud",
    url: "https://www.behance.net/gallery/148034615/Laud",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/MaaTalent.jpg",
    title: "MAA Talent",
    url: "https://www.behance.net/gallery/148040887/MAA-Talent",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Totalplay.jpg",
    title: "Totalplay",
    url: "https://www.behance.net/gallery/148041345/Totalplay",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Vicarq.jpg",
    title: "Vicarq",
    url: "https://www.behance.net/gallery/148041439/Vicarq",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Mutuo.jpg",
    title: "Mutuo Financiera",
    url: "https://www.behance.net/gallery/148041055/Mutuo-Financiera",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Odontotec.jpg",
    title: "Odontotec",
    url: "https://www.behance.net/gallery/148041279/Odontotec",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Nexos.jpg",
    title: "Nexo Integra",
    url: "@https://www.behance.net/gallery/148041121/Nexo-Integra",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
  }
];

export { Portfolio };
