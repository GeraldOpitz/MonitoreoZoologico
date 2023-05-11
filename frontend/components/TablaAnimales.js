import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioActualizar from './FormularioActualizar';
import "@/styles/TablaEstilo.css";

const TablaAnimales = () => {
  const [animales, setAnimales] = useState([]);
  const [animalActualizar, setAnimalActualizar] = useState(null);

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

  const handleActualizarAnimales = (animal) => {
    setAnimalActualizar(animal);
  };

  const handleCancelarActualizarAnimal = () => {
    setAnimalActualizar(null);
  };

  return (
    <>
      <table className="tabla">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Especie</th>
            <th>Nombre</th>
            <th>Años</th>
            <th>Meses</th>
            <th>Dias</th>
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
              <td>{animal.edadMeses}</td>
              <td>{animal.edadDias}</td>
              <td>{animal.sexo}</td>
              <td>{animal.salud}</td>
              <td>
                <button onClick={() => handleBorrarAnimal(animal.id)}>Borrar</button>
              </td>
              <td>
                <button onClick={() => handleActualizarAnimales(animal)}>Actualizar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {animalActualizar && (
        <FormularioActualizar
         animal={animalActualizar} 
         setAnimalActualizar={setAnimalActualizar}
         handleCancelarActualizarAnimal={handleCancelarActualizarAnimal}
         />
      )}
    </>
  );
};

export default TablaAnimales;
