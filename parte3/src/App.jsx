const App = () => {
  const course = "Half Stack aplication developen! ";

  const parte1 = "Fundamentals of React";
  const exercises1 = 10;

  const parte2 = "Using props to pass data";
  const exercises2 = 7;

  const parte3 = "State of a component";
  const exercises3 = 14;

  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  };

  const Part = ({ name, exercises }) => {
    return (
      <p>
        {name} {exercises}
      </p>
    );
  };

  const Content = () => {
    return (
      <div>
        <Part name={parte1} exercises={exercises1} />
        <Part name={parte2} exercises={exercises2} />
        <Part name={parte3} exercises={exercises3} />
      </div>
    );
  };

  const Total = () => {
    return (
      <p>
        Total exersices: {exercises1} + {exercises2} + {exercises3}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
};

export default App;
