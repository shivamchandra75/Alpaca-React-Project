import React from "react";
import { useState } from "react";
import Button from "./Button";
import ArraysObject from "./Arrays";

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

  return (
    <div className="flex justify-center bg-[rgba(0,250,0,.2)] max-w-[80%] ">
      <div className="max-w-[100%] bg-[rgba(0,250,0,.2)]">
        <div className="img max-w-fit relative z-[1]">
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
            className="image  absolute left-0 top-0 z-[5]"
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

        <div className="btns flex justify-between max-w-[80%] mt-8">
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
            className="random-btn px-16 py-4 flex justify-evenly rounded-md bg-white text-2xl"
          >
            Random
          </button>
          <button className="down-btn px-16 py-4 flex justify-evenly rounded-md bg-white text-2xl">
            Download
          </button>
        </div>
      </div>

      <div className=" flex flex-col bg-[rgba(240,0,0,.2)] max-w-[50%] justify-start gap-12">
        <div className="upper-div">
          <p className=" text-[2rem] font-bold text-left mb-8">
            ACCESSORIZE THE ALPACA'S
          </p>
          <div className="flex flex-wrap gap-5">
            <Button name="Hair" setArr={setArr} array={ArraysObject.arrHair} />
            <Button name="Ear" setArr={setArr} array={ArraysObject.arrEars} />
            <Button name="Eyes" setArr={setArr} array={ArraysObject.arrEyes} />
            <Button
              name="Mouth"
              setArr={setArr}
              array={ArraysObject.arrMouth}
            />
            <Button name="Neck" setArr={setArr} array={ArraysObject.arrNeck} />
            <Button name="Leg" setArr={setArr} array={ArraysObject.arrLeg} />
            <Button
              name="Accessories"
              setArr={setArr}
              array={ArraysObject.arrStuff}
            />
            <Button
              name="Background"
              setArr={setArr}
              array={ArraysObject.arrBg}
            />
          </div>
        </div>
        <div className="lower-div">
          <p className=" text-[2rem] font-bold text-left mb-8">STYLE</p>
          <div className="flex flex-wrap gap-5 ">{printButtons}</div>
        </div>
      </div>
    </div>
  );
}
export default Avatar;
