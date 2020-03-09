import React, { Component } from "react";
import { pvWattsForm } from './UserFunctions';
import { importDataCsv } from './UserFunctions'
import jwt_decode from 'jwt-decode';
import ReactFileReader from 'react-file-reader'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            street_address: '',
            city: '',
            home_state: '',
            zip_code: '',
            system_capacity: '',
            array_type: '',
            csvData: [],
            ac_annual: '',
            ac_monthly: '',
            email: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            email: decoded.email
        })
    }
///////////////////////// csv file. Here I am trying to add info to state /////////////////////////////
    handleFiles = files => {
        var reader = new FileReader();
        reader.onload = function (e) {
            const response = reader.result;
            const rows = response.split('\n')
            rows.shift();
            const rowData = [];
            for (const row of rows) {
                const values = row.split(',')
                rowData.push({
                    MTR_NUM: values[0],
                    DATE: values[1],
                    TIME: values[2],
                    MONTH: values[3],
                    WEEKDAY: values[4],
                    peak_kW: values[5],
                    PEAK_kWH: values[6],
                    kWh: values[7],
                    kW: values[8],
                    email: 'email@email.com'
                })
            }


        }
        reader.readAsText(files[0]);
    }
///////////////////////////////////////////////////////////////////////////////////////////
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
            array_type: this.state.array_type,
            csv: this.state.csv,
            email: this.state.email
        }

        pvWattsForm(newRequest).then(res => {
            this.setState({
                ac_annual: res.data.outputs.ac_annual,
                ac_monthly: res.data.outputs.ac_monthly
            })
            var ac_annual = res.data.outputs.ac_annual;
            var ac_monthly = JSON.stringify(res.data.outputs.ac_monthly);
            console.log(ac_annual)
            console.log(ac_monthly)
            this.props.history.push(`/dashboard`)
            function setStorage() {
                localStorage.setItem("ac_annual", ac_annual);
                localStorage.setItem("ac_monthly", ac_monthly);
            }
            setStorage();
        });
         
    }

    render() {
        return (
            <div className="main">
                <div className="row">
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

                                    <option>...</option>
                                    <option>Fixed - Open Rack</option>
                                    <option>Fixed - Roof Mounted</option>
                                    <option>Single Axis</option>
                                    <option>Single Axis - Backtracking</option>
                                    <option>Dual Axis</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="container col-sm-8 mb-5">
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
                        <div className="card">
                            <div className="card-body">
                                <ReactFileReader
                                    handleFiles={this.handleFiles}
                                    value={this.state.csvData}
                                    onChange={this.onChange}
                                    fileTypes={'.csv'}
                                >
                                    <button className='btn'>Upload</button>
                                </ReactFileReader>
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
            </div>
        )
    }
}

export default Input;