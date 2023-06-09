import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "@/styles/formularioEstilo.css";



const Formulario = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('terrestre');
  const [nombre, setNombre] = useState('');
  const [edadAnios, setEdadAnios] = useState('');
  const [edadMeses, setEdadMeses] = useState('');
  const [edadDias, setEdadDias] = useState('');
  const [sexo, setSexo] = useState('');
  const [salud, setSalud] = useState('');
  const [contador, setContador] = useState(0);
  const [especieSeleccionada, setEspecieSeleccionada] = useState('');
  const [especies, setEspecies] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (id) {
      setContador(parseInt(id));
    }
  }, []);

  useEffect(() => {
    const especiesPorTipo = {
      terrestre: ["León", "Tigre", "Elefante", "Rinoceronte", "Hipopótamo", "Jirafa", "Cebra", "Gorila", "Mono", "Oso", "Lobo", "Zorro", "Ciervo", "Canguro", "Koala", "Camello", "Búfalo", "Antílope", "Hiena", "Panda rojo"],
      marino: ["Tiburón", "Ballena", "Delfín", "Pulpo", "Calamar", "Medusa", "Estrella de mar", "Cangrejo ermitaño", "Tortuga marina", "Morsa", "Foca", "Pingüino", "Pez payaso", "Cangrejo araña gigante", "Pez espada", "Pez luna", "Pez sierra", "Caballito de mar", "Anguila eléctrica", "Pulpo de anillos azules"],
      aéreo: ["Águila", "Pato", "Pingüino", "Buitre", "Halcón", "Lechuza", "Loro", "Cóndor", "Gaviota", "Pelícano", "Albatros", "Avestruz", "Cisne", "Colibrí", "Flamenco", "Pavo real", "Cigüeña", "Ganso"]
    };
    setEspecies(especiesPorTipo[tipoSeleccionado]);
    setEspecieSeleccionada(especiesPorTipo[tipoSeleccionado][0]);
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

    if (edadMeses == 12 && edadDias > 1){
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
      const response = await axios.post('http://localhost:8080/api/animales', {
        id: contador,
        tipoAnimal: tipoSeleccionado.charAt(0).toUpperCase() + tipoSeleccionado.slice(1),
        especie: especieSeleccionada,
        nombre,
        edadAnios,
        edadMeses,
        edadDias,
        sexo,
        salud,
      });
      console.log(response.data);
      setContador((prev) => prev + 1);
      localStorage.setItem('id', contador + 1);
      setTipoSeleccionado('terrestre'); // Reseteamos el tipo a terrestre
      setEspecieSeleccionada(''); // Reseteamos la especie seleccionada
      setNombre(''); // Reseteamos el nombre
      setEdadAnios(''); // Reseteamos la edad en años
      setEdadMeses(''); // Reseteamos la edad en meses
      setEdadDias(''); // Reseteamos la edad en dias
      setSexo(''); // Reseteamos el sexo seleccionado
      setSalud(''); // Reseteamos la salud
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
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
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default Formulario;
