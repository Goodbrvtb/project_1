import React from "react";

export default function Article({ arrArticle }) {
  return (
    <>
      Skills:
      {arrArticle.map((item, index) => (
        <div key={index}>
          {index + 1}) {item}
        </div>
      ))}
    </>
  );
}
