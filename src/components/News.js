import React from "react";
export default function News({ newsList }) {
  if(!newsList) {
    return <></>;
  }
  console.log("Inside news:", newsList);
  return (
    <div>
      Current affairs
    </div>
  )
}