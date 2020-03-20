import React from "react";

import './RowComponent.css';

const RowComponent = (props) => {
    let rowComponent;
    if(props.type === "cases"){
        rowComponent = <div className="Row">
                         <h1 className="heading--1 headingtall">{props.country}</h1>
                         <h1 className="heading--1 headingshort">{props.cases}</h1>
                         <h1 className="heading--1 headingshort">{props.todayCases}</h1>
                       </div>
    }
    else if(props.type === "deaths"){
        rowComponent = <div className="Row">
                         <h1 className="heading--2 headingtall">{props.country}</h1>
                         <h1 className="heading--2 headingshort">{props.deaths}</h1>
                         <h1 className="heading--2 headingshort">{props.todayDeaths}</h1>
                       </div>
    }
    else if(props.type === "recovered"){
        rowComponent = <div className="Row">
                         <h1 className="heading--3 headingtall">{props.country}</h1>
                         <h1 className="heading--3 headingshort">{props.recovered}</h1>
                       </div>
    }
    return(
        <div>
            {rowComponent}
        </div>
    )
}

export default RowComponent;