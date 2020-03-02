import React, { Component } from "react";

class Input extends Component {
    render() {
        return (
            <div className="container">
                <br></br>
                <form>
                    <div classname="form-group">
                        <label for="exampleFormControlInput1">Your Address</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="e.g. 1234 Example Ave Denver, CO 80000"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">System Capacity</label>
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
                <button type="button" className="btn btn-primary">Submit</button>
            </div>
        )
    }
}

export default Input;