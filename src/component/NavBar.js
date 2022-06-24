import "../css/style.css";
import React from "react";
import { Navbar, Form, Container, Button, Offcanvas } from "react-bootstrap";
import { FiLogIn } from "react-icons/fi";





export default function NavBar() {
    return (
        <>
            <Navbar expand="lg" variant="light" >
                <Container className="home-navbar" >
                    <Navbar.Brand className="logo" href="/cars"></Navbar.Brand>
                    <div className="me-auto">
                        <Form className="cari">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="off-canvas" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Navbar.Offcanvas id="off-canvas">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title className="title-navbar-mobile">Second Hand</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Button className="button-register" href="/register">
                                        <FiLogIn className="icon-register" />
                                        Masuk
                                    </Button>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}


