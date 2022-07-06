import React, { useState } from "react";
import Avatar from "./avatar";
import ArraysObject from "./Arrays";

function Button(props) {
  function generateArr(array) {
    props.setArr(array);
    console.log("called");
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

  return (
    <button
      onClick={() => {
        if (props.array) generateArr(props.array); // so that if i don't pass array prop to a Button component it won't call the function
        if (props.value) findKeyByValue(ArraysObject, props.value);
      }}
      className=" py-3 px-8 border-[1px] font-medium border-blue-900 rounded-3xl text-blue-900 hover:border-2 hover:font-normal"
    >
      {props.name}
    </button>
  );
}

export default Button;
