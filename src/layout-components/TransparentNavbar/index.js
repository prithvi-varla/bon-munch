import React from "react";
import Navbar from "../NavBar";
import Footer from "../FootBar";
import WithTopProgressBar from "../TransparentNavbar/WithTopProgressBar";

const TransparentNavbar = props => (
  <React.Fragment>
    <Navbar />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default WithTopProgressBar(TransparentNavbar);