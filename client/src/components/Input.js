import React, { Component } from "react";
import { pvWattsForm } from './UserFunctions';

class Input extends Component {
    constructor() {
        super()
        this.state = {
            street_address:'',
            city: '',
            home_state: '',
            zip_code: '',
            system_capacity:'',
            array_type: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        

        const newRequest = {
            street_address: this.state.street_address,
            city: this.state.city,
            home_state: this.state.home_state,
            zip_code: this.state.zip_code,
            system_capacity: this.state.system_capacity,
            array_type: this.state.array_type
        }

        pvWattsForm(newRequest).then(res => {
            this.props.history.push(`/dashboard`)
        })
    }


    render() {
        return (
            <div>
                <div className="container col-sm-8 mt-5">
                    <br></br>
                    <form onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Enter your details</h1>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="exampleFormControlInput1">Street Address</label>

                                <input
                                type="text"
                                className="form-control" 
                                name='street_address'
                                placeholder="1234 Example Ave"
                                value={this.state.street_address}
                                onChange={this.onChange}

                                />
                            </div>
                            
                            <div className="form-group col-sm-6">
                                <label htmlFor="exampleFormControlInput1">City</label>

                                <input
                                type="text"
                                className="form-control" 
                                name='city'
                                placeholder="Denver"
                                value={this.state.city}
                                onChange={this.onChange}

                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="exampleFormControlInput1">State</label>

                                <input
                                type="text"
                                className="form-control" 
                                name='home_state'
                                placeholder="Colorado"
                                value={this.state.home_state}
                                onChange={this.onChange}

                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="exampleFormControlInput1">Zip Code</label>

                                <input
                                type="text"
                                className="form-control" 
                                name='zip_code'
                                placeholder="80000"
                                value={this.state.zip_code}
                                onChange={this.onChange}

                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container col-sm-8">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="exampleFormControlInput1">System Capacity (kW)</label>
                            <input
                            type="text"
                            className="form-control"
                            name='system_capacity'
                            placeholder="100"
                            value={this.state.system_capacity}
                            onChange={this.onChange}
                            
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="exampleFormControlSelect1">Array Type</label>
                            <select
                            className="form-control"
                            name='array_type'
                            value={this.state.array_type}
                            onChange={this.onChange}>

                                <option>Fixed - Open Rack</option>
                                <option>Fixed - Roof Mounted</option>
                                <option>Single Axis</option>
                                <option>Single Axis - Backtracking</option>
                                <option>Dual Axis</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div className="container col-sm-8">
                    <div className="card">
                        <div className="card-body text-center">
                            Capacity reference by square footage:
                            <br></br>
                            10,000 sqft ~ 50kW system
                            <br></br>
                            25,000 sqft ~ 120kW system
                            <br></br>
                            50,000 sqft ~ 200kW system
                        </div>
                    </div>
                    <br></br>
                    <button
                    onClick={this.onSubmit}
                    type="submit"
                    className="btn btn-lg btn-success btn-block"
                    >
                    Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default Input;