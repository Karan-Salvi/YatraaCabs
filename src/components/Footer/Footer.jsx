import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <img src="./images/logo.svg" alt="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <div className="subscribeBox">
        <h4>Newsletter</h4>
        <div className="subscribeInput">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}
