import "./Info.css";
export default function Info() {
  return (
    <>
      <section className="infoSection">
        <h2 className="infoTitle">WHY CHOOSE ONE WAY CAB?</h2>
        <div className="infoGrid">
          <ul className="infoList">
            <li className="infoElement">Instant Booking & Confirmation</li>
            <li className="infoElement">Confirmed Booking Immediately</li>
            <li className="infoElement">No Return Fare for One-Way Trip</li>
            <li className="infoElement">Clean & Professional Cab Services</li>
            <li className="infoElement">
              Transparent Billing with GPS based billing system
            </li>
          </ul>

          <div className=" infoImageBox">
            <img src="./images/choose.svg" className="infoImage" alt="choose" />
          </div>

          <ul className="infoList">
            <li className="infoElement">Pick-up from your house</li>
            <li className="infoElement">Dedicated Cab just for you</li>
            <li className="infoElement">Drop to your desired destination</li>
            <li className="infoElement">
              Completed more than 20,000+ Oneway Trips
            </li>
            <li className="infoElement">
              Multiple Payment Option including Credit Card.
            </li>
          </ul>
        </div>
        <p className="infoDesc">
          Discover affordable travel with our seamless
          <span className="infoDesc infoDescActive"> INTERCITY CAR RENTALS</span> in India
          – where excellence meets affordability with standardized rates in
          every city. Unleash your journey!
        </p>
      </section>
    </>
  );
}
