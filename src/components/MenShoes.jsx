
import React from "react";

export const MenSizes = [
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13",
  "13.5",
  "14",
  "14.5",
  "15",
];
export const MenColors = [
  "Black",
  "White",
  "Brown",
  "Navy",
  "Tan",
  "Gray",
  "Maroon",
];

export function MenSizesList() {
  return (
    <div>
      {MenSizes.map((size) => (
        <ul key={size}>{size}</ul>
      ))}
    </div>
  );
}

export function MenColorsList() {
  return (
    <div>
      {MenColors.map((color) => (
        <ul key={color}>{color}</ul>
      ))}
    </div>
  );
}
