import React from "react";
import ArraysObject from "./Arrays";

function Button(props) {
  function generateArr(array) {
    props.setArr(array);
    console.log("changed");
  }
  //https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
  function findKeyByValue(object, value) {
    let arr = Object.keys(object);
    const key = arr.find((key) => object[key] === value);
    if (key === arr[0]) props.setBackground(props.name);
    else if (key === arr[1]) props.setAccessories(props.name);
    else if (key === arr[2]) props.setEars(props.name);
    else if (key === arr[3]) props.setEyes(props.name);
    else if (key === arr[4]) props.setHair(props.name);
    else if (key === arr[5]) props.setLeg(props.name);
    else if (key === arr[6]) props.setMouth(props.name);
    else if (key === arr[7]) props.setNeck(props.name);
  }
  // let toggle = false;
  const btnComponent = document.querySelector(".btn-component");
  function toggleActiveButton(boolean) {
    if (boolean) btnComponent.classList.toggle("active");
    else btnComponent.classList.toggle("active");
    boolean = !boolean;
    props.setIsActive(boolean);
    console.log(boolean, props.isActive);
  }


  return (
    <button
      onClick={() => {
        if (props.array) generateArr(props.array); // so that if i don't pass array prop to a Button component it won't call the function
        if (props.value) findKeyByValue(ArraysObject, props.value);
        toggleActiveButton(props.isActive);
      }}
      className="btn-component text-sm py-1 px-1 rounded-xl md:py-1 md:px-4 lg:py-2 lg:px-8 border-2 font-normal md:font-semibold border-blue-900 lg:rounded-3xl text-blue-900 opacity-60 lg:hover:opacity-100 hover:border-blue-900 hover:text-blue-900"
    >
      {props.name}
    </button>
  );
}

export default Button;
