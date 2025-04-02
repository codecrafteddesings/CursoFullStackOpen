import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good, neutral, bad);
  // guarda el total de clics en una sola variable
  const total = good + neutral + bad;
  // guarda el porcentaje de buenos clics en una sola variable
  const positive = (good / total) * 100;
  // guarda el porcentaje de malos clics en una sola variable
  const negative = (bad / total) * 100;
  // guarda el porcentaje de neutros clics en una sola variable
  const neutralPercentage = (neutral / total) * 100;

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
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positive} %</p>
        <p>Negative: {negative} %</p>
        <p>Neutral: {neutralPercentage} %</p>
      </div>
    </>
  );
};

export default App;
