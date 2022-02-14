import React from "react";
export default function Flag({ flag }) {
  if(!flag) {
    return <></>;
  }

  return (
    <div>
      <img src={flag} alt="Country Flag" width="500" />
    </div>
  )
}