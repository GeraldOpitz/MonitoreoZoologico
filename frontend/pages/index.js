import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from "@/components/Formulario";
import TablaAnimales from "@/components/TablaAnimales";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Importamos los componentes de Bootstrap que queremos usar
import "@/styles/backg.css";


const Index = () => {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    const getAnimales = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/animales');
        setAnimales(response.data);
      } catch (error) {
        console.log("Ha ocurrido un error");
      }
    };

    getAnimales();
  }, []);

  return (
    <div className="page-container">
    <Container className="fondo"> {/* Contenedor principal de Bootstrap */}
      <Row>
        <Col>
          <h1>Agregar nuevo animal:</h1>
          <Formulario />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Lista de animales:</h1>
          <TablaAnimales animales={animales}/>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Index;