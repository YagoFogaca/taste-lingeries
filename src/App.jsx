import { useState } from "react";
import { HeaderComponents } from "./components/header/index.header.jsx";
import { Main } from "./components/main/index.main.jsx";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderComponents />
      <Main />
    </>
  );
};
