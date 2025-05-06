import React, { useState } from 'react'

export const Contador = () => {
    const [contador, setContador] = useState(0)
    const aumentat = () => setContador (contador + 1)
    const disminuir = () => setContador (contador - 1)
    const reset = () => setContador (0)
   
  return (
    <div>
        <h1>Contador</h1>
        <p>{contador}</p>
        <button onClick={aumentat}>+</button>{" "}
        <button onClick={disminuir}>-</button>{" "}
        <button onClick={reset}>0</button>
    </div>
  )
}
