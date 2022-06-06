import React from "react";

function Rating({ value, text, color }) {
  return (
    <>
      <div className="rating px-2">
        <StarIcon color={color} value={value} count={0} />
        <StarIcon color={color} value={value} count={1} />
        <StarIcon color={color} value={value} count={2} />
        <StarIcon color={color} value={value} count={3} />
        <StarIcon color={color} value={value} count={4} />
        <span>{text && text}</span>
      </div>
    </>
  );
}

export function StarIcon({ value, color, count }) {
  return (
    <span>
      <i
        style={{ color }}
        className={getStarIconClassName(value, count + 1, count + 0.5)}
      ></i>
    </span>
  );
}

function getStarIconClassName(value, a, b) {
  if (value >= a) {
    return "fas fa-star";
  } else {
    return value >= b ? "fas fa-star-half-alt" : "far fa-star";
  }
}

export default Rating;
