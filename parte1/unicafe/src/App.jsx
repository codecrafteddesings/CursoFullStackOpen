const Hello = (props) => {
  const bornYear = () => {
    const yeatNow = new Date().getFullYear()
    return yeatNow - props.age;
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>
        Hello you are probably born in  {bornYear()} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maria" age={20 + 5} />
      <Hello name={name} age={age} />
    </>
  );
};

export default App;
