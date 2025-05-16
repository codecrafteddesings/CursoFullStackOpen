import React from "react";

export const Objeto = () => {
  const datos = [
    { name: "Juan",
    edad: 25,
    telefono: 1234567892,
    correo: "juan@gmail.com"
   },
    {
      name: "Pedro",
      edad: 30,
      telefono: 1234567891,
      correo: "pedro@gmail.com",
    },
    {
      name: "Maria",
      edad: 28,
      telefono: 1234567890,
      correo: "maria@gmail.com",
    },
  ];
  return (
    <div>
      <p>
        {datos[0].name}
        {datos[0].edad}
        {datos[0].telefono}
        {datos[0].correo}
      </p>
      <br />
      <p>
        {datos[1].name}
        {datos[1].edad}
        {datos[1].correo}
      </p>
      <br />
      <p>
        {datos[2].name}
        {datos[2].edad}
        {datos[2].telefono}
        {datos[2].correo}
      </p>
      <br />
    </div>
  );
};
