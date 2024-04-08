//Created by Kellyi

import React from "react";
export const WomenSizes = [
  "6",
  "6.5",
  "7",
  " 7.5",
  "8",
  " 8.5",
  " 9",
  " 9.5",
  " 10",
];
export const WomenColors = [
  "Black",
  "White",
  "Beige",
  "Navy",
  "Gray",
  "Yellow",
  "Red",
  "Pink",
  "Silver",
  "Gold",
];

export function WomenSizesList() {
  return (
    <div>
      {WomenSizes.map((size) => (
        <ul key={size}>{size}</ul>
      ))}
    </div>
  );
}

export function WomenColorsList() {
  return (
    <div>
      {WomenColors.map((color) => (
        <ul key={color}>{color}</ul>
      ))}
    </div>
  );
}
