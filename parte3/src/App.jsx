const App = () => {
  const course = "Half Stack aplication developen! ";

  const parte1 = "Fundamentals of React";

  const exercises1 = 10;

  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  };

  const Content = ({ parte1 }) => {
    return <p>{parte1}</p>;
  };

  const Total = ({ exercises1 }) => {
    return <p>{exercises1}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content parte1={parte1} />
      <Total exercises1={exercises1} />
    </div>
  );
};

export default App;
