import React from "react";

export default function Button({ onClick, label, count }) {
  return (
    <>
      <p>Уровень мастерства {count}</p>
      <button onClick={onClick}>{label}</button>
    </>
  );
}
