import React, { Fragment, Component }  from "react";
import HeroSub from "./components/hero-sub";


export default props => (
  <Fragment>
    <div className="content">
      <div className="header-wrap" role="main" aria-label="BonMunch">
        <div className="heading--title">
          <h1 className="main--heading">BonMunch</h1>
          <h2 className="sub--heading">Simple, Faster & Powerful</h2>
          <h2 className="sub--heading">For Your eCommerce Business</h2>

          <div className="description">
          We challenge everything.<br></br>
          From how eCommerce bussines is done <br></br>
          to how technology is used.    
            <p
              style={{
                marginTop: '3em',
              }}
            >
              <a
                href="/#contact"
                className="free_demo"
              >
                Free Demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>  
    {props.withSub && <HeroSub scrollTo="#why-bonMunch" />}
  </Fragment>

);