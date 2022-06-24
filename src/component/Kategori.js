import "../css/style.css"
import React from "react";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Jam1 from "../image/jam1.png"
import Jam2 from "../image/jam2.png"



export default function Kategori() {
    return (
        <>
            <Container className="category">
                <h6 className="fw-bold">Telusuri Kategori</h6>
                <div>
                    <div className="d-flex gap-3 button-category">
                        <Button className="d-flex gap-1 px-3 button-register" variant="primary">
                            <FiSearch className="align-self-center" /> Semua
                        </Button>
                        <Button className="d-flex gap-1 px-3 button-register" variant="primary">
                            <FiSearch className="align-self-center" /> Hobi
                        </Button>
                        <Button className="d-flex gap-1 px-3 button-register" variant="primary">
                            <FiSearch className="align-self-center" /> Kendaraan
                        </Button>
                        <Button className="d-flex gap-1 px-3 button-register" variant="primary">
                            <FiSearch className="align-self-center" /> Baju
                        </Button>
                        <Button className="d-flex gap-1 px-3 button-register" variant="primary">
                            <FiSearch className="align-self-center" /> Elektronik
                        </Button>
                        <Button className="d-flex gap-1 px-3 button-register" variant="primary">
                            <FiSearch className="align-self-center" /> Kesehatan
                        </Button>
                    </div>
                    <Link to="/login" className="text-decoration-none ">
                        <Button className="d-flex gap-2 px-3 py-2 fixed-bottom button-sell mb-4 button-register">
                            <BsPlus
                                className="align-self-center "
                                style={{ fontSize: "24px" }}
                            />{" "}
                            Jual
                        </Button>
                    </Link>
                </div>
            </Container>
            <div>
                <Container>
                    <Row>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam1} alt="Jam 1" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam2} alt="Jam 2" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam1} alt="Jam 1" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam2} alt="Jam 2" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam1} alt="Jam 1" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam2} alt="Jam 2" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam1} alt="Jam 1" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam2} alt="Jam 2" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam1} alt="Jam 1" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam2} alt="Jam 2" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam1} alt="Jam 1" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="auto" className="clockWrapper">
                            <Card className="clock">
                                <Image src={Jam2} alt="Jam 2" className="clocks" />
                                <div className="p-2 m-2 text-dark">
                                    <Card.Title>Jam Tangan Cassio</Card.Title>
                                    <Card.Text>
                                        Accesories
                                    </Card.Text>
                                    <Card.Text>Rp. 250.000</Card.Text>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}