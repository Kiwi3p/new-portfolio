import React, { useEffect } from "react";
import ImageOne from "../images/pexels-aleksandar-pasaric-1510610.jpg";
import ImageTwo from "../images/pexels-jaxson-bryden-2040627.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Content = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* <div data-aos="fade-up" className="menu-card">
        <img
          src={props.src}
          alt="hey"
          to={props.path}
          className="h-full rounded mb-20 shadow"
        />
        <div className={props.orient}>
          <h2 className="text-2xl mb-2">{props.text}</h2>
          <p className="mb-2">{props.text2}</p>
          <span>{props.label}</span>
        </div>
      </div> */}
      {/* <div data-aos="fade-up" className="max-w-md w-full lg:flex">
        <img
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          src={props.src}
          to={props.path}
          alt="Alt Test"
        />
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-grey-dark flex items-center">
              {props.label}
            </p>
            <div className="text-black font-bold text-xl mb-2">
              {props.text}
            </div>
            <p className="text-grey-darker text-base">{props.text2}</p>
          </div>
          <div className="flex items-center"></div>
        </div>
      </div> */}
      {/* <div className="p-10 min-h-screen flex md:flex-row items-center justify-around flex-wrap sm:flex-col">
        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
            {props.label}
          </div>
          <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl">
              <img
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                src={props.src}
                to={props.path}
                alt="Alt Test"
              />
              {props.text}
            </div>
          </div>
        </div>
      </div> */}
      {/* <main class="p-10 grid h-screen place-items-center relative from-yellow-400 to-yellow-500">
        <div class="relative h-44 w-44">
          <div class="card bg-cyan-400 shadow-md inline-block w-60 h-60 rounded-3xl absolute bottom-0 transform -rotate-12"></div>
          <div class="card bg-indigo-400 shadow-lg inline-block w-60 h-60 rounded-3xl absolute bottom-0 transform -rotate-6"></div>
          <div class="card bg-pink-500 shadow-lg inline-block w-60 h-60 rounded-3xl absolute bottom-0 transform rotate-6"></div>
          <div class="card bg-white transition shadow-xl w-60 h-60 rounded-3xl absolute bottom-0 z-10 grid place-items-center">
            <div class="card bg-white shadow-inner h-4/5 w-3/4 rounded-2xl overflow-hidden relative">
              <h1 class="shadow-md text-xs font-thin text-center text-gray-600 uppercase p-3">
                {props.text}
              </h1>
              <img src={props.src} to={props.path} alt="Alt Test" />
              <button class="card bg-gray-700 hover:bg-gray-600 transition text-white w-full h-1/6 absolute bottom-0 ">
                {props.label}
              </button>
            </div>
          </div>
        </div>
      </main> */}
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Content;
