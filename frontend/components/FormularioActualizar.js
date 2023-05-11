import React, { useState } from 'react';
import axios from 'axios';

const FormularioActualizar = ({ animal, setAnimalActualizar }) => {
  const [tipoAnimal, setTipoAnimal] = useState(animal.tipoAnimal);
  const [especie, setEspecie] = useState(animal.especie);
  const [nombre, setNombre] = useState(animal.nombre);
  const [edadAnios, setEdadAnios] = useState(animal.edadAnios);
  const [sexo, setSexo] = useState(animal.sexo);
  const [salud, setSalud] = useState(animal.salud);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedAnimal = { tipoAnimal, especie, nombre, edadAnios, sexo, salud };
      await axios.put(`http://localhost:8080/api/animales/${animal.id}`, updatedAnimal);
      setAnimalActualizar(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelar = () => {
    setAnimalActualizar(null);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo de animal:
        <input type="text" value={tipoAnimal} onChange={(e) => setTipoAnimal(e.target.value)} />
      </label>
      <label>
        Especie:
        <input type="text" value={especie} onChange={(e) => setEspecie(e.target.value)} />
      </label>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Edad en años:
        <input type="number" value={edadAnios} onChange={(e) => setEdadAnios(e.target.value)} />
      </label>
      <label>
        Sexo:
        <input type="text" value={sexo} onChange={(e) => setSexo(e.target.value)} />
      </label>
      <label>
        Salud:
        <input type="text" value={salud} onChange={(e) => setSalud(e.target.value)} />
      </label>
      <button type="submit">Actualizar</button>
      <button type="button" onClick={handleCancelar}>Cancelar</button>
    </form>
  );
};

export default FormularioActualizar;
