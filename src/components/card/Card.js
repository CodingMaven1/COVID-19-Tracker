import React,{Component} from "react";

import './Card.css';

class Card extends Component {
    render(){
        return(
            <div className="Card">
                <div className="Card--Heading">
                    <h1 className="Card--HeadingTitle">{this.props.title}</h1>
                    <h1 className="Card--HeadingNumber">{this.props.number}</h1>
                </div>
                <div className="Card--Body" id="Card-Scroll">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default Card;