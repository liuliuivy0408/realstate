import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";

class SaleRent extends Component {
	render() {
		return (
			<div className="col-md-2">
				<div className="widget">
					<div className="title">
						<h3>
							<i className="fa fa-meh-o men"> </i> For Sale</h3>
					</div>
					<ul className="real-widget">
						<li>
							<a href="#">commercial(3)</a>
						</li>
						<li>
							<a href="#">Housing(16)</a>
						</li>
						<ul>
							<li>
								<a href="#">Apartment</a>
							</li>
							<li>
								<a href="#">Summerhouse</a>
							</li>
							<li>
								<a href="#">Villa</a>
							</li>
						</ul>
					</ul>
				</div>
				<div className="widget">
					<div className="title">
						<h3>
							<i className="fa fa-meh-o men"> </i> For Rent
						</h3>
					</div>
					<ul className="real-widget">
						<li>
							<a href="#">commercial(3)</a>
						</li>
						<li>
							<a href="#">Housing(16)</a>
						</li>
						<ul>
							<li>
								<a href="#">Apartment</a>
							</li>
							<li>
								<a href="#">Summerhouse</a>
							</li>
							<li>
								<a href="#">Villa</a>
							</li>
						</ul>
					</ul>
				</div>
			</div>
		)
	}
}

export default SaleRent;