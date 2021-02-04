import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
const Main = () => {
  return (
    <div>
      <Header />
      <div id="wrapper">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
