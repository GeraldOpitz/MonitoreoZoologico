import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "@/styles/formularioEstilo.css";

const FormularioActualizar = ({ animal, setAnimalActualizar }) => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(animal.tipoAnimal.toLowerCase());
  const [nombre, setNombre] = useState(animal.nombre);
  const [edadAnios, setEdadAnios] = useState(animal.edadAnios);
  const [edadMeses, setEdadMeses] = useState(animal.edadMeses);
  const [edadDias, setEdadDias] = useState(animal.edadDias);
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
    if (!especiesPorTipo[tipoSeleccionado].includes(animal.especie)) {
      setEspecieSeleccionada(especiesPorTipo[tipoSeleccionado][0]);
    } else {
      setEspecieSeleccionada(animal.especie);
    }
  }, [tipoSeleccionado]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      alert("Por favor, ingrese un nombre para el animal.");
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

    if (edadMeses == 12 && edadDias > 1) {
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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h1>Datos a cambiar:</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <p><strong>Tipo de animal:</strong></p>
                    <p>{animal.tipoAnimal}</p>
                  </div>
                  <div className="col-md-4">
                    <p><strong>Especie:</strong></p>
                    <p>{animal.especie}</p>
                  </div>
                  <div className="col-md-4">
                    <p><strong>Nombre:</strong></p>
                    <p>{animal.nombre}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p><strong>Edad:</strong></p>
                    <p>{animal.edadAnios} años, {animal.edadMeses} meses, {animal.edadDias} días</p>
                  </div>
                  <div className="col-md-4">
                    <p><strong>Sexo:</strong></p>
                    <p>{animal.sexo}</p>
                  </div>
                  <div className="col-md-4">
                    <p><strong>Salud:</strong></p>
                    <p>{animal.salud}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>
          Tipo de animal:
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="tipoAnimal" value="terrestre" checked={tipoSeleccionado === 'terrestre'} onChange={() => setTipoSeleccionado('terrestre')} />
              Terrestre
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="tipoAnimal" value="marino" checked={tipoSeleccionado === 'marino'} onChange={() => setTipoSeleccionado('marino')} />
              Marino
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="tipoAnimal" value="aéreo" checked={tipoSeleccionado === 'aéreo'} onChange={() => setTipoSeleccionado('aéreo')} />
              Aéreo
            </label>
          </div>
        </label>
      </div>
      <div className="form-group">
        <label>
          Especie:
          <select className="form-control" value={especieSeleccionada} onChange={(e) => setEspecieSeleccionada(e.target.value)}>
            {especies.map((especie) => (
              <option key={especie} value={especie}>
                {especie}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Nombre:
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Edad:
          <div className="form-row">
            <div className="col">
              <input type="number" className="form-control" placeholder="Años" value={edadAnios} onChange={(e) => setEdadAnios(e.target.value)} />
            </div>
            <div className="col">
              <input type="number" className="form-control" placeholder="Meses" value={edadMeses} onChange={(e) => setEdadMeses(e.target.value)} />
            </div>
            <div className="col">
              <input type="number" className="form-control" placeholder="Días" value={edadDias} onChange={(e) => setEdadDias(e.target.value)} />
            </div>
          </div>
        </label>
      </div>
      <div className="form-group">
        <label>
          Sexo:
          <select className="form-control" value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="">Seleccionar</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Salud:
          <div>
            <textarea className="form-control" value={salud} onChange={(e) => setSalud(e.target.value)} />
          </div>
        </label>
      </div>
      <div className="form-group">
        <label>
          <div className="form-row">
          <div className="col"> 
          <button type="submit" className="btn btn-primary">Actualizar</button>
          </div>
          <div className="col"> 
          <button type="button" onClick={handleCancelar} className="btn btn-primary">Cancelar</button>
          </div>
          </div>
        </label>
      </div>
    </form>
  );
};

export default FormularioActualizar;
