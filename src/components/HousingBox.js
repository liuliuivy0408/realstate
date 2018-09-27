import React from 'react';
const images = require.context('../common/images', true);

const HousingBox = props => {
    const { 
        title = "Loading...",
        price = null,
        img = ""
    } = props || {};

    return (
        <div className="client_box1">
            {img === ""
                ? <div style={{ maxWidth: "100%", height: "132px" }}> Loading... </div>
                : <img src={images("./" + img + ".jpg")} className="img-responsive" alt="" />
            }
            <div className="box_type">$&nbsp;{price === null ? "Loading" : price.toString()}</div>
            <h3 className="m_1">
                <a href="single.html">{title}</a>
            </h3>
            <div className="boxed_mini_details clearfix">
                <span className="area first">
                    <strong>Garage</strong>
                    <i className="fa fa-plane icon1"></i>
                    2</span>
                <span className="status">
                    <strong>Baths</strong>
                    <i className="fa fa-retweet icon1"> </i>
                    2</span>
                <span className="bedrooms last">
                    <strong>Beds</strong>
                    <i className="fa fa-building-o icon1"></i>
                    2</span>
            </div>
        </div>
    )
}

export default HousingBox;