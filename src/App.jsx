import "./App.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Title from "./components/title";
import BodyTitle from "./components/bodyTitle";
import Article from "./components/article";
import { useState } from "react";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Header stringHeader={"Добро пожаловать на мой сайт!"} />
      <Title booleanTitle={true} />

      <BodyTitle objectBodyTitle={{ name: "Vova", age: 37, city: "Vitebsk" }} />
      <Article arrArticle={["JS", "React", "ООП"]} />
      <Button onClick={increment} label="Увеличить" count={count} />
      <Footer numberFooter={2025} />
    </>
  );
}

export default App;
