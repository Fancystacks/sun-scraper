import React, { Component } from "react";
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';


class PVwatts extends Component {
        
    state = {
        ac_monthly: ''
    }

    componentDidMount() {
        const getStorage = () => {
            var current_monthly = localStorage.getItem("ac_monthly")
            var newCurrent = JSON.parse(current_monthly)
            this.setState({
                ac_monthly: newCurrent
            })
        }
        getStorage();
    }

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'AC Monthly',
                        data: this.state.ac_monthly,
                        

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
        console.log(this.state.ac_monthly[0])
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
                        }
                    }}
                />

                <br></br>

            </div>
        )
    }



}


export default PVwatts;