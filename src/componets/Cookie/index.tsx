import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import "./Cookie.css";

const CookieMessage = () => {
  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      buttonText="Allow"
      buttonClasses="primary-cookie"
      declineButtonText="Decline"
      declineButtonClasses="outline-cookie"
      /* debug={true} */
      location="bottom"
      cookieName="cookie-consent"
      style={{ background: "#ffffff", color: "#101828" }}
      containerClasses="CookieConsent my-cookie"
    >
      We care about your data, and we will only use cookies to improve your
      experience. By using this website, you accept our
      <Link to="/police">Cookies Policy</Link>
    </CookieConsent>
  );
};

export default CookieMessage;
