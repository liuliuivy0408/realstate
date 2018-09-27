import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
import logo from "../common/images/logo.png";

class Nav extends Component{
    render(){
        return (
        <div className="header">
          <div className="col-xs-4">
            <div className="logo">
            <a href="index.html"><img src={logo} alt=""/></a>
            </div>
          </div>
          <div className="col-xs-8 header_right">
            <span className="menu"></span>
              <div className="top-menu">
                <ul>
                  <li><a className="active scroll" href="index.html"><i className="fa fa-home"> </i>Home</a></li>
                  <li><a href="about.html"><i className="fa fa-star"> </i> About</a></li>
                  <li><a href="services.html"><i className="fa fa-thumbs-up"> </i>Services</a></li>
                  <li><a href="gallery.html"><i className="fa fa-picture-o"> </i>Gallery</a></li>
                  <li><a href="contact.html"><i className="fa fa-envelope-o"> </i>Contact</a></li>
                  <div className="clearfix"></div>
                </ul>
              </div>
              {/*<!-- script for menu -->
                <script>
                $( "span.menu" ).click(function() {
                  $( ".top-menu" ).slideToggle( "slow", function() {
                    // Animation complete.
                  });
                });
              </script>
              <!-- script for menu -->*/}
          </div>
          <div className="clearfix"> </div>
        </div>
        );
    }

 }
 export default Nav;