import React from "react";
import NavBar from "./component/NavBar";
import HomeBanner from "./component/HomeBanner";
import About from "./component/About";
import Services from "./component/Services";
import Tours from "./component/Tours";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <HomeBanner />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
};

export default App;
