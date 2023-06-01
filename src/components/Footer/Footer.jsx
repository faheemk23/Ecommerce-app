import "./Footer.css";
import footerMain from "../../assets/footer-main.jpg";
import footerSocial from "../../assets/footer-socials.jpg";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-detail">
        <img
          className="margin-bottom"
          src={footerMain}
          alt="footer-main"
          height="40px"
          width="100px"
        />
        <div className="margin-bottom">
          The GROcery ecommerce app is a convenient and user-friendly platform
          that revolutionizes the way we shop for groceries.You can explore an
          extensive range of fresh produce, pantry staples, and household
          essentials from the comfort of your home.
        </div>
        <img src={footerSocial} alt="socials" height="32px" width="150px" />
      </div>
      <div className="footer-links">
        <div className="flex-column footer-column">
          <div className="bold">About us</div>
          <div>Privacy & Security</div>
          <div>Terms</div>
          <div>For Business</div>
          <div>Support</div>
        </div>
        <div className="flex-column footer-column">
          <div className="bold">Delivery</div>
          <div>Cart of delivery</div>
          <div>Payment Method</div>
          <div>Delivery Access</div>
          <div>Gift</div>
        </div>
        <div className="flex-column footer-column">
          <div className="bold">Company</div>
          <div>About</div>
          <div>Careers</div>
          <div>Mobile</div>
        </div>
      </div>
    </div>
  );
}
