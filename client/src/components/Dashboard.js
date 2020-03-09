import React, { Component } from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import BHDChart from '../components/BHDChart';
import PV from '../components/PV';
import BHPVwatts from '../components/BHPVwatts';

class Dashboard extends Component {
    
    render() {
        return (
            <div>
                <div className="container col-sm-8 mt-5">
                    <br></br>
                        <h1 className="h3 mb-3 font-weight-normal text-center">Your Charts</h1>
                        <div className="row">
                            
                        </div>
                </div>
                <BHDChart />
                <BHPVwatts />
                <PV />
            </div>
        )
    }
}

export default Dashboard;