import { React, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import banner from "../assets/images/login2.png";
import axios from "axios";
import "../css/register.css";

function Register() {
	const navigate = useNavigate();

	const nameField = useRef("");
	const emailField = useRef("");
	const passwordField = useRef("");

	const [errorResponse, setErrorResponse] = useState({
		isError: false,
		message: "",
	});

	const onRegister = async (e) => {
		e.preventDefault();

		try {
			const userToRegisterPayload = {
				name: nameField.current.value,
				email: emailField.current.value,
				password: passwordField.current.value,
			};

			const registerRequest = await axios.post(
				"http://localhost:2000/v1/auth/register",
				userToRegisterPayload
			);

			const registerResponse = registerRequest.data;

			if (registerResponse.status) navigate("/login");
		} catch (err) {
			console.log(err);
			const response = err.response.data;

			setErrorResponse({
				isError: true,
				message: response.message,
			});
		}
	};

	return (
		<Container fluid className="ps-0">
			<Row>
				<Col className="pe-0">
					<img src={banner} className="w-100" alt="" />
				</Col>
				<Col className="ps-0">
					<div className="center">
						<Form onSubmit={onRegister}>
							<h1 className="mb-3">Daftar</h1>
							<Form.Group className="mb-3">
								<Form.Label>Nama</Form.Label>
								<Form.Control
									type="text"
									ref={nameField}
									placeholder="Nama Lengkap"
									className="radius-primary"
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="text"
									ref={emailField}
									placeholder="Contoh: johndee@gmail.com"
									className="radius-primary"
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									ref={passwordField}
									placeholder="Masukkan Password"
									className="radius-primary"
								/>
							</Form.Group>
							{errorResponse.isError && (
								<Alert variant="danger">{errorResponse.message}</Alert>
							)}
							<Button
								className="w-100 radius-primary bg-color-secondary"
								type="submit"
							>
								Daftar
							</Button>
							<p className="m-4 text-center">
								Sudah punya akun?{" "}
								<Link
									to="/login"
									className="text-decoration-none"
									style={{ color: "#7126B5" }}
								>
									Masuk di sini
								</Link>
							</p>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Register;
