import React from "react";
import HeroBanner from "./blocks/Herobanner";
import TwoColumn from "./blocks/TwoColumn";
import ThreeColumn from "./blocks/ThreeColumn";
import LpData from "./homeData";
import "./home.css";

const Home = () => {
  const homeContent = LpData;
  return (
    <div className="lp-section">
      <HeroBanner mainBanner={homeContent.heroBanner} />
      <TwoColumn twoColContent={homeContent.twoColumnsBanner} />
      <ThreeColumn threeColContent={homeContent.threeColumnsBanner} />
    </div>
  );
};

export default Home;
