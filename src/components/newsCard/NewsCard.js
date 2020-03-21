import React from "react";

import './NewsCard.css';

const NewsCard = (props) => {

    return(
        <div className="NewsCard">
            <div className="NewsCard--Header">
                <img src={props.img} className="NewsCard--HeaderImg" />
                <div className="NewsCard--HeaderDetails">
                    <h1 className="NewsCard--HeaderDetailsHeading2">{props.author}</h1>
                    <a target="_blank" href={props.url} className="NewsCard--HeaderDetailsHeading2Link">Full Article</a>
                </div>
            </div>
            <div className="NewsCard--Body">
                <p className="NewsCard--BodyContent">{props.title}</p>
            </div>
        </div>
    )
}

export default NewsCard;