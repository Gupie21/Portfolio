import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const portfolioImageBase = "/assets/images/portfolio";
const placeholderPalette = ["#0f172a", "#12333f", "#3b1f5e", "#5b2f1a", "#153b2d", "#2d2a5a"];

const getPlaceholderColor = (title) => {
  const hash = title.split("").reduce((accumulator, character) => accumulator + character.charCodeAt(0), 0);
  return placeholderPalette[hash % placeholderPalette.length];
};

const ProjectCard = ({ item, isFeatured = false }) => (
  <div className="portfolio__card">
    {isFeatured && (
      <div className="portfolio__card-img">
        {item.img ? (
          <a href={item.projectURL || item.siteURL} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}>
            <img
              src={item.img}
              alt={`${item.title} project preview`}
              loading="lazy"
              decoding="async"
            />
          </a>
        ) : (
          <a
            className="portfolio__card-img--placeholder"
            href={item.projectURL || item.siteURL}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${item.title}`}
            style={{ backgroundColor: getPlaceholderColor(item.title) }}
          >
            <span>{item.title}</span>
          </a>
        )}
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
            aria-label={`View ${item.title} project on Behance`}
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
            aria-label={`Visit ${item.title} live site`}
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
    title: "Diego Padilla Weddings",
    projectURL: "",
    siteURL: "https://diegopadillaweddings.com/",
    description:
      "Wedding photography and events website built with WordPress, PHP, CSS, JavaScript, Elementor, and AWS, focused on presenting premium services with a polished visual experience.",
    tech: "WordPress | PHP | CSS | JavaScript | Elementor | AWS",
  },
  {
    title: "Vertex Pro",
    projectURL: "",
    siteURL: "https://vertexpro.company/",
    description:
      "Corporate website built with WordPress, PHP, CSS, JavaScript, Elementor, and AWS to present services and brand positioning with a clean, conversion-focused layout.",
    tech: "WordPress | PHP | CSS | JavaScript | Elementor | AWS",
  },
  {
    title: "Casa Forastero",
    projectURL: "",
    siteURL: "https://casaforastero.com/",
    description:
      "Ecommerce and hospitality experience built with TypeScript, CSS, and Shopify, designed to communicate the brand and drive user interaction through a modern storefront.",
    tech: "TypeScript | CSS | Shopify",
  },
  {
    title: "GSM Marketing",
    projectURL: "",
    siteURL: "https://gsmmarketing.com.mx/",
    description:
      "Marketing agency website built with WordPress, PHP, CSS, JavaScript, Elementor, and AWS to communicate services, credibility, and lead-generation goals.",
    tech: "WordPress | PHP | CSS | JavaScript | Elementor | AWS",
  },
  {
    title: "Amarine",
    projectURL: "",
    siteURL: "https://amarine-phi.vercel.app/",
    description:
      "React-based site built with CSS, TypeScript, and AWS, using a lightweight frontend structure and a modern presentation to showcase the brand.",
    tech: "React | CSS | TypeScript | AWS",
  },
  {
    title: "Umbrales",
    projectURL: "",
    siteURL: "https://umbrales.com.mx/",
    description:
      "Corporate website built with WordPress, PHP, CSS, JavaScript, Elementor, and AWS, designed to present the brand with a clean and professional visual system.",
    tech: "WordPress | PHP | CSS | JavaScript | Elementor | AWS",
  },
  {
    img: `${portfolioImageBase}/Kintsugi.jpg`,
    title: "Kintsugi",
    projectURL: "",
    description:
      "The project at the martial arts and kickboxing academy was developed in React with SCSS and deployed on Netlify. This allowed them to provide a modern and agile platform, ensuring users had a smooth and reliable experience while showcasing the facility and services.",
    tech: "React | SCSS | Netlify | Adobe CC",
    siteURL: "https://kintsugimfa.netlify.app/",
  },
  {
    img: `${portfolioImageBase}/BlueWire.jpg`,
    title: "Blue Wire",
    projectURL: "",
    description:
      "Blue Wire is an environmental magazine built on WordPress, covering global and local ecological issues. It features sections like 'The Story of the Week' and 'Radar Ambiental,' offering insights on sustainability, climate change, and conservation through engaging content and visuals.",
    tech: "WordPress | Elementor | SEO Optimization | CSS | Affinity Designer",
    siteURL: "https://bluewire.mx/",
  },
  {
    img: `${portfolioImageBase}/Rtoutdoorl.jpg`,
    title: "RT Outdoor Living",
    projectURL: "",
    description:
      "This project for RT Lawn Services & Outdoor Living LLC, was built a captivating outdoor haven using WordPress, Elementor, and CSS, hosted on AWS Lightsail. Implementing intuitive interface, designed to showcase their extensive landscaping services.",
    tech: "WordPress | WooCommerce | Elementor | CSS | AWS Lightsail | Adobe CC",
    siteURL: "https://rtoutdoorliving.com/",
  },
  {
    img: `${portfolioImageBase}/IMJUS.jpg`,
    title: "IMJUS",
    projectURL: "https://www.behance.net/gallery/148034359/IMJUS",
    description:
      "Built a site in a Laravel environment with WordPress that allows people to learn more about this institution, its certifications, seminars, and courses through a friendly and intuitive platform.",
    tech: "Laravel | WordPress | AWS Lightsail | Adobe CC",
    siteURL: "https://imjus.org.mx/",
  },
  {
    img: `${portfolioImageBase}/Globaljuris.jpg`,
    title: "GlobalJuris",
    projectURL: "",
    description:
      "This website dedicated to José Luis Vargas Valdez, a Mexican lawyer and jurist, is built using React with SCSS and hosted on Netlify. It serves as a modern platform to showcase his 25 years of experience in Constitutional, Administrative, and Electoral Law, including his tenure as a litigating lawyer at JL Vargas y Asociados S.C.",
    tech: "React | SCSS | Netlify | Adobe CC",
    siteURL: "https://globaljuris.com.mx/",
  },
  {
    img: `${portfolioImageBase}/Mabe.jpg`,
    title: "Mabe",
    projectURL: "https://www.behance.net/gallery/148040961/Mabe",
    description:
      "Led and built a project hand in hand with Mabe's designers: a site mounted on SAP Hybris for the sale of brand products, taking into account the company's needs and creating a solid UX for end users.",
    tech: "SCSS | JavaScript | Hybris (Java) | Balsamiq | Adobe CC",
    siteURL: "https://mabe.com.mx/",
  },
  {
    img: `${portfolioImageBase}/Tecnolite.jpg`,
    title: "Tecnolite",
    projectURL: "https://www.behance.net/gallery/148041407/Tecnolite",
    description:
      "Visually improve the platform through end-user testing, taking into account the target market and best practices for the generation of a new UI on your sales site.",
    tech: "SCSS | JavaScript | Hybris (Java) | Balsamiq | Adobe CC",
    siteURL: "https://tecnolite.mx/",
  },
  {
    img: `${portfolioImageBase}/Kaikou.jpg`,
    title: "Kaikou",
    projectURL: "https://www.behance.net/gallery/148034563/Kaikou",
    description:
      "Built and designed a WordPress multisite that hosts vendors, sellers, and users in a custom marketplace programmed with SCSS, PHP, and JavaScript.",
    tech: "WooCommerce | WordPress | Laravel | PHP | JavaScript | SCSS | AWS Lightsail | Adobe CC",
    siteURL: "http://kaikoucbd.com/",
  },
  {
    img: `${portfolioImageBase}/Mrsoul.jpg`,
    title: "MR Soul",
    projectURL: "https://www.behance.net/gallery/219626661/MR-Soul-Eyewear",
    description:
      "MrSoul is an eCommerce platform built on WooCommerce and WordPress, dedicated to offering an extensive range of premium optical fashion products, including stylish sunglasses and frames. The design ethos emphasizes a minimalist and elegant UI/UX.",
    tech: "WordPress | WooCommerce | PHP | CSS | SEO | SEM | Affinity Designer",
    siteURL: "",
  },
  {
    img: `${portfolioImageBase}/QuienOpina.jpg`,
    title: "Quien Opina",
    projectURL: "https://www.behance.net/gallery/219625413/Quien-Opina",
    description:
      "QuienOpina, built with Python and Angular, is a platform that generates statistical reports on public sentiment about products, companies, or individuals from online and social media sources. It helps people and businesses target their marketing and advertising campaigns by providing insights into public acceptance and opinions.",
    tech: "Angular | Tailwind | SCSS | Python | Netlify | Figma | Adobe CC",
    siteURL: "",
  },
  {
    img: `${portfolioImageBase}/Opulence.jpg`,
    title: "Opulence",
    projectURL: "",
    description: 
      "Opulence is a Mexican fashion magazine built on WordPress, dedicated to showcasing the latest trends, designers, and luxury lifestyle. Featuring sections on haute couture, emerging talents, and style guides, it delivers high-end fashion insights through visually striking content.",
    tech: "WordPress | Elementor | SEO Optimization | CSS | Affinity Designer",
    siteURL: "https://opulenc.com/",
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
    tech: "Vue.js | SCSS | Figma",
  },
  {
    title: "Gov Vacations Rewards",
    projectURL: "https://govvacationrewards.com/",
    tech: "Vanilla JS | SCSS | Figma",
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
    tech: "Vanilla JS | HTML | CSS | Bootstrap",
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
