import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <section className="footerBox">
        <img src="./images/logo.svg" alt="logo" className="footerLogo" />
        <ul className="footerNav">
          <li className="footerNavElement">
            <a href="#" className="footerNavLink">
              Home
            </a>
          </li>
          <li className="footerNavElement">
            <a href="#" className="footerNavLink">
              About Us
            </a>
          </li>
          <li className="footerNavElement">
            <a href="#" className="footerNavLink">
              Services
            </a>
          </li>
          <li className="footerNavElement">
            <a href="#" className="footerNavLink">
              News
            </a>
          </li>
          <li className="footerNavElement">
            <a href="#" className="footerNavLink">
              Contact Us
            </a>
          </li>
          <li className="footerNavElement">
            <a href="#" className="footerNavLink">
              Privacy Policy
            </a>
          </li>
        </ul>
        <div className="subscribeBox">
          <h4 className="subTitle">Newsletter</h4>
          <div className="subscribeInput">
            <input type="text" placeholder="Email" className="subInput" />
            <button className="subBtn">
              <img src="./images/subscribe.svg" alt="" />
            </button>
          </div>
        </div>
        <p className="copyright">All Copyrights are reserved by YATRI CABS</p>
      </section>
    </footer>
  );
}
