"use client";
import React from "react";

function Button({hits}) {
  const [isCensored, setIsCensored] = React.useState(false)

  return (
    <button
      className={isCensored ? "censored" : undefined}
      onClick={() => setIsCensored(!isCensored)}
    >
      {hits}
    </button>
  )
} 

export default Button;
