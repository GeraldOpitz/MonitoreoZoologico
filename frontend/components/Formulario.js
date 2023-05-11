import React, { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [tipoAnimal, setTipoAnimal] = useState('');
  const [especie, setEspecie] = useState('');
  const [nombre, setNombre] = useState('');
  const [edadAnios, setEdadAnios] = useState('');
  const [sexo, setSexo] = useState('');
  const [salud, setSalud] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/animales', {
        tipoAnimal,
        especie,
        nombre,
        edadAnios,
        sexo,
        salud,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;
