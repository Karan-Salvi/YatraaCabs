import "./Specification.css";

export default function Specification() {
  return (
    <>
      <section className="specificationSection">
        <div className="specificationBox">
          <div className="specTitle">CAR TYPE</div>
          <ul className="specList">
            <li className="specElement">AC Sedans</li>
            <li className="specElement">AC Hatchbacks</li>
            <li className="specElement">AC SUV </li>
          </ul>
        </div>

        <div className="specificationBox">
          <div className="specTitle">MODEL INCLUDES</div>
          <ul className="specList">
            <li className="specElement">Etios, Amaze, Dzire etc.</li>
            <li className="specElement">Wagon R, Celerio, Micra etc.</li>
            <li className="specElement">Ertiga, Xylo etc. </li>
          </ul>
        </div>

        <div className="specificationBox">
          <div className="specTitle">PASSENGER</div>
          <ul className="specList">
            <li className="specElement">4 Pax</li>
            <li className="specElement">4 Pax</li>
            <li className="specElement">6-7 Pax</li>
          </ul>
        </div>

        <div className="specificationBox">
          <div className="specTitle">IDEAL FOR</div>
          <ul className="specList">
            <li className="specElement">
              Comfortable trips with small families
            </li>
            <li className="specElement">Budget trips over short distances</li>
            <li className="specElement">Premium trips with large families</li>
          </ul>
        </div>

        <div className="specificationBox">
          <div className="specTitle">FARE</div>
          <ul className="specList">
            <li className="specElement">
              Rs.11/KM
            </li>
            <li className="specElement"> Rs.11/KM</li>
            <li className="specElement"> Rs.13/KM</li>
          </ul>
        </div>
      </section>
    </>
  );
}
