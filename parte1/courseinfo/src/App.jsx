const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ parte1 }) => {
  return <p>{parte1}</p>;
};

const Total = ({ exercises1 }) => {
  return <p>{exercises1}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;

  return (
    <>
      <Header course={course} />
      <Content parte1={part1} />
      <Total exercises1={exercises1} />
    </>
  );
};

export default App;
