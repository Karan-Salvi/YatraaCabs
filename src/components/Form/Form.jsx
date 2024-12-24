"use client";
import { useState } from "react";
import "./Form.css";
export default function Form() {
  const [options, setOptions] = useState("LOCAL");
  const [subOptions, setSubOptions] = useState("ONE WAY");

  return (
    <>
      <div className="formComponent">
        <div className="exploreBox">
          <div className="options">
            <button
              className={`optionsBtn ${
                options === "OUTSTATION" && "optionActive"
              } `}
              onClick={() => {
                setOptions("OUTSTATION");
              }}
            >
              Outstation
            </button>
            <button
              className={`optionsBtn ${options === "LOCAL" && "optionActive"} `}
              onClick={() => {
                setOptions("LOCAL");
              }}
            >
              Local
            </button>
            <button
              className={`optionsBtn ${
                options === "AIRPORT" && "optionActive"
              } `}
              onClick={() => {
                setOptions("AIRPORT");
              }}
            >
              Airport
            </button>
          </div>
          <div
            className={` ${
              options === "OUTSTATION" ? "subOptions" : "ComponentHidden"
            } `}
          >
            <button
              className={`optionsBtn subOptionBtn ${
                subOptions === "ONE WAY" && "subOptionActive"
              } `}
              onClick={() => {
                setSubOptions("ONE WAY");
              }}
            >
              One Way
            </button>
            <button
              className={`optionsBtn subOptionBtn ${
                subOptions === "ROUND TRIP" && "subOptionActive"
              } `}
              onClick={() => {
                setSubOptions("ROUND TRIP");
              }}
            >
              Round Trip
            </button>
          </div>
        </div>

        {/* <-- Outstation/OneWay --> */}

        <form
          className={` ${
            options == "OUTSTATION" && subOptions == "ONE WAY"
              ? " inputBoxes"
              : "ComponentHidden"
          }`}
        >
          <div className="inputBox">
            <div className="input">
              <label htmlFor="from">FROM</label>
              <div className="innnerInput">
                <input type="text" className="" id="from" />
                <img src="./images/cross.svg" alt="" />
              </div>
            </div>
            <div className="spaceBox">
              <img
                src="./images/compare_arrows.svg"
                alt="arrows"
                className="arrowImage"
              />
            </div>

            <div className="input">
              <label htmlFor="to">TO</label>
              <div className="innnerInput">
                <input type="text" className="" id="to" />
                <img src="./images/minus.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <label htmlFor="from">PICK UP DATE</label>
              <div className="innnerInput">
                <input type="text" className="" id="from" />
                <img src="./images/clock.svg" alt="" />
              </div>
            </div>
            <div className="spaceBox"></div>
            <div className="input">
              <label htmlFor="to">PICK UP AT </label>
              <div className="innnerInput">
                <input type="text" className="" id="to" />
                <img src="./images/calender.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="formButtonBox">
            <button className="exploreButton">EXPLORE CABS</button>
          </div>
        </form>

        {/* <-- Outstation/OneWay --> */}

        {/* <-- Outstation/roundTrip --> */}

        <form
          className={` ${
            options == "OUTSTATION" && subOptions == "ROUND TRIP"
              ? " inputBoxes"
              : "ComponentHidden"
          }`}
        >
          <div className="inputBox">
            <div className="input">
              <label htmlFor="from">FROM</label>
              <div className="innnerInput">
                <input type="text" className="" id="from" />
                <img src="./images/cross.svg" alt="" />
              </div>
            </div>
            <div className="spaceBox"></div>

            <div className="input">
              <label htmlFor="to">TO</label>
              <div className="innnerInput">
                <input type="text" className="" id="to" />
                <img src="./images/minus.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <label htmlFor="from">FROM</label>
              <div className="innnerInput">
                <input type="text" className="" id="from" />
                <img src="./images/plus.svg" alt="" />
              </div>
            </div>
            <div className="spaceBox"></div>
            <div className="input">
              <label htmlFor="to">TO</label>
              <div className="innnerInput">
                <input type="text" className="" id="to" />
                <img src="./images/plus.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="inputBox" style={{ gap: "1.275rem" }}>
            <div className="input">
              <label htmlFor="from">PICK UP DATE</label>
              <div className="innnerInput">
                <input type="text" className="" id="from" />
                <img src="./images/calender.svg" alt="" />
              </div>
            </div>

            <div className="input">
              <label htmlFor="from">RETURN DATE</label>
              <div className="innnerInput">
                <input type="text" className="" id="from" />
                <img src="./images/calender.svg" alt="" />
              </div>
            </div>

            <div className="input">
              <label htmlFor="to">PICK UP AT </label>
              <div className="innnerInput">
                <input type="text" className="" id="to" />
                <img src="./images/clock.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="formButtonBox">
            <button className="exploreButton">EXPLORE CABS</button>
          </div>
        </form>
        {/* <-- Outstation/roundTrip --> */}

        {/* <-- Airport --> */}
        <form
          className={` ${
            options == "AIRPORT" ? " inputBoxes" : "ComponentHidden"
          }`}
        >
          <div className="inputBox">
            <div className="input">
              <label htmlFor="from">FROM</label>
              <div className="innnerInput">
                <input type="text" className="" id="from" />
                <img src="./images/dropDown.svg" alt="" />
              </div>
            </div>
            <div className="spaceBox"></div>

            <div className="input">
              <label htmlFor="trip">TRIP</label>
              <div className="innnerInput">
                <input type="text" className="" id="trip" />
                <img src="./images/minus.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="inputBox">
            <div className="input">
              <label htmlFor="pickup">PICK UP DATE</label>
              <div className="innnerInput">
                <input type="text" className="" id="pickup" />
                <img src="./images/calender.svg" alt="" />
              </div>
            </div>
            <div className="spaceBox"></div>

            <div className="input">
              <label htmlFor="pickAt">PICK UP AT </label>
              <div className="innnerInput">
                <input type="text" className="" id="pickAt" />
                <img src="./images/clock.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="formButtonBox">
            <button className="exploreButton">EXPLORE CABS</button>
          </div>
        </form>
        {/* <-- Airport --> */}

        {/* <-- Local --> */}
        <form
          className={` ${
            options == "LOCAL" ? " inputBoxes" : "ComponentHidden"
          }`}
        >
          <div className="inputBox">
            <div className="input">
              <label htmlFor="from">PICKUP CITY</label>
              <div className="innnerInput">
                <input type="text" className="" id="from" />
                <img src="./images/dropDown.svg" alt="" />
              </div>
            </div>
            <div className="spaceBox"></div>

            <div className="input">
              <label htmlFor="trip">PICK UP</label>
              <div className="innnerInput">
                <input type="text" className="" id="trip" />
                <img src="./images/calender.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="inputBox" style={{ justifyContent: "center" }}>
            <div className="input" style={{ width: "20rem" }}>
              <label htmlFor="pickAt">PICK UP AT </label>
              <div className="innnerInput">
                <input type="text" className="" id="pickAt" />
                <img src="./images/clock.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="formButtonBox">
            <button className="exploreButton">EXPLORE CABS</button>
          </div>
        </form>
        {/* <-- LOCAL --> */}
      </div>
    </>
  );
}
