import React from "react";
import { useState } from "react";
import Button from "./Button";
import ArraysObject from "./Arrays";
import { toPng } from "html-to-image";
import download from "downloadjs";

function Avatar() {
  const [Background, setBackground] = useState("darkblue70");
  const [Accessories, setAccessories] = useState("headphone");
  const [Ears, setEars] = useState("default");
  const [Eyes, setEyes] = useState("default");
  const [Hair, setHair] = useState("default");
  const [Neck, setNeck] = useState("default");
  const [Leg, setLeg] = useState("default");
  const [Mouth, setMouth] = useState("default");
  const [arr, setArr] = useState(ArraysObject.arrHair);
  const [isActive, setIsActive] = useState(false);

  function setZindex() {
    if (Accessories === "headphone") return 4;
    else return 5;
  }

  //Functions
  function change(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  //the value of this arr state is updating through generateArr function in Button.js
  const printButtons = arr.map((item) => {
    return (
      <Button
        key={item}
        name={item}
        setBackground={setBackground}
        setAccessories={setAccessories}
        setEars={setEars}
        setEyes={setEyes}
        setHair={setHair}
        setNeck={setNeck}
        setLeg={setLeg}
        setMouth={setMouth}
        value={arr}
      />
    );
  });

  const downloadAlpaca = () => {
    const alpacaArt = document.getElementById("alpaca");
    toPng(alpacaArt).then(function (dataUrl) {
      download(dataUrl, "My-Alpaca.png");
    });
  };

  return (
    <div className="flex flex-col justify-center  max-w-[90%] md:max-w-[80%] lg:flex-row">
      <div className="alpaca-container mb-6 max-w-[100%] flex flex-col justify-center items-center lg:items-stretch">
        <div
          id="alpaca"
          className="img max-w-[50%] sm:max-w-[60%] lg:max-w-[80%] relative z-[1]"
        >
          <img
            src={`/images/backgrounds/${Background}.png`}
            className="image bg-img"
            id="bg-color"
            alt="blueBG"
          />
          <img
            src={`/images/neck/${Neck}.png`}
            className="image  absolute left-0 top-0 z-[3]"
            id="neck"
            alt="alpaca's neck"
          />
          <img
            src={`/images/eyes/${Eyes}.png`}
            className="image  absolute left-0 top-0 z-[5]"
            id="eyes"
            alt="eye"
          />
          <img
            src={`/images/leg/${Leg}.png`}
            className="image  absolute left-0 bottom-0"
            id="leg"
            alt="leg"
          />
          <img
            src={`/images/accessories/${Accessories}.png`}
            className={`image absolute left-0 top-0 z-[${setZindex()}]`}
            id="stuff"
            alt="leg"
          />
          <img
            src={`/images/ears/${Ears}.png`}
            className="image  absolute left-0 top-0 z-[2]"
            id="ears"
            alt="leg"
          />
          <img
            src={`/images/hair/${Hair}.png`}
            className="image  absolute left-0 top-0 z-[4]"
            id="hair"
            alt="leg"
          />
          <img
            src={`/images/mouth/${Mouth}.png`}
            className="image absolute left-0 top-0 z-[5]"
            id="mouth"
            alt="leg"
          />
          <img
            src="/images/nose.png"
            className="image absolute left-0 top-0 z-[3]"
            id="nose"
            alt="leg"
          />
        </div>

        <div className="two-btns flex justify-between self-stretch max-w-[100%] lg:max-w-[80%] mt-8">
          <button
            onClick={() => {
              setBackground(change(ArraysObject.arrBg));
              setAccessories(change(ArraysObject.arrStuff));
              setEars(change(ArraysObject.arrEars));
              setEyes(change(ArraysObject.arrEyes));
              setHair(change(ArraysObject.arrHair));
              setLeg(change(ArraysObject.arrLeg));
              setMouth(change(ArraysObject.arrMouth));
              setNeck(change(ArraysObject.arrNeck));
            }}
            className="random-btn px-[12%] py-[2%] flex justify-evenly rounded-md bg-white sm:text-lg lg:text-2xl"
          >
            Random
          </button>
          <button
            onClick={() => downloadAlpaca()}
            className="down-btn px-[12%] py-[2%] flex justify-evenly rounded-md bg-white sm:text-lg lg:text-2xl cursor-pointer"
          >
            Download
          </button>
        </div>
      </div>

      <div className="buttons-container flex justify-start gap-12 lg:flex-col lg:max-w-[50%]">
        <div className="upper-div">
          <p className=" text-base lg:text-2xl font-bold text-left mb-2 lg:mb-4">
            ACCESSORIZE THE ALPACA'S
          </p>
          <div className="flex flex-wrap  gap-2">
            <Button
              name="Hair"
              setArr={setArr}
              array={ArraysObject.arrHair}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <Button
              name="Ear"
              setArr={setArr}
              array={ArraysObject.arrEars}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <Button
              name="Eyes"
              setArr={setArr}
              array={ArraysObject.arrEyes}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <Button
              name="Mouth"
              setArr={setArr}
              array={ArraysObject.arrMouth}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <Button
              name="Neck"
              setArr={setArr}
              array={ArraysObject.arrNeck}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <Button
              name="Leg"
              setArr={setArr}
              array={ArraysObject.arrLeg}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <Button
              name="Accessories"
              setArr={setArr}
              array={ArraysObject.arrStuff}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <Button
              name="Background"
              setArr={setArr}
              array={ArraysObject.arrBg}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </div>
        </div>
        <div className="lower-div">
          <p className=" text-base lg:text-2xl font-bold text-left mb-2 lg:mb-4">
            STYLE
          </p>
          <div className="flex flex-wrap gap-2 ">{printButtons}</div>
        </div>
      </div>
    </div>
  );
}
export default Avatar;
