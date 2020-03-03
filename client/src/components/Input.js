import React, { Component } from "react";
import { pvWattsForm } from './UserFunctions';

class Input extends Component {
    constructor() {
        super()
        this.state = {
            address:'',
            system_capacity:''
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
            address: this.state.address,
            system_capacity: this.state.system_capacity
        }

        pvWattsForm(newRequest).then(res => {
            this.props.history.push(`/charts`)
        })
    }
    

    render() {
        return (
            <div className="container col-sm-12 mt-5">
                <form>
                <br></br>
                <h1 className="h3 mb-3 font-weight-normal">Enter your details</h1>
                    <div className="form-group col-sm-8">
                        <label htmlFor="exampleFormControlInput1">Street Address:</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="e.g. 1234 Example Ave Denver, CO 80000"></input>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="exampleFormControlInput1">System Capacity (kW):</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="100"></input>
                    </div>
                </form>
                <div className="card">
                    <div className="card-body">
                        For reference by square footage:
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
                className="btn btn-primary"
                >
                Submit
                </button>
            </div>
        )
    }
}

export default Input;