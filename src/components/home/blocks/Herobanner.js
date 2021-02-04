import React from "react";

const HeroBanner = (props) => {
  const heroContent = props.mainBanner;
  return (
    <div>
      {heroContent.map(
        ({ key, title, subtitle, link, linkName, imgLink, contentShow }) => {
          return (
            <section className="hero banner" key={key}>
              <div className="img-block">
                <a href={link}>
                  <img src={imgLink} alt="hero"></img>
                </a>
              </div>

              <div className={`sub-content ${contentShow}`}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <a href={link}>{linkName}</a>
              </div>
            </section>
          );
        }
      )}
    </div>
  );
};

export default HeroBanner;
