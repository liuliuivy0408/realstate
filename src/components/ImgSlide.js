import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
import SmartDetails from "./SmartDetails";
import $ from "../common/js/responsiveslides.min.js";
const images = require.context('../common/images', true);

class ImgSlide extends Component {
    constructor(props){
        super(props);
    }
    render() {
       
        return (
            <li><img src={images("./" + this.props.name + ".jpg")} className="img-responsive" alt="" />
                <div className="banner_desc">
                    <div className="container">
                        <h1>Est notare quam littera gothica, quam nunc.</h1>
                        <h2>At wisi enim ad minim veniam, quis nostrud.</h2>
                    </div>
                    <SmartDetails />
                </div>
            </li>

        )
    }
   
}

export default ImgSlide;