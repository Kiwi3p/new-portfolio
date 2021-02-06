import React, { Component } from "react";
import api from "../utils/api.json";
import "./Game.css";

export class Game extends Component {
  state = {};

  //RENDERS MAIN SCREEN IF GAME IS STARTED

  componentDidMount() {
    const textElement = document.getElementById("text");
    const optionButtonsElement = document.getElementById("option-buttons");
    // const imgSrc = document.getElementById("image-switch");

    let theState = {};

    function startGame() {
      //console.log(imgSrc);
      theState = {};
      showTextNode(1);
      //youWin();
    }

    function showTextNode(textNodeIndex) {
      const textNode = textNodes.find(
        (textNode) => textNode.id === textNodeIndex
      );
      textElement.innerText = textNode.text;
      // imgSrc.innerHTML = textNode.img;

      //const textImg = textNodes.find(textNode => textNode.img === textNodeIndex)
      //imgSrc.innerHTML = textImg.img

      while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
      }

      textNode.options.forEach((option) => {
        if (showOption(option)) {
          const button = document.createElement("button");
          button.innerText = option.text;
          button.classList.add("btn");
          button.addEventListener("click", () => selectOption(option));
          optionButtonsElement.appendChild(button);
        }
      });
    }

    function showOption(option) {
      return option.requiredState == null || option.requiredState(theState);
    }

    function selectOption(option) {
      const nextTextNodeId = option.nextText;
      if (nextTextNodeId <= 0) {
        return startGame();
      } else if (nextTextNodeId === 11) {
        console.log("this should be finished");
        callReel();
      }

      theState = Object.assign(theState, option.setState);
      showTextNode(nextTextNodeId);
    }

    const textNodes = api;

    function callReel() {
      window.open(
        "https://www.youtube.com/watch?v=TTFuYXyfMZM&ab_channel=JackTransuePortfolio"
      );
    }

    startGame();
  }

  render() {
    return (
      <div
        id="game-level"
        className="flex flex-col justify-center items-center"
      >
        {/* <div id="image-switch"></div> */}
        <div class="container-game">
          <div id="text" className="lg:text-xl md:text-lg sm:text-xs">Text</div>
          <div id="option-buttons" class="btn-grid">
            <button className="btn bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full ">
              Option 1
            </button>
            <button className="btn">Option 2</button>
            <button className="btn">Option 3</button>
            <button className="btn">Option 4</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
