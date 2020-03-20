import React,{ Component } from "react";
import Chart from "react-google-charts";

import Card from '../../components/card/Card';
import RowComponent from '../../components/rowComponent/RowComponent';
import './Main.css';

class Main extends Component {

    state = {
        worldData : [],
        countryData : [],
        datachart : [["Country","Cases","Deaths"]],
        inputvalue: ''
    }

    componentDidMount(){
        Promise.all([fetch('https://coronavirus-19-api.herokuapp.com/all'), fetch('https://coronavirus-19-api.herokuapp.com/countries') ])
        .then(([res1,res2]) => {
            return Promise.all([res1.json(), res2.json()])
        })
        .then(([res1,res2]) => {
            let stats = []
            let datachart = this.state.datachart
            for(let i in res1){
                stats.push({
                    id : i,
                    number : res1[i]
                })
            }
            for(let j in res2){
                datachart.push([
                    res2[j].country, res2[j].cases, res2[j].deaths
                ])
            }
            this.setState({ worldData : stats, countryData : res2, datachart : datachart})
        })
    }

    onChangeHandler = (event) => {
        let value;
        value = event.target.value;
        this.setState({inputvalue:value})
    }

    render(){
        console.log(this.state);

        const countryData = this.state.countryData;
        const search = this.state.inputvalue;
        
        const filteredCountry = countryData.filter(country => country.country.toLowerCase().includes(search.toLowerCase()));

        return(
            <div className="Main">
                <div className="Main--LeftDiv">
                    <div className="Main--LeftDivSearch">
                        <h1 className="Main--LeftDivSearchTitle">COVID-19 Live Tracker</h1>
                        <input className="Main--LeftDivSearchInput" type="search" placeholder="Search Country" 
                                value={this.state.inputvalue} onChange={event => this.onChangeHandler(event)} />
                    </div>
                    <div className="Main--LeftDivTables">
                        {
                            this.state.worldData.map((element,index) => {
                                return(
                                    <Card key={index} title={element.id}  number={element.number}>
                                    {   
                                        filteredCountry.map((ele,index) => {
                                            return(
                                                <RowComponent 
                                                    key={index}
                                                    country={ele.country} 
                                                    cases={ele.cases} 
                                                    todayCases={ele.todayCases} 
                                                    deaths={ele.deaths} 
                                                    todayDeaths={ele.todayDeaths}
                                                    recovered={ele.recovered} 
                                                    type={element.id}/>
                                            )
                                        })  
                                    }
                                    </Card>
                                )
                            })

                        }
                    </div>
                </div>
                <div className="Main--RightDiv">
                    <div className="Main--RightDivChart">
                        <h1 className="Main--RightDivChartTitle">World Map with Hotspots</h1>
                        <Chart
                            width={'700px'}
                            height={'500px'}
                            chartType="GeoChart"
                            data={this.state.datachart}
                            var options={{
                                colorAxis: {colors: ['#FF9999', '#FF5959', '#FF3232']},
                                backgroundColor: "#0f0f1d"
                            }}
                            mapsApiKey="AIzaSyB1PdGk5hG5ugltxvtfF96VTIYL0MVmQaw"
                            rootProps={{ 'data-testid': '1' }}
                            />
                    </div>
                    <div className="Main--RightDivNews">
                        <h1 className="Main--RightDivChartTitle">News on COVID-19</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;