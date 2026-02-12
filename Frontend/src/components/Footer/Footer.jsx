import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Column 1: Brand & Social */}
        <div className="footer-brand-col">
          <img src="/bookcygnus.png" alt="Cygnus Logo" className="footer-logo" />
          <p className="social-heading">Connect with us</p>
          <div className="social-icons">
            <span className="social-icon">f</span>
            <span className="social-icon">i</span>
            <span className="social-icon">𝕏</span>
            <span className="social-icon">in</span>
          </div>
        </div>

        {/* Column 2: Links 1 */}
        <div className="footer-links-col">
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Employer home</li>
            <li>Sitemap</li>
            <li>Credits</li>
          </ul>
        </div>

        {/* Column 3: Links 2 */}
        <div className="footer-links-col">
          <ul>
            <li>Help center</li>
            <li>Summons/Notices</li>
            <li>Grievances</li>
            <li>Report issue</li>
          </ul>
        </div>

        {/* Column 4: Links 3 */}
        <div className="footer-links-col">
          <ul>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
            <li>Fraud alert</li>
            <li>Trust & safety</li>
          </ul>
        </div>

        {/* Column 5: App Promotion Card */}
        <div className="app-promo-card">
          <h5>Apply on the go</h5>
          <p>Get real-time job updates on our App</p>
          <div className="app-badges">
            <div className="badge-btn">
              <span className="badge-icon">▶</span>
              <div><small>GET IT ON</small><br/>Google Play</div>
            </div>
            <div className="badge-btn">
              <span className="badge-icon"></span>
              <div><small>Download on the</small><br/>App Store</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        All rights reserved © 2025 Cygnus Tech.
      </div>
    </footer>
  );
};

export default Footer;