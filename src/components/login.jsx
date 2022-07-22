import { React, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "../css/login.css";
import imgLogin from "../assets/images/imageLogin.jpg";

function Login() {
  const navigate = useNavigate();

	const emailField = useRef("");
	const passwordField = useRef("");

	const [errorResponse, setErrorResponse] = useState({
		isError: false,
		message: "",
	});

	const onLogin = async (e) => {
		e.preventDefault();

		try {
			const userToLoginPayload = {
				email: emailField.current.value,
				password: passwordField.current.value,
			};

			const loginRequest = await axios.post(
				"http://localhost:2000/v1/auth/login",
				userToLoginPayload
			);

			const loginResponse = loginRequest.data;

			if (loginResponse.status) {
				localStorage.setItem("token", loginResponse.data.token);

				navigate("/");
			}
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
        <Col className="pe-0 ">
          <img src={imgLogin} className="w-100" />
        </Col>
        <Col className="ps-0">
					<div className="center">
						<Form onSubmit={onLogin}>
							<h1 className="mb-3">Masuk</h1>
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
								Masuk
							</Button>
							<p className="m-4 text-center">
								Belum punya akun?{" "}
								<Link
									to="/register"
									className="text-decoration-none"
									style={{ color: "#7126B5" }}
								>
									Daftar di sini
								</Link>
							</p>
						</Form>
					</div>
				</Col>
      </Row>
    </Container>
  );
}

export default Login;
