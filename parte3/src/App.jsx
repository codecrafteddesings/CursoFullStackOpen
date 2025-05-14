import { useState } from "react";
import { Contador } from "./components/Contador";
import { Lista } from "./components/Lista";
import { Formulario } from "./components/Formulario";
import { ApiWeb } from "./components/ApiWeb";
import { MiComponente } from "./components/MiComponente";
import { Prosp } from "./components/Prosp";
import { Objeto } from "./components/Objeto";

const Display = (props) => {
  return (
    <div>
      {props.count}
    </div>
  )
}

const App = () => {
//const [count, setCount] = useState(0);

//const increaseBy = () => setCount(count + 1);
//const setToZero = () => setCount(count - 1);
//const setZero = () => setCount(0);




  return (
    <div>
      <ApiWeb />
      <MiComponente />
      <MiComponente />
      <MiComponente />
      <Prosp name="Maria" />
      <Prosp name="Jose" />
      <Prosp name="Amanda" />
      <Prosp edad="24" />
      <Prosp edad="25" />
      <Objeto />
       {/*<Formulario/> 
      <Lista  />
      <Contador />
      <Display count={count} />
      <button onClick={increaseBy}>
        plus
      </button>{" "}
      <button onClick={setToZero}>minus</button>{" "}
      <button onClick={setToZero}>-</button>{" "}
      <button onClick={setZero}>Reset</button>*/}
    </div>
  );
};
export default App;
 