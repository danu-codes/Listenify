import React from "react";
import "./Footer.css";
import { FooterLinks } from "./FooterLinks";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-brand">
          <h2>Listenify</h2>
          <p>
            Discover audiobooks, podcasts, and stories from creators around the world.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <FooterLinks />
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <SocialIcons />
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Listenify. All rights reserved.</p>
      </div>

    </div>
  );
};