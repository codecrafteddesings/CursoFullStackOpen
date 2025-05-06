import { useState, Fragment } from "react";

export const Lista = () => {

  const [array, setArray] = useState([1, 2, 3, 4, 5]);


  return (
  <Fragment>
    <h1>Lista</h1>
    <ul>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <button onClick={() => setArray([...array, array.length + 1])}>
      Agregar
    </button>
  </Fragment>
    )
};
