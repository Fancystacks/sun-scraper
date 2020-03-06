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
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Landing;