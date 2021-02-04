import React from "react";

const TwoColumn = (props) => {
  const twoColumnBlocks = props.twoColContent;
  return (
    <section className="twoColumn">
      <div className="two-grid-block">
        {twoColumnBlocks.map(({ key, title, subtitle, imgLink }) => {
          return (
            <div key={key} className="cols">
              <div className="image-block">
                <img src={imgLink} alt={title}></img>
              </div>
              <div className="content-block">
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TwoColumn;
