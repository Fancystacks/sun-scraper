import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
        <div className="main">
            <div className="row">
                <div className="container">
                    <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome to Sun Scraper</h1>
                        <br></br>
                        <h4 className="text-center">Please log in or register to get your customized solar data!</h4>
                        <br></br>
                        <p className="text-center"> Sun Scraper is a solar energy data application designed to give commercial 
                        property owners within Black Hills territory a snap shot of the benefits of going solar.
                        <br></br>
                        <br></br>
                        <br></br>
                        See how much you can save with 3 easy steps
                        <br></br>
                        <br></br>
                        1. Login or register<br></br>
                        2. Upload your electric utility usage data as a csv file and fill out location information<br></br>
                        3. See how much energy you can offset with solar </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Landing;