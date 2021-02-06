import React from "react";
import Content from "./Content";
import "./ContentContainer.css";
import ImageOne from "../images/img-4.jpg";
import ImageTwo from "../images/img-3.jpg";
import ImageThree from "../images/img-5.jpg";
import ImageFour from "../images/img-6.jpg";
import ImageFive from "../images/img-7.jpg";

function ContentContainer() {
  return (
    <div className="cards">
      {/* <div className="orange-slice bg-yellow-500"></div> */}
      <h1 className="bg-yellow-500 shadow-cool up py-4 px-10 text-white full lg:text-3xl md:text-2xl sm:text-xl">Selected Projects</h1>
      <div className="cards_container">
        <div className="cards__wrapper">
          <ul className="cards__items" data-aos="fade-up">
            <Content
              className="shadow-cool"  
              src={ImageOne}
              text="CoHab - Your Home Task Manager"
              label="full-stack"
              path="/cohab"
            />
            <Content
              className="shadow-cool"    
              src={ImageTwo}
              text="Google Maps farmers market agregator for Portugal"
              label="full-stack"
              path="/local-e"
            />
          </ul>
          <ul className="cards__items" data-aos="fade-up">
            <Content
              className="shadow-cool"  
              src={ImageThree}
              text="Office Space: The Game - Vanilla Javascript choose your own adventure game"
              label="gaming"
              path="/office-space"
            />
            <Content
              className="shadow-cool"  
              src={ImageFour}
              text="Google Holiday SVG Animation"
              label="SVG Animation"
              path="/holiday1"
            />
            <Content
              className="shadow-cool"  
              src={ImageFive}
              text="Google Holiday SVG Animation variation 2"
              label="SVG Animation"
              path="/holiday2"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;
