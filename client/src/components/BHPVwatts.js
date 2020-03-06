import React, { Component } from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';


class BHPVwatts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'AC Monthly',
                        data: [
                            25461.048828125,
                            25704.68359375,
                            31491.333984375,
                            28630.357421875,
                            29440.4140625,
                            28719.59375,
                            28692.705078125,
                            28183.94140625,
                            28403.0859375,
                            27758.98828125,
                            26095.23046875,
                            24275.607421875
                        ],
                        backgroundColor: [
                            'blue',
                            'pink',
                            'red',
                            'green',
                            'orange',
                            'blue',
                            'pink',
                            'red',
                            'green',
                            'orange',
                            'blue'
                        ]
                    },

                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072,
                            14545,
                            13453,
                            35345,
                            43534,
                            45455,
                        ],

                        

                        backgroundColor: [
                            'blue',
                            'pink',
                            'red',
                            'green',
                            'orange',
                            'blue',
                            'pink',
                            'red',
                            'green',
                            'orange',
                            'purple'
                        ]
                    }

                ]
            }
        }
        

    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'

    }

    render() {
        return (
            <div className="container">
                <br></br>
                <Line 
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'BlackHills/PVwatts (Overlay)',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

                <br></br>

            </div>
        )
    }



}


export default BHPVwatts;