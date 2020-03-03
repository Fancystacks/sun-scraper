import React, { Component } from "react";

class Input extends Component {
    render() {
        return (
            <div className="container col-sm-8 mt-5">
                <form>
                <br></br>
                <h1 className="h3 mb-3 font-weight-normal">Enter your details</h1>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Your Address:</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="e.g. 1234 Example Ave Denver, CO 80000"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">System Capacity:</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="100kW"></input>
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
                <button type="button" className="btn btn-lg btn-success btn-block">Submit</button>
            </div>
        )
    }
}

export default Input;