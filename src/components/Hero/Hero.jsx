"use client";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="mainSection">
          <div className="heroContainer">
            <div className="mainLeft">
              <h1 className="mainTitle">
                India's <span className="activeText">Leading</span> <br />
                <span className="activeText">
                  One-Way Inter-City
                </span> <br /> Cab Service Provider
              </h1>
            </div>
            <div className="mainRight">
              <div className="exploreBox">
                <div className="options">
                  <button className="optionsBtn">Outstation</button>
                  <button className="optionsBtn">Local</button>
                  <button className="optionsBtn">Airport</button>
                </div>
                <div className="subOptions">
                  <button className="optionsBtn">One Way</button>
                  <button className="optionsBtn">Round Trip</button>
                </div>
              </div>
              <div className="inputBoxes">
                <div className="inputBox">
                  <div className="input">
                    <label htmlFor="from">FROM</label>
                    <input type="text" className="" id="from" />
                  </div>
                  <img src="./images/compare_arrows.svg" alt="arrows" />
                  <div className="input">
                    <label htmlFor="to">TO</label>
                    <input type="text" className="" id="to" />
                  </div>
                </div>
                <div className="inputBox">
                  <div className="input">
                    <label htmlFor="from">FROM</label>
                    <input type="text" className="" id="from" />
                  </div>
                  <img src="./images/compare_arrows.svg" alt="arrows" />
                  <div className="input">
                    <label htmlFor="to">TO</label>
                    <input type="text" className="" id="to" />
                  </div>
                </div>
              </div>
              <div className="buttonBox">
                <button className="exploreButton">EXPLORE CABS</button>
              </div>
            </div>
            <div className="blurBack"></div>
          </div>
        </div>
        <div className="promotion">
          <div className="billing">
            <h3 className="bilingTitle">Transparent Billing</h3>
            <p className="billingText">GPS Based Billing | No Km Tampering</p>
          </div>

          <div className="downloadNow">
            <h3 className="downloadNowTitle">Download Now!</h3>
            <div className="downloadImages">
              <img src="./images/googleStore.svg" alt="google store" />
              <img src="./images/appStore.svg" alt="apple store " />
            </div>
          </div>

          <div className="returnFare">
            <h3 className="returnFareTitle">No return fare</h3>
            <p className="returnFareText">
              One-Way cab fare | No hidden charges
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
