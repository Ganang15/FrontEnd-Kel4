import React from "react";
import { Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import imgBanner from "../assets/images/imgBanner.png";
import "../css/carousel.css"

// const responsive = {
// 	0: {
// 		items: 1,
// 		stagePadding: 60,
// 	},
// 	600: {
// 		items: 1,
// 		stagePadding: 100,
// 	},
// 	1000: {
// 		items: 1,
// 		stagePadding: 200,
// 	},
// 	1200: {
// 		items: 1,
// 		stagePadding: 250,
// 	},
// 	1400: {
// 		items: 1,
// 		stagePadding: 300,
// 	},
// 	1600: {
// 		items: 1,
// 		stagePadding: 350,
// 	},
// 	1800: {
// 		items: 1,
// 		stagePadding: 400,
// 	},
// };

function carousel() {
	return (
		<>
			{/* carousel */}
			<OwlCarousel
				items={1}
				className="owl-theme mt-5"
				center
				autoplay={true}
				stagePadding={200}
				loop={true}
				margin= {5}
				lazyLoad={true}
				dots={false}
				// responsive={responsive}
			>
				<div className="item">
					<div className="">
					<img src={imgBanner} className="radius-large" alt="Foto produk" />
					</div>
				</div>
				<div className="item">
					<div className="">
						<img src={imgBanner} className="radius-large"  alt="Foto produk" />
					</div>
				</div>
				<div className="item">
					<div className="">
						<img src={imgBanner} className="radius-large"  alt="Foto produk" />
					</div>
				</div>
			</OwlCarousel>
			{/* carousel end */}
		</>
	);
}

export default carousel;
