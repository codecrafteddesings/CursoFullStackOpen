import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good, neutral);
  return (
    <>
      <div>
        <h1>Give feedback</h1>
        {good}
        <button onClick={() => setGood(good + 1)}>Good</button>

        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        {neutral}
        <button onClick={() => setBad(bad + 1)}>Bad</button>
        {bad}
      </div>
    </>
  );
};

export default App;
