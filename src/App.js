import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Dropdown from "./components/Dropdown";
import Contact from "./pages/contact";
import { AnimatePresence } from "framer-motion";
import Work from "./pages/work";
import Cohab from "./pages/work/Cohab";
import LocalE from "./pages/work/LocalE";
import OfficeSpace from "./pages/work/OfficeSpace";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/work" exact component={Work} />
          <Route path="/work/cohab" exact component={Cohab} />
          <Route path="/work/locale" exact component={LocalE} />
          <Route path="/work/office-space" exact component={OfficeSpace} />
          <Route path="/about" exact component={About} />
          <Route
            path="/cohab"
            component={() => {
              window.location.href = "https://cohab-backend.herokuapp.com/";
              return null;
            }}
          />
          <Route
            path="/local-e"
            component={() => {
              window.location.href = "https://local-e-app.herokuapp.com/";
              return null;
            }}
          />
          <Route
            path="/office-space"
            component={() => {
              window.location.href = "https://kiwi3p.github.io/Ironhack-Game/";
              return null;
            }}
          />
          <Route
            path="/holiday1"
            component={() => {
              window.location.href =
                "https://kiwi3p.github.io/2020holiday_Presents_300x250/";
              return null;
            }}
          />
          <Route
            path="/holiday2"
            component={() => {
              window.location.href =
                "https://kiwi3p.github.io/2020holiday_Unwrappable_970x250/";
              return null;
            }}
          />
          <Route
            path="/linkedin"
            component={() => {
              window.location.href =
                "https://www.linkedin.com/in/jack-transue/";
              return null;
            }}
          />
          <Route
            path="/github"
            component={() => {
              window.location.href = "https://github.com/Kiwi3p";
              return null;
            }}
          />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
