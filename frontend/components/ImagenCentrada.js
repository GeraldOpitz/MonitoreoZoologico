import React from 'react';
import Image from 'next/image';
import { Button, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const ImagenCentrada = () => {
    return (
        <div >
            <Container className="d-flex justify-content-center align-items-center vh-100 flex-column">
                <Image
                    src="/images/Bienvenido.png"
                    alt="Imagen centrada"
                    width={1000}
                    height={300}
                />
                    <Link href="/"><Button variant="primary" size="lg" className="mt-3 border w-100 mx-auto" style={{ fontSize: '2.5rem' }}>
                        Ingresar
                    </Button>
                    </Link>
            </Container>
        </div>

    );
};

export default ImagenCentrada;
