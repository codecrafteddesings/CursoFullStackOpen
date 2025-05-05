import { useState } from "react";

const App = () => {
const [count, setCount] = useState(0);

const increaseBy = () => setCount(count + 1);
const setToZero = () => setCount(count - 1);
const setZero = () => setCount(0);




  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseBy}>
        plus
      </button>
      <button onClick={setToZero}>Zero</button>
      <button onClick={setZero}>Zero</button>
    </div>
  );
};
export default App;
 