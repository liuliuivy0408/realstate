import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
import ImgSlide from "./ImgSlide";
import $ from "../common/js/responsiveslides.min.js";
import logo from "../common/images/logo.png";
const images = require.context('../common/images', true);

class Slide extends Component {
	
	render() {
		const name='banner';
		const name1='banner1';
		const name2='banner2';
		return (
			<div className="slider">
				<div className="callbacks_container">
					<ul className="rslides" id="slider">
						<ImgSlide  name={name}/>
						<ImgSlide  name={name1}/>
						<ImgSlide name={name2}/>
					</ul>
				</div>
			</div>
		);
	}
	componentDidMount() {
        $(function () {
            $("#slider").responsiveSlides({
                auto: true,
                nav: true,
                speed: 500,
                namespace: "callbacks",
                pager: true,
            });
        });
    }

	
}

export default Slide;