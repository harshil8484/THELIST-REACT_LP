import React from "react";
import "./footer.css";
import footerLinks from "./footerlinks";
import FooterLink from "./FooterLink";
const Footer = () => {
  const footerData = footerLinks.links;

  return (
    <footer>
      <div className="footer">
        <FooterLink linkContent={footerData} />
      </div>
      <div className="copyright">
        Copyright {new Date().getFullYear()} THE LIST LTD. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
