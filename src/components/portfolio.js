import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const ProjectCard = ({ item, isFeatured = false }) => (
  <div className="portfolio__card" key={item.title}>
    {isFeatured && (
      <div className="portfolio__card-img">
        <a href={item.projectURL || item.siteURL} target="_blank" rel="noreferrer">
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </a>
      </div>
    )}
    
    <div className="portfolio__card-content">
      {isFeatured && (
        <>
          <div className="portfolio__card-content--title">Featured Project</div>
          <div className="portfolio__card-content--description">
            {item.description}
          </div>
        </>
      )}
      
      <div className="portfolio__card-content--subtitle">{item.title}</div>
      <div className="portfolio__card-content--techs">{item.tech}</div>
      
      <div className="portfolio__card-content--cta">
        {item.projectURL && (
          <a
            className="portfolio-cta"
            href={item.projectURL}
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
        
        {item.siteURL && (
          <a
            className="portfolio-cta"
            href={item.siteURL}
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
);

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="section-title">
        <h2>
          <span>03</span>Portfolio
        </h2>
      </div>
      
      <div className="portfolio__featured-inner">
        {featureData.map((item) => (
          <ProjectCard key={item.title} item={item} isFeatured={true} />
        ))}
      </div>

      <div>
        <h2 className="primary-text">Other Projects</h2>
      </div>
      <div className="portfolio__other-inner">
        {otherData.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

const featureData = [
  {
    img: "../assets/images/portfolio/QuienOpina.jpg",
    title: "Quien Opina",
    projectURL: "https://www.behance.net/gallery/219625413/Quien-Opina",
    description:
      "QuienOpina, built with Python and Angular, is a platform that generates statistical reports on public sentiment about products, companies, or individuals from online and social media sources. It helps people and businesses target their marketing and advertising campaigns by providing insights into public acceptance and opinions.",
    tech: "Angular | Tailwind | SCSS | Python | Netlify | Figma | Adobe CC",
    siteURL: "",
  },
  {
    img: "../assets/images/portfolio/Kintsugi.jpg",
    title: "Kintsugi",
    projectURL: "",
    description:
      "The project at the martial arts and kickboxing academy was developed in React with SCSS and deployed on Netlify. This allowed them to provide a modern and agile platform, ensuring users had a smooth and reliable experience while showcasing the facility and services.",
    tech: "React | SCSS | Netlify | Adobe CC",
    siteURL: "https://kintsugimfa.netlify.app/",
  },
  {
    img: "../assets/images/portfolio/BlueWire.jpg",
    title: "Blue Wire",
    projectURL: "",
    description:
      "Blue Wire is an environmental magazine built on WordPress, covering global and local ecological issues. It features sections like 'The Story of the Week' and 'Radar Ambiental,' offering insights on sustainability, climate change, and conservation through engaging content and visuals.",
    tech: "WordPress | Elementor | SEO Optimization | CSS | Afiinity Designer",
    siteURL: "https://bluewire.mx/",
  },
  {
    img: "../assets/images/portfolio/Opulence.jpg",
    title: "Opulence",
    projectURL: "",
    description: 
      "Opulence is a Mexican fashion magazine built on WordPress, dedicated to showcasing the latest trends, designers, and luxury lifestyle. Featuring sections on haute couture, emerging talents, and style guides, it delivers high-end fashion insights through visually striking content.",
    tech: "WordPress | Elementor | SEO Optimization | CSS | Afiinity Designer",
    siteURL: "https://opulenc.com/",
  },
  {
    img: "../assets/images/portfolio/Rtoutdoorl.jpg",
    title: "RT Outdoor Living",
    projectURL: "",
    description:
      "This project for RT Lawn Services & Outdoor Living LLC, was built a captivating outdoor haven using WordPress, Elementor, and CSS, hosted on AWS Lightsail. Implementing intuitive interface, designed to showcase their extensive landscaping services.",
    tech: "Wordpress | Woocommerce | Elementor | CSS | AWS Lightsail | Adobe CC",
    siteURL: "https://rtoutdoorliving.com/",
  },
  {
    img: "../assets/images/portfolio/IMJUS.jpg",
    title: "IMJUS",
    projectURL: "https://www.behance.net/gallery/148034359/IMJUS",
    description:
      "Build a site in a Laravel environment with Wordpress that allows people to learn more about this institution, its certifications, seminars and courses through a friendly and intuitive platform. ",
    tech: "Laravel | Wordpress | AWS Lightsail | Adobe CC",
    siteURL: "https://imjus.org.mx/",
  },
  {
    img: "../assets/images/portfolio/Globaljuris.jpg",
    title: "GlobalJuris",
    projectURL: "",
    description:
      "This website dedicated to José Luis Vargas Valdez, a Mexican lawyer and jurist, is built using React with SCSS and hosted on Netlify. It serves as a modern platform to showcase his 25 years of experience in Constitutional, Administrative, and Electoral Law, including his tenure as a litigating lawyer at JL Vargas y Asociados S.C.",
    tech: "React | SCSS  | Netlify | Adobe CC",
    siteURL: "https://globaljuris.com.mx/",
  },
  {
    img: "./assets/images/portfolio/Mabe.jpg",
    title: "Mabe",
    projectURL: "https://www.behance.net/gallery/148040961/Mabe",
    description:
      "Lead and build a project hand in hand with Mabe's designers a site mounted on SAP Hybris for the sale of products of the brand, taking into account the needs of the company and creating a good UX for end users of this platform.",
    tech: "SCSS | Javascript | Hybris(Java) | Balsamiq | Adobe CC",
    siteURL: "https://mabe.com.mx/",
  },
  {
    img: "./assets/images/portfolio/Tecnolite.jpg",
    title: "Tecnolite",
    projectURL: "https://www.behance.net/gallery/148041407/Tecnolite",
    description:
      "Visually improve the platform through end-user testing, taking into account the target market and best practices for the generation of a new UI on your sales site.",
    tech: "SCSS | Javascript | Hybris(Java) | Balsamiq | Adobe CC",
    siteURL: "https://tecnolite.mx/",
  },
  {
    img: "./assets/images/portfolio/Kaikou.jpg",
    title: "Kaikou",
    projectURL: "https://www.behance.net/gallery/148034563/Kaikou",
    description:
      "Build and design a Wordpress multisite site that hosts vendors, sellers and users in a custom marketplace programmed with SCSS, PHP and Javascript.",
    tech: "Woocommerce | Wordpress | Laravel | PHP | Javascript | SCSS | AWS Lightsail | Adobe CC",
    siteURL: "http://kaikoucbd.com/",
  },
  {
    img: "../assets/images/portfolio/Mrsoul.jpg",
    title: "MR Soul",
    projectURL: "https://www.behance.net/gallery/219626661/MR-Soul-Eyewear",
    description:
      "MrSoul is an eCommerce platform built on WooCommerce and WordPress, dedicated to offering an extensive range of premium optical fashion products, including stylish sunglasses and frames. We focus on providing an efficient and satisfying shopping experience, supported by the reliability and flexibility of these leading platforms. Our design ethos emphasizes a minimalist and elegant UI/UX for users.",
    tech: " Wordpress | Woocommerce | PHP | CSS | SEO | SEM | Afiinity Designer",
    siteURL: "",
  },
];

const otherData = [
  // {
  //   title: "AMPPR",
  //   projectURL: "https://amppr.com.mx/",
  //   tech: "Laravel | SCSS",
  // },
  // {
  //   title: "Condesa 71",
  //   projectURL: "https://condesa71.com/inicio/",
  //   tech: "Wordpress | CSS | Figma",
  // },
  {
    title: "Go Club Freedom",
    projectURL: "https://goclubfreedom.com.mx/",
    tech: "Vue Js | SCSS | Figma",
  },
  {
    title: "Gov Vacations Rewards",
    projectURL: "https://govvacationrewards.com/",
    tech: "Vanila JS | SCSS | Figma",
  },
  {
    title: "Laud",
    projectURL: "https://www.behance.net/gallery/148034615/Laud",
    tech: "Wordpress | CSS",
  },
  {
    title: "MAA Talent",
    projectURL: "https://www.behance.net/gallery/148040887/MAA-Talent",
    tech: "Wordpress | CSS",
  },
  {
    title: "Totalplay",
    projectURL: "https://www.behance.net/gallery/148041345/Totalplay",
    tech: "Vanilla JS | HTML | CSS | Boostrap",
  },
  {
    title: "Vicarq",
    projectURL: "https://www.behance.net/gallery/148041439/Vicarq",
    tech: "Wordpress | Elementor | CSS",
  },
  {
    title: "Mutuo Financiera",
    projectURL: "https://www.behance.net/gallery/148041055/Mutuo-Financiera",
    tech: "Laravel | Angular | SCSS",
  },
  {
    title: "Odontotec",
    projectURL: "https://www.behance.net/gallery/148041279/Odontotec",
    tech: "Wordpress | CSS",
  },
  {
    title: "Nexo Integra",
    projectURL: "https://www.behance.net/gallery/148041121/Nexo-Integra",
    tech: "Laravel | SCSS",
  },
];

export { Portfolio };
