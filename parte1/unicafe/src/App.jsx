import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    console.log("Me gusta!");
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    console.log("Ni fu ni fa ...");
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    console.log("No me gusta");
  };
  // calcula el total de clics

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <button onClick={handleGoodClick}>Good</button>{" "}
        <button onClick={handleNeutralClick}>Neutral</button>{" "}
        <button onClick={handleBadClick}>Bad</button>
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutra: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {good + neutral + bad}</p>
        <p>Average: {(good - bad) / (good + neutral + bad)}</p>
        <p>Positive: {(good / (good + neutral + bad)) * 100} %</p>
      </div>
    </>
  );
};

export default App;
