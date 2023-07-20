import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Form from "../components/form/Form";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Presentation from "../components/presentation/Presentation";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const Home = () => {
  return (
    <div>
      <Header />

      <Presentation />
      <Projects />

      <Skills />

      <Form />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
