import React from "react";
import { roundNumber } from "coolcamper-common";

export default props => {
  const {
    price,
    minBookingDaysDiscounts,
    temporaryDiscountPercent,
    isExtraSeason
  } = props;
  const hasTemporaryDiscount = !!temporaryDiscountPercent;
  const discountedPrice = hasTemporaryDiscount
    ? price - roundNumber((price * temporaryDiscountPercent) / 100, 2)
    : null;

  return (
    <React.Fragment>
      <h1>
        {hasTemporaryDiscount && <span className="old-price">{price}$</span>}
        <span>{hasTemporaryDiscount ? discountedPrice : price}$</span>{" "}
        <small>per month</small>
      </h1>
      {hasTemporaryDiscount && (
        <small>
          Benefit from subscription process{" "}
          <strong>{roundNumber(temporaryDiscountPercent, 2)}% reduced</strong>{" "}
          on subscription prcoess {isExtraSeason ? "Monthly" : "Yearly"}
        </small>
      )}
      {!hasTemporaryDiscount &&
        minBookingDaysDiscounts &&
        minBookingDaysDiscounts.map((discount, index) => (
          <small key={index}>
            Month-to-Month basis is still less than{" "}
            <strong>50%</strong> compaired to other CMS systems
          </small>
        ))}
    </React.Fragment>
  );
};
