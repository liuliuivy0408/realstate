import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
const images = require.context('../common/images', true);

class WantToSell extends Component {
    render() {
        return (
            <div class="container">
                <div class="grid_4">
                    <div class="col-md-7 grid_6">
                        <h3>
                            Want to sell
						<br /> your real estate?
					</h3>
                    </div>
                    <div class="col-md-5 grid_5">
                        <div class="banner2">
                            <a class="btn2" href="#">click here</a>
                            <h3>
                                FOR A FREE
							<br /> APPRAISAL
						</h3>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        );
    }

}
export default WantToSell;