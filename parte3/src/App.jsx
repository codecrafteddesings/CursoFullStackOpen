import { JavaScritp } from "./components/JavaScritp";
import { Algo } from "./components/Algo";
import { Hello } from "./components/Hello";

const App = () => {
  const course = {
    name: "Course Information",
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

  const nombre = "Maria";
  const age = 7;

  console.log(course.parts);

  return (
    <div>
      <h1>{course.name}</h1>

      <p>
        {course.parts[0].name} {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p>
      <p>
        Number of exercises{" "}
        {course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises}
      </p>
      <JavaScritp color="red" info="Hola soy un Props" />
      <JavaScritp
        color="green"
        info="La mejor forma de ir rapido es hacer las cosas bien y despacio"
      />
      <JavaScritp
        color="gray"
        info="Por eso cuando no entiendo algo vuelvo atras para intentarlo nuevamente para entenderlo"
      />
      <JavaScritp
        color="blue"
        info="En javaScritp se llaman parametros. Pero en react se llaman parametros"
      />
      <Algo color="orange" masage="React es la mejor libreria de JavaScritp" />

      <Hello nombre={'Joel'} age={5+3}/>
      <Hello nombre={nombre} age={age} />
      
    </div>
  );
};
export default App;
