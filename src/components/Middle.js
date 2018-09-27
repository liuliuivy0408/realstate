import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from '../common/js/easyResponsiveTabs.js';
import { addHousing } from '../actions/housings';
import HousingBox from './HousingBox';

import housings from "../common/data/housings";

import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";


const images = require.context('../common/images', true);

class Middle extends Component {
    render() {
        const { housings } = this.props;

        return (
            <div className="content_bottom">
                <div className="col-md-7">
                    <div className="sap_tabs">
                        <div id="horizontalTab" style={{ display: "block", width: "100%", margin: "0px" }}>
                            <div className="tab_grid">
                                <ul className="resp-tabs-list">
                                    <li className="resp-tab-item" aria-controls="tab_item-0" role="tab">
                                        <span>Apartment</span>
                                    </li>
                                    <li className="resp-tab-item" aria-controls="tab_item-1" role="tab">
                                        <span>Resort</span>
                                    </li>
                                    <li className="resp-tab-item" aria-controls="tab_item-2" role="tab">
                                        <span>Summer house</span>
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                            <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
                                <ul className="tab_img tab_1">
                                    {/*housings.map((housing, ind) => (
                                        <li className={ind === housings.length-1 ? "last" : ""}>
                                            <HousingBox {...housing} />
                                        </li>
                                    ))*/
                                        ([1, 2, 3]).map(ind => {
                                            return (<li className={ind === 3 ? "last" : ""}>
                                                <HousingBox {...housings[ind - 1]} />
                                            </li>)
                                        })

                                    }
                                    <div className="clearfix"></div>
                                </ul>
                                <ul className="tab_img">
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic4" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;650</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
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
                                    </li>
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic5" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;450</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
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
                                    </li>
                                    <li className="last">
                                        <div className="client_box1">
                                            <img src={images("./" + "pic6" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;500</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
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
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                            <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-1">

                                <ul className="tab_img">
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic4" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;650</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
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
                                    </li>
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic5" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;450</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
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
                                    </li>
                                    <li className="last">
                                        <div className="client_box1">
                                            <img src={images("./" + "pic6" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;500</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
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
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                            <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-2">
                                <ul className="tab_img">
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic5" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;450</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
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
                                    </li>
                                    <li className="last">
                                        <div className="client_box1">
                                            <img src={images("./" + "pic6" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;500</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
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
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        $('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion           
            width: 'auto', //auto or any width like 600px
            fit: true   // 100% fit in a container
        });
        $.get("https://fierce-ravine-69937.herokuapp.com/housings", ({ housings }) => {
            housings.forEach(housing => {
                this.props.addHousing({ ...housing });
            })
        });
        /*
        setTimeout(() => {
            housings.forEach(housing => {
                this.props.addHousing({ ...housing });
            })
        }, 3000);*/
    }
}

const mapStateToProps = state => ({
    housings: state.housings
})

const mapDispatchToProps = dispatch => ({
    addHousing: housing => {
        dispatch(addHousing(housing));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Middle)