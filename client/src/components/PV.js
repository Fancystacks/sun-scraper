import React, { Component } from "react";
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';

class PVwatts extends Component {
        
    componentDidMount() {
        const getStorage = () => {
            var current_monthly = localStorage.getItem("ac_monthly")
            var newCurrent = JSON.parse(current_monthly)
            var newChartData = { ...this.state.chartData}
            newChartData.datasets[0].data = newCurrent;
            this.setState({
                ac_monthly: newCurrent,
                chartData: newChartData 
            })
        }
        getStorage();
    }

    constructor(props) {
        super(props);
        this.state = {
            ac_monthly: '',
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'AC Monthly',
                        data: [],
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
                            'brown',
                            'magenta'
                        ]
                    }, 
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
        // console.log(this.state.ac_monthly[0])
        // console.log(this.state.chartData.datasets[0].data)
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
                            text: 'PVWatts (Raw)',
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

export default PVwatts;