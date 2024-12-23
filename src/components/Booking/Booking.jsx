import "./Booking.css";
export default function Booking() {
  return (
    <>
      <section className="bookingSection">
        <div className="leftBooking">
          <h2 className="bookingTitle">
            Why choose AC Bus or AC Train for your{" "}
            <span className="bookingTitleActive">One-way Journey</span>?
          </h2>
          <p className="bookingDesc">
            Our oneway cab service is cheaper than AC bus and 2 tier AC train
            ticket fares, it reduces your travel time and you travel at your own
            private space also to enjoy your journey. Our one way taxi will come
            at your doorstep and take you to your desired destination. So book
            you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly.
            <br/>
            <span className="bookingDescActive">Read More....</span>
          </p>
        </div>
        <div className="rightBooking">
          <img src="./images/booking.svg" className="bookingImage" alt="" />
        </div>
      </section>
    </>
  );
}
