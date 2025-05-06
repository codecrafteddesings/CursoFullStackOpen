import { useState } from "react";

export const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datos.nombre === "" || datos.apellido === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
    console.log(datos.nombre, datos.apellido);
  };

  const handleReset = () => {
    setDatos({
      nombre: "",
      apellido: "",
    });
  };

  return (
    <>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
        />{" "}
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
        />{" "}
        <button type="submit">Enviar</button>{" "}
        <button type="reset">Limpiar</button>
      </form>
      <h2>Lista de usuarios</h2>
      <ul>
        {datos.nombre && <li>{datos.nombre}</li>}
        {datos.apellido && <li>{datos.apellido}</li>}
      </ul>
    </>
  );
};
