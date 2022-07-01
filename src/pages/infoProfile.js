import { NavbarInfo } from "../components/navbar";
import { React, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
// import "../css/infoProfile.css";

export default function infoProfile() {
	// const navigate = useNavigate();

	// const nameField = useRef("");
	// const emailField = useRef("");
	// const passwordField = useRef("");

	// const [errorResponse, setErrorResponse] = useState({
	// 	isError: false,
	// 	message: "",
	// });

	// const onRegister = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		const userToRegisterPayload = {
	// 			name: nameField.current.value,
	// 			email: emailField.current.value,
	// 			password: passwordField.current.value,
	// 		};

	// 		const registerRequest = await axios.post(
	// 			"http://localhost:2000/v1/auth/register",
	// 			userToRegisterPayload
	// 		);

	// 		const registerResponse = registerRequest.data;

	// 		if (registerResponse.status) navigate("/login");
	// 	} catch (err) {
	// 		console.log(err);
	// 		const response = err.response.data;

	// 		setErrorResponse({
	// 			isError: true,
	// 			message: response.message,
	// 		});
	// 	}
	// };

	return (
		<>
			<NavbarInfo></NavbarInfo>
			
		</>
	);
}
