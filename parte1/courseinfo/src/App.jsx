/* const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({
  parte1,
  exercises1,
  parte2,
  exercises2,
  part3,
  exercises3,
}) => {
  return (
    <div>
      <Part name={parte1} exercises={exercises1} />
      <Part name={parte2} exercises={exercises2} />
      <Part name={part3} exercises={exercises3} />
    </div>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises{exercises1 + exercises2 + exercises3}</p>;
}; */

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
    name: "Fundamentals of React",
    exercises: 10,
  },
   {
    name: "Using props to pass data",
    exercises: 7,
  },
   {
    name: "State of a component",
    exercises: 14,
  },
]

  

  return (
    <>
      
      <h1>{course}</h1>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
     
    </>
  );
};

export default App;
