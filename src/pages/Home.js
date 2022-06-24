import "../css/style.css"
import React from "react";
import NavBar from "../component/NavBar";
import Carousel from "../component/Carousel";
import OwlCarousel from "react-owl-carousel";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Gambar2 from "../image/kado.png"
import Gambar3 from "../image/lemari.png"
import Kategori from "../component/Kategori";




function Home() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            
           <div>
            <Carousel />
           </div>
            
            <div>
                <Kategori />
            </div>
        </>
    )
}

export default Home;