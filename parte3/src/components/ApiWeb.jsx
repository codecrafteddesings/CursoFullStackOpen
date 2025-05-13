import React from "react";

export const ApiWeb = () => {
  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    //console.log("useEffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      console.log(users);
      setEquipo(users);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return (
    <div>
      <h1>ApiWeb</h1>
      <ul>
        {equipo.map((items) => (
          <li key={items.id}>{items.name} - {items.username} - {items.email}</li>
        ))}
      </ul>
    </div>
  );
};
