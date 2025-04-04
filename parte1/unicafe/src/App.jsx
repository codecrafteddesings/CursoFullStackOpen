import { useState } from "react";

const Statitistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0;
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;

  return (
    <div>
      <h3>Statistics</h3>
      {total > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>All: {total}</p>
          <p>Average: {average.toFixed(1)}</p>
          <p>Positive: {positivePercentage.toFixed(1)} %</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

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

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <button onClick={handleGoodClick}>Good</button>{" "}
        <button onClick={handleNeutralClick}>Neutral</button>{" "}
        <button onClick={handleBadClick}>Bad</button>
        <Statitistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
};

export default App;
