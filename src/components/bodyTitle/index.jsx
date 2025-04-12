import React from "react";

export default function BodyTitle({ objectBodyTitle: { name, age, city } }) {
  return (
    <>
      <div>Имя: {name}</div>
      <div>Возраст: {age}</div>
      <div>Город: {city}</div>
    </>
  );
}
