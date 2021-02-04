import React from "react";

const ThreeColumn = (props) => {
  const threeColumnBlocks = props.threeColContent;
  return (
    <section className="threeColumn">
      <div className="three-grid-block">
        {threeColumnBlocks.map(({ key, title, subtitle, imgLink }) => {
          return (
            <div className={`cols `} key={key}>
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

export default ThreeColumn;
