import "../css/style.css";
import React, { useRef, useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Regis from "../image/regis.png"


const styleLabel = {
    borderRadius: '10px',
};

const styleLink = {
    textDecoration: 'none',
    color: '#7126B5',
    fontWeight: 'bold',
};

export default function Register() {
    return (
        <>
            <Row>
                <Col className="register-left">
                    <img src={Regis} alt="Regis"/>
                </Col>
                <Col className="register-right">
                    <h3 className="mb-3">Daftar</h3>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nama Lengkap"
                                style={styleLabel}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Contoh: johndee@gmail.com"
                                style={styleLabel}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Masukkan Password"
                                style={styleLabel}
                            />
                        </Form.Group>
                        <Button className="w-100" type="submit" style={styleLabel}>
                            Daftar
                        </Button>
                        <p className="m-4 text-center">
                            Sudah punya akun? <Link style={styleLink} to="/login">Masuk di sini</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </>
    );
}