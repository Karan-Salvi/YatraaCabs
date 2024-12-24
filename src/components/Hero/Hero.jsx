"use client";
import Form from "../Form/Form";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="mainSection">
          <div className="heroContainer">
            <div className="mainLeft">
              <h1 className="mainTitle">
                India's <span className="activeText">Leading One-Way Inter-City
                </span> Cab Service Provider
              </h1>
            </div>
            <div className="mainRight">
              <Form />
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
