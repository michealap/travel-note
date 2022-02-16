import React from "react";
export default function Currency({ currencyData }) {
  if(!currencyData) {
    return <></>;
  }
  //console.log("Currency Tag", currencyData);
  return (
    <div>
      <p>{currencyData.new_amount}</p>
    </div>
  )
}