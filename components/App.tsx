import { hot } from 'react-hot-loader';
import React, { FunctionComponent, useState } from "react";

const App: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Couwnt: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
declare const module: any;
export default hot(module)(App);
