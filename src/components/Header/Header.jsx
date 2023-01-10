import React from 'react';
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <Navbar expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <p>{user && `{user.first_name} {user.last_name}`}</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${false}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">События</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;