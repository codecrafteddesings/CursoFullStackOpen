const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

   // Desestructuración
   const { name, parts } = course;

  return (
    <>
      <h1>{name}</h1>
      <div>
        {parts.map((part) => (
          <p key={part.name}>
            {part.name} {part.exercises}
          </p>
        ))}
      </div>
    </>
  );
};

export default App;
