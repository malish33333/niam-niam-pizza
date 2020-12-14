
import React from "react";

export default function DescriptionProduct ({name}) {
  return (
    <>
      <img src="/thin.jpg" alt={name}></img>
        <h1>{name}</h1>
    </>
  );
}
