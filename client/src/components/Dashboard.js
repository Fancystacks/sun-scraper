import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Boston', 'Worcester', 'Springfield', "Lowell", 'Cambridge', 'New Bedford'],
                datasets:[
                    {
                        label: 'population',
                        data:[
                        617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072
                        ],
                        backgroundColor:[
                        'blue',
                        'pink',
                        'red',
                        'green',
                        'orange'
                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="container">
                <br></br>
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{ maintainAspectRatio: false }}
                />

                <br></br>

            </div>
        )
    }
}

export default Dashboard;