import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "@/styles/backg.css";
import ImagenCentrada from "@/components/ImagenCentrada";
import Link from 'next/link';


export default function Bienvenida() {
    return (
        <div className="page-container">
            <Container >
                <Row>
                    <Col>
                        <div>
                            <ImagenCentrada />
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    );
}