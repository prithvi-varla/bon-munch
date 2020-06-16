import React from "react";
import { refHasClassName } from "../../commons/utils";
import BurgerMenuSVG from "../../assets/images/bonmunch/burger-menu";
import ScrollListener from "../../commons/scroll-listener";
import { Link } from "react-router-dom";
import IconButton from "../../commons/icon-button";
import bonMunchLogo from '../../assets/images/bon-munch-blue-white.svg';

import "../../styles/bonMunchTheme.css";

// Height in px for navbar
const navbarHeight = 60;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.navBarRef = React.createRef();
    this.renderLinks = this.renderLinks.bind(this);
    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
    this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNavbarBackgroundColor = this.toggleNavbarBackgroundColor.bind(
      this
    );

    this.state = {
      mobileMenuOpened: false,
      navLinks: [
        { title: "Why BonMunch ?", url: "/#why-bonMunch" },
        { title: "Prices", url: "/#prices" },
        {
          title: "Contact Us",
          url: "/#contact"
        },
        {
          title: "⚙️ Admin Login",
          url: "http://localhost:3000/LoginPage",
          external: true
        }
      ]
    };
  }

  componentDidMount() {
    this.toggleNavbarBackgroundColor();
  }

  handleScroll() {
    this.toggleNavbarBackgroundColor();
  }

  toggleBurgerMenu() {
    this.setState(
      {
        mobileMenuOpened: !this.state.mobileMenuOpened
      },
      this.toggleNavbarBackgroundColor
    );
  }

  closeBurgerMenu() {
    if (this.state.mobileMenuOpened) {
      this.toggleBurgerMenu();
    }
  }

  toggleNavbarBackgroundColor() {
    // If the navbar is rendered without transparent background
    // there's no need to toggle it's background color
    if (this.props.withTransparentBackground !== false) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const { mobileMenuOpened } = this.state;
      const hasClassName = refHasClassName(this.navBarRef, "navbar--extended");

      if (scrollTop > navbarHeight || mobileMenuOpened) {
        if (hasClassName) {
          this.navBarRef.current.classList.remove("navbar--extended");
        }
      } else if (!hasClassName) {
        this.navBarRef.current.classList.add("navbar--extended");
      }
    }
  }

  renderLinks() {
    return (
      <ul>
        {this.state.navLinks.map((link, index) => (
          <li key={index}>
            {link.external && (
              <a href={link.url} rel="noopener noreferrer" target="_blank">
                {link.icon && <link.icon />} {link.title}
              </a>
            )}
            {!link.external && (
              <Link to={link.url} onClick={this.closeBurgerMenu}>
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { withTransparentBackground = true, className = "" } = this.props;
    const { mobileMenuOpened } = this.state;
    const mobileMenuStyle = {
      maxHeight: mobileMenuOpened ? 360 : 0
    };

    const navbarClasses = ["navbar--home", className];
    if (withTransparentBackground === true) {
      navbarClasses.push("navbar--extended");
    }

    const Navbar = (
      <div ref={this.navBarRef} className={navbarClasses.join(" ")}>
        <nav className="nav__mobile" style={mobileMenuStyle}>
          {this.renderLinks()}
        </nav>

        <div className="container">
          <div className="navbar__inner">
            <Link
              to="/"
              className="navbar__logo"
              
            >
              <img src={bonMunchLogo} /> 
            </Link>
            <nav className="navbar__menu">{this.renderLinks()}</nav>
            <div className="navbar__menu-mob">
              <div className="covid-19">
                <Link to="/LoginPage">
                  <span role="img" aria-label="Virus">
                    ⚙️
                  </span>{" "}
                  Admin Page
                </Link>
              </div>
              <IconButton onClick={this.toggleBurgerMenu} aria-label="Meniu">
                <BurgerMenuSVG color="currentColor" width="1.2em" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );

    return withTransparentBackground ? (
      <ScrollListener onScroll={this.handleScroll}>{Navbar}</ScrollListener>
    ) : (
      Navbar
    );
  }
}