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
        </tr>
      </thead>
      <tbody>
        {animales.map((animal, index) => (
          <tr key={index}>
            <td>{animal.tipoAnimal}</td>
            <td>{animal.especie}</td>
            <td>{animal.nombre}</td>
            <td>{animal.edadAnios}</td>
            <td>{animal.sexo}</td>
            <td>{animal.salud}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaAnimales;
