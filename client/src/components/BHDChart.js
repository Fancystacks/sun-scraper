import React, { Component } from "react";
import { Bar, Line, Pie, Radar, Doughnut } from 'react-chartjs-2';


class BHDChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
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
                            text: 'BlackHills Data (Raw)',
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


export default BHDChart;