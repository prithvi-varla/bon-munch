import React from "react";
import { Link } from "react-router-dom";
import TimeAwareLogo from "../../assets/images/bonmunch//logo/time-aware";
import bonMunchLogo from '../../assets/images/bon-munch-white.svg';

export default () => (
  <div className="footer footer--dark">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__logo">
          <Link to="/" className="footer__textLogo">
            <img src={bonMunchLogo} />
          </Link>
          <span>
            BonMunch is a{" "}
            <strong>CMS based e-Commerce bussiness</strong> and also API-first,
             modular commerce stack made for ambitious brands and retailers. 
             BonMunch service-based architecture is built to deliver 
             flexibility and freedom at scale.
          </span>
        </div>

        <div className="footer__data">
          <div className="footer__data__item footer__social">
            <div className="footer__row">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                ga-on="click,auxclick,contextmenu"
                ga-hit-type="social"
                ga-social-network="Facebook"
                ga-social-action="Go to Facebook Page"
                ga-social-target="https://www.facebook.com"
                ga-event-label="footer"
              >
                Facebook
              </a>
            </div>
            <div className="footer__row">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                ga-on="click,auxclick,contextmenu"
                ga-hit-type="social"
                ga-social-network="Instagram"
                ga-social-action="Go to Insta page"
                ga-social-target="https://www.instagram.com"
                ga-event-label="footer"
              >
                Instagram
              </a>
            </div>
            <div className="footer__row">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                ga-on="click,auxclick,contextmenu"
                ga-hit-type="social"
                ga-social-network="Twitter"
                ga-social-action="Go to Twitter page"
                ga-social-target="https://twitter.com"
                ga-event-label="footer"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="footer__data__item footer__copyright">
            <div className="footer__row">
              <small>
                Our site uses cookies to improve your browsing experience. Continuing to browse implies acceptance{" "}
                  of Privacy Policy{" "} BonMunch.com
              </small>{" "}
              <br />
              <br />
              <small>
                All rights reserved for BonMunch.com ©
                {new Date().getFullYear()}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);