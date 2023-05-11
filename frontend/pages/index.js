import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from "@/components/Formulario";
import TablaAnimales from "@/components/TablaAnimales";

const Index = () => {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    const getAnimales = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/animales');
      setAnimales(response.data);
    } catch (error){
      console.log("Ha ocurrido un error");
    }
  };
  

  
  getAnimales();
}, []);
  
  return (
    <div>
      <h1>Agregar nuevo animal:</h1>
      <Formulario />
      <h1>Lista de animales</h1>
      <TablaAnimales animales={animales}/>
    </div>
  );
};

export default Index;