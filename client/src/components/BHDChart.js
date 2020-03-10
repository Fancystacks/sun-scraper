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
                        label: 'Total KiloWatt Hours',
                        data: [
                            60700,
                            60300,
                            60900,
                            60200,
                            52900,
                            50832,
                            59360,
                            64201,
                            58443,
                            58500,
                            58600,
                            56700,
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
                        },
                    }}
                />

                <br></br>

            </div>
        )
    }

}

export default BHDChart;