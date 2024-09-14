// import React from "react";
import { useState } from "react";
//styleSheet for animal cards
import styles from "./AnimalShow.module.css";
// console.log(styles);
//destructing the class names from styles object.
const {
  ["animal-show"]: animalShowClass,
  animal: animalClass,
  heart: heartClass,
} = styles;
/*
 *  The import can be statement result can be path
 *  If the image size is less than 9.7KB it can be base64 encoded string.
 * If not then it will be the path to the image.
 */
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import heart from "./images/heart.svg";
import horse from "./images/horse.svg";

//storing the path or base 64 string store in svgMap object.
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className={`${animalShowClass}`} onClick={handleClick}>
      <img className={`${animalClass}`} src={svgMap[type]} alt="animal" />
      <img
        className={`${heartClass}`}
        src={heart}
        alt="animal"
        width={10 + clicks * 10 + "px"}
      />
    </div>
  );
}
export default AnimalShow;
