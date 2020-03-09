import React, { Component } from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';


class BHPVwatts extends Component {
    
    componentDidMount() {
        const getStorage = () => {
            var current_monthly = localStorage.getItem("ac_monthly")
            var newCurrent = JSON.parse(current_monthly)
            var newChartData = { ...this.state.chartData}
            newChartData.datasets[1].data = newCurrent;
            this.setState({
                ac_monthly: newCurrent,
                chartData: newChartData
            })
            getStorage();
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            ac_monthly: '',
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Black Hills AC Monthly',
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
                            'brown',
                            'brown',
                            'brown',
                            'brown',
                            'brown',
                            'brown',
                            'brown',
                            'brown',
                            'brown',
                            'brown',
                            'brown',
                            'brown'
                        ]
                    },

                    {
                        label: 'PV Watts AC Monthly',
                        data: [
                            27282,
                            26691,
                            33600,
                            32813,
                            34249,
                            32405,
                            31773,
                            32641,
                            32630,
                            31281,
                            27187,
                            26635
                        ],
                        backgroundColor: [
                            'green',
                            'green',
                            'green',
                            'green',
                            'green',
                            'green',
                            'green',
                            'green',
                            'green',
                            'green',
                            'green',
                            'green'
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
                <Bar
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
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />

                <br></br>

            </div>
        )
    }



}


export default BHPVwatts;