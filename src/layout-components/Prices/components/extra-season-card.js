import React from "react";
import PriceCard from "./price-card";
import { Link } from "react-router-dom";
import { pricesData } from "coolcamper-common";
import moment from "moment";
import Price from "./price";
import PriceDetails from "./price-details";
import RibbonCorner from "../../RibbonCorner";

export default () => {
  const hasLowSeasonDiscount =
    pricesData.discounts.temporary &&
    pricesData.discounts.temporary.lowSeasonPercent > 0;
  return (
    <PriceCard
      title="Monthly"
      renderContent={() => (
        <Price
          isExtraSeason={true}
          price="29.99"
          minBookingDaysDiscounts={pricesData.discounts.minBookingDays}
          temporaryDiscountPercent={
            hasLowSeasonDiscount
              ? pricesData.discounts.temporary.lowSeasonPercent
              : null
          }
        />
      )}
      renderFooter={() => (
        <React.Fragment>
          <PriceDetails />
        </React.Fragment>
      )}
      renderRibbons={() =>
        hasLowSeasonDiscount && (
          <RibbonCorner
            text={"-" + pricesData.discounts.temporary.lowSeasonPercent + "%"}
          />
        )
      }
    />
  );
};
