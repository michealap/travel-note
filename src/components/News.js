import React from "react";
export default function News({ news }) {
  if(!news) {
    return <></>;
  }
  //console.log("news", news);
  return (
    <div>
      <p>This is the news component</p>
    </div>
  )
}