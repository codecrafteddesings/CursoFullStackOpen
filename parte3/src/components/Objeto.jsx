import React from "react";

export const Objeto = () => {
  const objeto = [
    { name: "Juan", edad: 25, telefono: 1234567892, correo: "juan@gmail.com" },
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
        {objeto[0].name}
        {objeto[0].edad}
        {objeto[0].telefono}
        {objeto[0].correo}
      </p>
      <br />
      <p>
        {objeto[1].name}
        {objeto[1].edad}
        {objeto[1].telefono}
        {objeto[1].correo}
      </p>
      <br />
      <p>
        {objeto[2].name}
        {objeto[2].edad}
        {objeto[2].telefono}
        {objeto[2].correo}
      </p>
      <br />
    </div>
  );
};
