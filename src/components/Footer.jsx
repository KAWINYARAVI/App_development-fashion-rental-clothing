import React from "react";

const Footer = () => {
  return (
    <>
      <style jsx>{`
        .footer-container {
          background-color: #f9f9f9;
          color: #333;
          padding: 20px 0;
          text-align: center;
          border-top: 1px solid #ddd;
        }
        .footer-section {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-column {
          flex: 1;
          min-width: 150px;
          margin: 10px;
        }
        .footer-column h5 {
          color: #333;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .footer-column ul {
          list-style-type: none;
          padding: 0;
        }
        .footer-column ul li {
          margin: 5px 0;
        }
        .footer-column ul li a {
          color: #333;
          text-decoration: none;
        }
        .footer-column ul li a:hover {
          text-decoration: underline;
        }
        .footer-social-media {
          text-align: center;
          margin: 20px 0;
        }
        .footer-social-media .social-media-link {
          margin: 0 10px;
          color: #333;
          text-decoration: none;
        }
        .footer-social-media .social-media-link i {
          font-size: 20px;
        }
        .footer-copyright {
          text-align: center;
          margin: 20px 0;
          color: #999;
        }
        .newsletter-signup {
          margin-bottom: 20px;
        }
        .newsletter-signup input {
          padding: 10px;
          margin-right: 10px;
          border: 1px solid #ddd;
        }
        .newsletter-signup button {
          padding: 10px 20px;
          border: none;
          background-color: #000;
          color: #fff;
          cursor: pointer;
        }
        .newsletter-signup button:hover {
          background-color: #444;
        }
      `}</style>
      <footer className="footer-container mb-0 text-center">
        <div className="newsletter-signup">
          <p>TAKE 15% OFF YOUR FIRST ORDER!</p>
          <input type="email" placeholder="Your email address" />
          <button>Sign Up</button>
          <p>BY ENTERING YOUR EMAIL ADDRESS YOU AGREE TO RECEIVE MARKETING EMAILS FROM US. UNSUBSCRIBE AT ANY TIME.</p>
        </div>
        <div className="footer-section d-flex align-items-center justify-content-center pb-5">
          <div className="footer-column">
            <h5>ACCOUNT</h5>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Check Order</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>ABOUT US</h5>
            <ul>
              <li><a href="#">About Our Company</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>CUSTOMER SERVICE</h5>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Popular FAQs</a></li>
              <li><a href="#">Find My Order</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>LEGAL</h5>
            <ul>
              <li><a href="#">Terms and Conditions of Sale</a></li>
              <li><a href="#">Privacy Notice</a></li>
              <li><a href="#">Do Not Sell My Personal Information</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social-media">
          <a href="#" className="social-media-link"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-media-link"><i className="fab fa-tiktok"></i></a>
          <a href="#" className="social-media-link"><i className="fab fa-youtube"></i></a>
          <a href="#" className="social-media-link"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-media-link"><i className="fab fa-facebook"></i></a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Fashion Rental Clothing. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
