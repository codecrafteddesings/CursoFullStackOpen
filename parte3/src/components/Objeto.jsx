import React from 'react'

export const Objeto = () => {
    const objeto =[{
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid"
    }]
  return (
    <div>
         {objeto[0].nombre}
         
        
    </div>
  )
}
