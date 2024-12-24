import "./Form.css";
export default function Form() {
  return (
    <>
      <div className="formComponent">
        <div className="exploreBox">
          <div className="options">
            <button className="optionsBtn optionActive">Outstation</button>
            <button className="optionsBtn">Local</button>
            <button className="optionsBtn">Airport</button>
          </div>
          <div className="subOptions">
            <button className="optionsBtn subOptionBtn subOptionActive">
              One Way
            </button>
            <button className="optionsBtn subOptionBtn">Round Trip</button>
          </div>
        </div>

        {/* <-- Outstation/OneWay --> */}

        <form className="inputBoxes">
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
        </form>

        {/* <-- Outstation/OneWay --> */}

        <div className="formButtonBox">
          <button className="exploreButton">EXPLORE CABS</button>
        </div>
      </div>
    </>
  );
}
