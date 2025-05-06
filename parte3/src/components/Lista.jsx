import { useState, Fragment } from "react";

export const Lista = () => {

  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const agregar = () => {
    setArray([
      ...array,
      //6 + 1
      array.length + 1
    ])
  }

  const eliminar = () => {
    setArray(
      array.filter((item, index) => {
        return index !== array.length - 1
      }),
    )
  }


  return (
  <Fragment>
    <h1>Lista</h1>
    <ul>
      {array.map((item, index) => (
        <li key={index}> - {item}</li>
      ))}
    </ul>
    <button onClick={agregar}>
      Agregar
    </button>

    <button onClick={eliminar}>
      Eliminar
    </button>
  </Fragment>
    )
};
