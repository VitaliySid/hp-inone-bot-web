import React, { useState } from 'react';
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'

const Header = () => {
    const { user, onClose } = useTelegram();
    let username = user ? `${user.first_name} ${user.last_name}` : 'Гость'
    const [show, setShow] = useState(false);
    const toggleOffcanvas = () =>{
        setShow((show) => !show);
      };
    
    return (
        <Navbar expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <p>{username}</p>
                </Navbar.Brand>
                <Navbar.Toggle onClick={toggleOffcanvas} aria-controls={`offcanvasNavbar-expand-${false}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${false}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                    placement="end"
                    show={show}
                    onHide={toggleOffcanvas}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                            InOne-Dev
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link onClick={toggleOffcanvas} to='/'>События</Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;