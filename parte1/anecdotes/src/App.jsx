import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState({
    0: 0,
    1: 3,
    2: 4,
    3: 2,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const handleVote = () => {
    const newVotes = { ...votes };
    newVotes[selected] += 1;
    setVotes(newVotes);
    console.log("Gracias por su voto!");
  };

  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const mostVotedIndex = Object.keys(votes).find(
      (key) => votes[key] === maxVotes
    );
    return { anecdote: anecdotes[mostVotedIndex], votes: maxVotes };
  };

  const mostVoted = getMostVotedAnecdote();

  return (
    <>
      <div>
        <h1>{anecdotes[selected]}</h1>
        <br />
        <p> Has {votes[selected]} votes</p>
        <button onClick={handleVote}>Vote</button>{" "}
        <button
          onClick={() =>
            setSelected(Math.floor(Math.random() * anecdotes.length))
          }
        >
          Next anecdote
        </button>
        
        <h2>Anecdote with most votes</h2>
        <p>
          {mostVoted.anecdote} has {mostVoted.votes} votes
        </p>
      </div>
    </>
  );
};

export default App;
