"use client";
import "./Content.css";
export default function Content() {
  return (
    <section className="contentSection">
      <div className="contentBox">
        <img src="./images/hand.svg" className="contentImage" alt="" />
        <h4 className="contentTitle">Return Fare, Not Fair!</h4>
        <p className="contentDesc">
          Why Pay for Return Journey when you are travelling one-way? Now get
          discounted AC Taxi at just half of the round trip cost for your oneway
          travel.
        </p>
      </div>

      <div className="contentBox contentActive">
        <img src="./images/location.svg" className="contentImage" alt="" />
        <h4 className="contentTitle">GPS Based Billing System </h4>
        <p className="contentDesc">
          Since the GPS data captures the actual distance and time traveled, it
          reduce the chance of Kilometer tampering or discrepancies in billing.
        </p>
      </div>

      <div className="contentBox">
        <img src="./images/driving.svg" className="contentImage" alt="" />
        <h4 className="contentTitle">Now available routes are!</h4>
        <p className="contentDesc">
          Lucknow | Gorakhpur | Varanasi
          <br /> | Ayodhya | Allahabad | Bareilly
        </p>
      </div>
    </section>
  );
}
