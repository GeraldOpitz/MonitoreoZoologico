import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TablaAnimales = () => {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    const getAnimales = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/animales');
        setAnimales(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAnimales();
  }, [animales]);

  const handleBorrarAnimal = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/animales/${id}`);
      setAnimales(animales.filter((animal) => animal.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tipo de animal</th>
          <th>Especie</th>
          <th>Nombre</th>
          <th>Edad en años</th>
          <th>Sexo</th>
          <th>Salud</th>
          <th>Borrar</th>
          <th>Actualizar</th>
        </tr>
      </thead>
      <tbody>
        {animales.map((animal) => (
          <tr key={animal.id}>
            <td>{animal.tipoAnimal}</td>
            <td>{animal.especie}</td>
            <td>{animal.nombre}</td>
            <td>{animal.edadAnios}</td>
            <td>{animal.sexo}</td>
            <td>{animal.salud}</td>
            <td>
              <button onClick={() => handleBorrarAnimal(animal.id)}>Borrar</button>
            </td>
            <td>
              <button onClick={() => {}}>Actualizar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaAnimales;
