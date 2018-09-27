import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
import MostPopular from "./MostPopular";
import WantToSell from "./WantToSell";
import ContentBottom from "./ContentBottom";
import NewsLetter from "./NewsLetter";
import CopyRight from "./CopyRight";

class Content extends Component{
    render(){
        return(
            <div className="content-top">
                <div className="container">
                <MostPopular/> 
                <ContentBottom/>
                <WantToSell/>
                <NewsLetter/>
                <CopyRight/>
                </div>
            </div>
        )
    }
}
export default Content;