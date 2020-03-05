import React, { Component } from 'react';

class Carbon extends Component {
    render(){
        return (
            <div className="carbon">
                <div className="row">
                    <div className="container mt-5">
                        <div className="card bg-light">
                            <div className="card-body mb-3">
                                <h2 className="card-title text-center">Reduce Your Footprint</h2>
                                <p className="card-text text-center">Based on your information, the solar energy system you wish to install would reduce your emission factor by <strong className="bold">235</strong> Metric Tons of CO<sub>2</sub> / year. Below are some carbon equivalencies according to your data. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card bg-light col-sm m-3">
                                <div className="card-body">
                                    <h5 className="card-title">Carbon sequestered by:</h5>
                                    <p className="card-text"><strong className="bold">307</strong> acres of U.S. forests in one year</p>
                                    <p className="card-text text-center"><i className="fas fa-tree fa-5x"></i> <i className="fas fa-tree fa-5x"></i></p>
                                </div>
                            </div>
                            <div className="card bg-light col-sm m-3">
                                <div className="card-body">
                                    <h5 className="card-title">Emissions avoided by:</h5>
                                    <p className="card-text"><strong className="bold">80</strong> tons of waste recycled vs landfilled</p>
                                    <p className="card-text text-center"><i className="fas fa-truck fa-5x"></i> <i className="fas fa-recycle fa-5x"></i></p>
                                </div>
                            </div>
                            <div className="card bg-light col-sm m-3">
                                <div className="card-body">
                                    <h5 className="card-title">CO<sub>2</sub> Emissions from:</h5>
                                    <p className="card-text"><strong className="bold">259,316</strong> pounds of coal burned</p>
                                    <p className="card-text text-center"><i className="fas fa-fire fa-5x"></i> <i className="fas fa-fire fa-5x"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carbon;