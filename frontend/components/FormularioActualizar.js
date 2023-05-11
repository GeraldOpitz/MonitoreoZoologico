import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "@/styles/formularioEstilo.css";

const FormularioActualizar = ({ animal, setAnimalActualizar }) => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(animal.tipoAnimal.toLowerCase());
  const [nombre, setNombre] = useState(animal.nombre);
  const [edadAnios, setEdadAnios] = useState(animal.edadAnios);
  const [edadMeses, setEdadMeses] = useState('');
  const [edadDias, setEdadDias] = useState('');
  const [sexo, setSexo] = useState(animal.sexo);
  const [salud, setSalud] = useState(animal.salud);
  const [especieSeleccionada, setEspecieSeleccionada] = useState(animal.especie);
  const [especies, setEspecies] = useState([]);

  useEffect(() => {
    const especiesPorTipo = {
      terrestre: ["León", "Tigre", "Elefante", "Rinoceronte", "Hipopótamo", "Jirafa", "Cebra", "Gorila", "Mono", "Oso", "Lobo", "Zorro", "Ciervo", "Canguro", "Koala", "Camello", "Búfalo", "Antílope", "Hiena", "Panda rojo"],
      marino: ["Tiburón", "Ballena", "Delfín", "Pulpo", "Calamar", "Medusa", "Estrella de mar", "Cangrejo ermitaño", "Tortuga marina", "Morsa", "Foca", "Pingüino", "Pez payaso", "Cangrejo araña gigante", "Pez espada", "Pez luna", "Pez sierra", "Caballito de mar", "Anguila eléctrica", "Pulpo de anillos azules"],
      aéreo: ["Águila", "Pato", "Pingüino", "Buitre", "Halcón", "Lechuza", "Loro", "Cóndor", "Gaviota", "Pelícano", "Albatros", "Avestruz", "Cisne", "Colibrí", "Flamenco", "Pavo real", "Cigüeña", "Ganso"]
    };
    setEspecies(especiesPorTipo[tipoSeleccionado]);
    setEspecieSeleccionada(animal.especie);
  }, [tipoSeleccionado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sexo) {
      alert('Por favor seleccione una opción para el campo sexo.');
      return;
    }

    if (!edadAnios) {
      alert('Debe ingresar cuantos años tiene el animal');
      return;
    }

    if (edadAnios < 0) {
      alert('La edad del animal no puede ser negativa');
      return;
    }

    if (edadAnios > 255) {
      alert('Ingrese una edad valida');
      return;
    }

    if (!edadMeses) {
      alert('Debe ingresar cuantos meses tiene el animal');
      return;
    }

    if (edadMeses < 0) {
      alert('La edad del animal no puede ser negativa');
      return;
    }

    if (edadMeses > 12) {
      alert('Ingrese un mes valido');
      return;
    }

    if (!edadDias) {
      alert('Debe ingresar cuantos días tiene el animal');
      return;
    }

    if (edadDias < 0) {
      alert('La edad del animal no puede ser negativa');
      return;
    }

    if (edadDias > 30) {
      alert('Ingrese un día valido');
      return;
    }

    if (!sexo) {
      alert('Por favor seleccione una opción para el campo sexo.');
      return;
    }

    if (salud.trim() === "") {
      alert("El campo salud es requerido");
      return;
    }

    try {
      const updatedAnimal = { tipoAnimal: tipoSeleccionado.charAt(0).toUpperCase() + tipoSeleccionado.slice(1), especie: especieSeleccionada, nombre, edadAnios, edadMeses, edadDias, sexo, salud };
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
    <form onSubmit={handleSubmit} className="formulario">
      <div className="grupo">
        <label>
          Tipo de animal:
          <div className="opciones">
            <label>
              <input type="radio" name="tipoAnimal" value="terrestre" checked={tipoSeleccionado === 'terrestre'} onChange={() => setTipoSeleccionado('terrestre')} />
              Terrestre
            </label>
            <label>
              <input type="radio" name="tipoAnimal" value="marino" checked={tipoSeleccionado === 'marino'} onChange={() => setTipoSeleccionado('marino')} />
              Marino
            </label>
            <label>
              <input type="radio" name="tipoAnimal" value="aéreo" checked={tipoSeleccionado === 'aéreo'} onChange={() => setTipoSeleccionado('aéreo')} />
              Aéreo
            </label>
          </div>
        </label>
      </div>
      <div className="grupo">
        <label>
          Especie:
          <select value={especieSeleccionada} onChange={(e) => setEspecieSeleccionada(e.target.value)}>
            {especies.map((especie) => (
              <option key={especie} value={especie}>
                {especie}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grupo">
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
      </div>
      <div className="grupo">
        <label>
          Edad:
          <div className="edadInputs">
            Años:
            <input type="number" value={edadAnios} onChange={(e) => setEdadAnios(e.target.value)} />
            Meses:
            <input type="number" value={edadMeses} onChange={(e) => setEdadMeses(e.target.value)} />
            Días:
            <input type="number" value={edadDias} onChange={(e) => setEdadDias(e.target.value)} />
          </div>
        </label>
      </div>
      <div className="grupo">
        <label>
          Sexo:
          <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="">Seleccionar</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </label>
      </div>
      <div className="grupo">
        <label>
          Salud:
          <div>
            <textarea value={salud} onChange={(e) => setSalud(e.target.value)} />
          </div>
        </label>
      </div>
      <div className="botones">
      <button type="submit">Actualizar</button>
      <button type="button" onClick={handleCancelar}>Cancelar</button>
      </div>
    </form>
  );
};

export default FormularioActualizar;
