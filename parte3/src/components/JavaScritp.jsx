export const JavaScritp = () => {

  const course = "Course fullStack! ";
 
  console.log("Hello world!");

  const parte1 = {
    name: "Fundamentals of React",
    exercises: 10,
  }

  const parte2  = {
    name: "Using props to pass data",
    exercises: 7,

  }

  const parte3 = {
    name: "State of a component",
    exercises: 14,
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{parte1.name} {parte1.exercises}</p>
      <p>{parte2.name} {parte2.exercises}</p>
      <p>{parte3.name} {parte3.exercises}</p>
    </div>
  )
};

  
  
