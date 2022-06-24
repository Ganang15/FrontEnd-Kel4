import "../css/style.css"
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Card, Col, Row } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Gambar2 from "../image/kado.png"
import Gambar3 from "../image/lemari.png"

export default function Carousel () {
    return (
        <>
         <div className="slider">
                <OwlCarousel
                    className="owl-theme slider-items"
                    items={2}
                    autoplay={false}
                    autoplayTimeout={5000}
                    autoplayHoverPause={false}
                    center
                    loop
                    margin={10}
                    nav
                // responsive={state.responsive}
                >
                    <div className="slider-card ">
                        <Card className="card-content home-carousel">
                            <Row>
                                <Col xs={8} md={6} className="home-carousel-text">
                                   <div className="text-1">Bulan Ramadhan Banyak diskon!</div>
                                   <div className="text-2">Diskon Hingga</div>
                                   <div className="text-3">60%</div>
                                </Col>
                                <Col xs={4} md={2} className="home-carousel-1">
                                    <img src={Gambar2} alt="Kado" />
                                </Col>
                                <Col xs={6} md={4} className="home-carousel-2">
                                    <img src={Gambar3} alt="Lemari" />
                                </Col>
                                <div className="slider-card second-slide">
                                    <Card className="card-content">
                                        <Card.Img  />
                                    </Card>
                                </div>
                                <div className="slider-card third-slide">
                                    <Card className="card-content">
                                        <Card.Img  />
                                    </Card>
                                </div>
                            </Row>

                        </Card>
                    </div>
                </OwlCarousel>
            </div>
        </>
    )
}