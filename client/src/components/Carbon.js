import React, { Component } from 'react';


class Carbon extends Component {
    
    state = {
        ac_annual: ''
    }

    componentDidMount() {
        const getStorage = () => {
            var current_annual = localStorage.getItem("ac_annual")
            this.setState({
                ac_annual: current_annual
            })
        }
        getStorage();
    }

    render(){
        
        const MTC = this.state.ac_annual * 1558.8 * 0.0004536 * 0.001

        const acres = MTC / 0.765

        const coal = MTC * 1103.4

        const waste = MTC / 2.9375
        
        return (
            <div className="carbon">
                <div className="row">
                    <div className="container mt-5">
                        <div className="card bg-light">
                            <div className="card-body mb-3">
                                <h2 className="card-title text-center">Reduce Your Footprint</h2>
                                <p className="card-text text-center">Based on your information, the solar energy system you wish to install would reduce your emission factor by <strong className="bold">{Math.round(MTC)}</strong> Metric Tons of CO<sub>2</sub> / year. Below are some carbon equivalencies according to your data. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card bg-light col-sm m-3">
                                <div className="card-body">
                                    <h5 className="card-title">Carbon sequestered by:</h5>
                                    <p className="card-text"><strong className="bold">{Math.round(acres)}</strong> acres of U.S. forests in one year</p>
                                    <p className="card-text text-center"><i className="fas fa-tree fa-5x"></i> <i className="fas fa-tree fa-5x"></i></p>
                                    <p className="card-text">In other words, the amount of CO<sub>2</sub> you are saving is comparable to the amount of oxygen produced by this many acres of forest land</p>
                                </div>
                            </div>
                            <div className="card bg-light col-sm m-3">
                                <div className="card-body">
                                    <h5 className="card-title">Emissions avoided by:</h5>
                                    <p className="card-text"><strong className="bold">{Math.round(waste)}</strong> tons of waste recycled</p>
                                    <p className="card-text text-center"><i className="fas fa-truck fa-5x"></i> <i className="fas fa-recycle fa-5x"></i></p>
                                    <p className="card-text">The energy and emissions you would create could offset this much waste from being landfilled </p>
                                </div>
                            </div>
                            <div className="card bg-light col-sm m-3">
                                <div className="card-body">
                                    <h5 className="card-title">CO<sub>2</sub> Emissions from:</h5>
                                    <p className="card-text"><strong className="bold">{Math.round(coal)}</strong> pounds of coal burned</p>
                                    <p className="card-text text-center"><i className="fas fa-fire fa-5x"></i> <i className="fas fa-fire fa-5x"></i></p>
                                    <p className="card-text">Your efficiency savings would be comparable to the emissions of burning this many pounds of coal every year in a powerplant</p>
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