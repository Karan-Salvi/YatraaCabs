import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src="./images/logo.svg" className="logo" alt="" />

        <img src="./images/contact.svg" className="contactImage" alt="" />

        <div className="accountSection">
          <div className="download">
            <div className="downloadBox">
              <img
                src="./images/download.svg"
                className="downloadImage"
                alt=""
              />
            </div>

            <p className="downloadText">Download App</p>
          </div>

          <div className="account">
            <div className="accountBox">
              <img src="./images/profileIcon.svg" className="avatar" alt="" />
            </div>
            <p className="accountText">Hi, Ravi</p>
          </div>
        </div>
      </nav>
    </>
  );
}
