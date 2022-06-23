import {Button, Container, Form, Nav, Navbar,} from "react-bootstrap";
import { FiLogIn } from "react-icons/fi";
import React from "react";
import { Link } from "react-router-dom";

export function NavbarDefault() {
	return (
			<Navbar className="box-shadow " bg="light" expand="lg">
				<Container className="py-1">
					<Navbar.Brand
						href="#"
						className="brand bg-color-primary"
					></Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Form className="d-flex">
								<Form.Control
									type="search"
									placeholder="Cari di sini ... "
									className="search radius-primary"
									aria-label="Search"
								/>
							</Form>
						</Nav>
					</Navbar.Collapse>
					<Link
						to="/login"
						>
						<Button
							className="ms-auto radius-secondary bg-color-primary border-0"
							variant="primary"
						>
							<FiLogIn className="me-1 mb-1" />
							Masuk
						</Button>
					</Link>
				</Container>
			</Navbar>
	);
};

export function NavbarInfo() {
	return (
		<Navbar className="box-shadow " bg="light" expand="lg">
			<Container className="py-1 ">
				<Navbar.Brand
					href="#"
					className="brand bg-color-primary"
				></Navbar.Brand>
				<p className="navbar-info fw-bold">Lengkapi Info Akun</p>
			</Container>
		</Navbar>
);
};

export function NavbarProduct() {
	return (
		<Navbar className="box-shadow " bg="light" expand="lg">
			<Container className="py-1 ">
				<Navbar.Brand
					href="#"
					className="brand bg-color-primary"
				></Navbar.Brand>
			</Container>
		</Navbar>
);
};
