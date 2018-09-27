import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
const images = require.context('../common/images', true);

class MostPopular extends Component{
    render(){
        return (
            <div>
            <h4 className="m_3">Most Popular</h4>
            <div className="grid_1">
              <div className="col-md-3 box_1">
                <a href="single.html"><img src={images("./"+"pic8"+".jpg")} className="img-responsive" alt="" /></a>
                <div className="box_2">
                  <div className="special-wrap"><div className="hot_offer"><span className="m_11">Hot Offer</span></div><div className="forclosure"><span className="m_12">Special Offer</span></div></div>
                </div>
                <div className="box_3">
                  <h3><a href="single.html">House1</a></h3>
                  <div className="boxed_mini_details clearfix">
                    <span className="area first"><strong>Garage</strong><i className="fa fa-plane icon1"> </i>
                      2</span>
                    <span className="status"><strong>Baths</strong><i className="fa fa-retweet icon1"> </i>
                      2</span>
                    <span className="bedrooms last"><strong>Beds</strong><i className="fa fa-bed"></i>
                      2</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 box_1">
                <a href="single.html"><img src={images("./"+"pic9"+".jpg")} className="img-responsive" alt="" /></a>
                <div className="box_2">
                  <div className="special-wrap"><div className="hot_offer"><span className="m_11">Hot Offer</span></div><div className="forclosure"><span className="m_12">Special Offer</span></div></div>
                </div>
                <div className="box_3">
                  <h3><a href="single.html">House2</a></h3>
                  <div className="boxed_mini_details clearfix">
                    <span className="area first"><strong>Garage</strong><i className="fa fa-plane icon1"> </i>
                      2</span>
                    <span className="status"><strong>Baths</strong><i className="fa fa-retweet icon1"> </i>
                      2</span>
                    <span className="bedrooms last"><strong>Beds</strong><i className="fa fa-building-o icon1"> </i>
                      2</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 box_1">
                <a href="single.html"><img src={images("./"+"pic10"+".jpg")} className="img-responsive" alt="" /></a>
                <div className="box_2">
                  <div className="special-wrap"><div className="hot_offer"><span className="m_11">Hot Offer</span></div><div className="forclosure"><span className="m_12">Special Offer</span></div></div>
                </div>
                <div className="box_3">
                  <h3><a href="single.html">House3</a></h3>
                  <div className="boxed_mini_details clearfix">
                    <span className="area first"><strong>Garage</strong><i className="fa fa-plane icon1"> </i>
                      2</span>
                    <span className="status"><strong>Baths</strong><i className="fa fa-retweet icon1"> </i>
                      2</span>
                    <span className="bedrooms last"><strong>Beds</strong><i className="fa fa-building-o icon1"> </i>
                      2</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 box_1">
                <a href="single.html"><img src={images("./"+"pic11"+".jpg")} className="img-responsive" alt="" /></a>
                <div className="box_2">
                  <div className="special-wrap"><div className="hot_offer"><span className="m_11">Hot Offer</span></div><div className="forclosure"><span className="m_12">Special Offer</span></div></div>
                </div>
                <div className="box_3">
                  <h3><a href="single.html">House4</a></h3>
                  <div className="boxed_mini_details clearfix">
                    <span className="area first"><strong>Garage</strong><i className="fa fa-plane icon1"> </i>
                      2</span>
                    <span className="status"><strong>Baths</strong><i className="fa fa-retweet icon1"> </i>
                      2</span>
                    <span className="bedrooms last"><strong>Beds</strong><i className="fa fa-building-o icon1"> </i>
                      2</span>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        );
    }

 }
 export default MostPopular;