import React from "react";

const FooterLink = (props) => {
  const linkContent = props.linkContent;
  const getLinkData = () => {
    return linkContent.map((cont) => {
      return (
        <div className="block" key={cont.title}>
          <h5>{cont.title}</h5>
          <div>
            <ul>
              {cont.linksDetails.map((l) => {
                return <li key={l.linktitle}>{l.linktitle}</li>;
              })}
            </ul>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="footer-content">
      <div className="link-block">{getLinkData()}</div>
    </div>
  );
};

export default FooterLink;
