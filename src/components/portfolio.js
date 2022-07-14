import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="section-title">
        <h2>
          <span>03</span>Portfolio
          <OpenInNewIcon />
        </h2>
      </div>
      <div className="portfolio__inner">
        {itemData.map((item) => {
          return (
            <div className="portfolio__card" key={item.img}>
              <div className="portfolio__card-img">
                <a href={item.url.toString()} target="_blank" rel="noreferrer">
                  <img src={item.img.toString()} alt={item.title.toString()} loading="lazy" />
                </a>
              </div>
              <div className="portfolio__card-content">
                <div className="portfolio__card-content--title">Project</div>
                <div className="portfolio__card-content--subtitle">{item.title}</div>
                <div className="portfolio__card-content--description">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const itemData = [
  {
    img: "../assets/images/portfolio/IMJUS.jpg",
    title: "IMJUS",
    url: "https://www.behance.net/gallery/148034359/IMJUS",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Kaikou.jpg",
    title: "Kaikou",
    url: "https://www.behance.net/gallery/148034563/Kaikou",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Nexos.jpg",
    title: "Nexo Integra",
    url: "@https://www.behance.net/gallery/148041121/Nexo-Integra",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Mabe.jpg",
    title: "Mabe",
    url: "https://www.behance.net/gallery/148040961/Mabe",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Laud.jpg",
    title: "Laud",
    url: "https://www.behance.net/gallery/148034615/Laud",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/MaaTalent.jpg",
    title: "MAA Talent",
    url: "https://www.behance.net/gallery/148040887/MAA-Talent",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Totalplay.jpg",
    title: "Totalplay",
    url: "https://www.behance.net/gallery/148041345/Totalplay",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Odontotec.jpg",
    title: "Odontotec",
    url: "https://www.behance.net/gallery/148041279/Odontotec",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Vicarq.jpg",
    title: "Vicarq",
    url: "https://www.behance.net/gallery/148041439/Vicarq",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Mutuo.jpg",
    title: "Mutuo Financiera",
    url: "https://www.behance.net/gallery/148041055/Mutuo-Financiera",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
  {
    img: "./assets/images/portfolio/Tecnolite.jpg",
    title: "Tecnolite",
    url: "https://www.behance.net/gallery/148041407/Tecnolite",
    description: "Loren ipsum dolor",
    tech: "Lorem ipsum",
    clinks: "Lorem ipsum",
  },
];

export { Portfolio };
