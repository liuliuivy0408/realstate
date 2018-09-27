import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";

class NewsLetter extends Component {
	render() {
		return (

			<div className="grid_7">
				<div className="col-md-4 box_4">
					<h4>Receive our Newsletter</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliq.</p>
					<div className="search">
						<form>
							<input type="text" value="" />
							<input type="submit" value="Subscribe" />
						</form>
					</div>
				</div>
				<div className="col-md-4">
					<address className="footer-addr">
						totam rem aperiam,
						<br /> voluptatum deleniti , USA
						<br /> E-MAIL:
						<a href="#">MAIL@DEMOLINK.ORG</a>

						<div className="phone">
							<span>(500)</span> 1254 6487
						</div>
					</address>
				</div>
				<div className="col-md-2">
					<ul className="list_2">
						<li>
							<a href="#">1st &amp; 2nd Mortgages</a>
						</li>
						<li>
							<a href="#">Construction Loans</a>
						</li>
						<li>
							<a href="#">Fractional Ownerships</a>
						</li>
						<li>
							<a href="#">Home Refinancing</a>
						</li>
						<li>
							<a href="#">Home Equity Lines</a>
						</li>
					</ul>
				</div>
				<div className="col-md-2">
					<ul className="list_2">
						<li>
							<a href="#">1st &amp; 2nd Mortgages</a>
						</li>
						<li>
							<a href="#">Construction Loans</a>
						</li>
						<li>
							<a href="#">Fractional Ownerships</a>
						</li>
						<li>
							<a href="#">Home Refinancing</a>
						</li>
						<li>
							<a href="#">Home Equity Lines</a>
						</li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		)
	}
}

export default NewsLetter;