import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
          <div className="inner-footer-container">
            <div className="footer-logo"></div>
            <div className="footer-info-container-first">
              <div className="contact-us">
                <p className="contact-us-text">
                  Contact Us
                </p>
                <p className="contact-number">
                  8089225625
                </p>
                <p className="contact-email">
                  contact@chhotastock.com
                </p>
              </div>

              <div className="company-information">
                <p className="company-text">
                  Company
                </p>
                <div className="other-main-info">
                <p className="about-us">
                  About Us
                </p>
                <p className="privacy-policy">
                  Privacy policy
                </p>
                <p className="terms-ans-conditions">
                  Terms and Conditions
                </p>
                </div>
              </div>

              <div className="quick-links">
                <p className="quick-links-text">
                  Quick Links
                </p>

                <div className="other-quick-links">
                  <p>Home</p>
                  <p>Gateway</p>
                  <p>Blog</p>
                </div>
              </div>

              <div className="download-app">
                <p className="download-app-text">
                  Download the App Now !
                </p>
                
                <img src="/google-play-image.png" className="google-play-image" alt="" />
              </div>
            </div>

            <div className="footer-social-media-icons">
              <p className="find-us-on">
                Find Us On
              </p>
              <div className="media-icons">
                <div className="facebook-icon">
                  
                </div>
                <div className="youtube-icon">

                </div>
                <div className="instagram-icon">

                </div>
                <div className="twitter-icon">

                </div>
              </div>
            </div>

            <div className="final-footer-information">
              <p className="final-footer-details-ending">© 2022 Chhotastock Technologies Private Limited. All rights reserved. CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.</p>
              <p className="final-footer-details-ending">Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes.</p>
              <p className="final-footer-details-ending"> Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing</p>
              <p className="final-footer-details-ending">Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102, India</p>
              <p className="final-footer-details-ending">For any query / feedback / clarifications, email at contact@chhotastock.com</p>
              <p className="final-footer-details-ending"> All Investment ideas, model portfolios & advisory are built by SEBI Registered Investment advisors (RIAs) & Chhotastock only facilitates investments in such baskets, portfolios.</p>
            </div>
          </div>
        </div>
  )
}

export default Footer