import "./About.css";
export default function About() {
  return (
    <>
      <section className="aboutSection">
        <div className="leftAbout">
          <h1 className="miniRightAboutTitle">
            Why <span className="miniRightActive">Yatri</span> ?
          </h1>
          <img src="./images/car.svg" alt="car" className="aboutImage" />
        </div>
        <div className="rightAbout">
          <h1 className="rightAboutTitle">
            Why <span className="rightActive">Yatri</span> ?
          </h1>
          <div className="AboutComponent">
            <div className="AboutImageBox">
              <img
                src="./images/responce.svg"
                alt="Responce Time"
                className="aboutComponentImage"
              />
            </div>

            <div className="aboutInfo">
              <h6 className="aboutInfoTitle">FAST RESPONCE TIME</h6>
              <p className="aboutInfoText">
                Experience the Best Car Rental Service with Driver for Local or
                Outstation Trips. Enjoy prompt response times and seamless car
                hire service, ensuring you get on the road quickly
              </p>
            </div>
          </div>

          <div className="AboutComponent">
            <img
              src="./images/people.svg"
              alt="Responce Time"
              className="aboutComponentImage"
            />
            <div className="aboutInfo">
              <h6 className="aboutInfoTitle">VAST FLEET </h6>
              <p className="aboutInfoText">
                We offer a wide range of rental cars including Sedans, SUVs,
                MUVs, premium Sedans, and Tempo Travellers to meet all your
                needs.
              </p>
            </div>
          </div>

          <div className="AboutComponent">
            <img
              src="./images/order.svg"
              alt="Responce Time"
              className="aboutComponentImage"
            />
            <div className="aboutInfo">
              <h6 className="aboutInfoTitle">EASY TO ORDER</h6>
              <p className="aboutInfoText">
                Easily Book a Cab Online through our user-friendly website,
                mobile application, or by calling our customer support team.
              </p>
            </div>
          </div>

          <div className="AboutComponent">
            <img
              src="./images/paid.svg"
              alt="Responce Time"
              className="aboutComponentImage"
            />
            <div className="aboutInfo">
              <h6 className="aboutInfoTitle">GREAT TARIFFS</h6>
              <p className="aboutInfoText">
                Rent a Car at the Lowest Rates! Our car hire tariffs are highly
                competitive compared to other operators. Book online cabs at the
                best prices with Yatri Car Rental.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
