import React from 'react';
import ImgSlide from './ImgSlide';
const images = require.context('../common/images', true);

const AgentBox = props => {
	const {
		name = 'Loading',
		phoneNumber = 'Loading',
		mail = 'Loading',
		img = "",
	} = props || {};
	return (
		<div>
			<ul className="blog-list3 list_1">
				<li className="blog-list3-img">
					{img === ""
						? <div style={{ maxWidth: "100%", height: "auto" }}> Loading... </div>
						: <img src={images("./" + img + ".jpg")} className="img-responsive" alt="" />
					}
				</li>
				<li className="blog-list3-desc">
					<h4>
						<a href="#">{name}</a>
					</h4>
					<ul className="admin_desc">
						<li className="list_top">
							<i className="fa fa-phone-square ph"> </i>
							<p className="m_2">{phoneNumber}</p>
						</li>
						<div className="clearfix"> </div>
						<li className="list_top">
							<i className="fa fa-envelope ph"> </i>
							<p className="m_2">
								<a href="malito:mail@demolink.org">{mail}</a>
							</p>
						</li>
						<div className="clearfix"> </div>
					</ul>
				</li>
				<div className="clearfix"> </div>
			</ul>
		</div>
	)

}
export default AgentBox;