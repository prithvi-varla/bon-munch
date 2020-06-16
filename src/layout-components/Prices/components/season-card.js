import React from "react";
import PriceCard from "./price-card";
import { pricesData, roundNumber } from "coolcamper-common";
import { Link } from "react-router-dom";
import Price from "./price";
import PriceDetails from "./price-details";
import RibbonCorner from "../../RibbonCorner";
import moment from "moment";

export default () => {
  const hasHighSeasonDiscount = true;
  return (
    <PriceCard
      title="With Subscription"
      renderContent={() => (
        <Price
          price="29.99"
          minBookingDaysDiscounts="{pricesData.discounts.minBookingDays}"
          temporaryDiscountPercent={
            hasHighSeasonDiscount
              ? 35
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
        hasHighSeasonDiscount && (
          <RibbonCorner
            text={
              "35% discount"
            }
          />
        )
      }
    />
  );
};
