import React from "react";
import Sweden from "flag-icon-css/flags/4x3/se.svg";

import Nordics2 from "../../../../assets/images/bonmunch/img/payments/Built_in_POS.png";
import Nordics1 from "../../../../assets/images/bonmunch/img/payments/Multiple_Payments.png";
export default {
  Nordics: {
    name: "payment images",
    ref: React.createRef(),
    images: [
      { src: Nordics1, alt: "Itinerariu Tarile Nordice" },
      { src: Nordics2, alt: "Itinerariu Tarile Nordice" }
    ]
  }
};
