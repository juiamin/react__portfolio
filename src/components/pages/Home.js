import React from "react";
import Footer from "../Footer";

const divStyle = {
    color: '#1D6768',
    fontFamily: "'Georgia', Times, 'Times New Roman', serif",
};

function Home() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={divStyle}> About Me</h2>
                            <hr className="line_className" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src="assets\images\55986712.jpg" alt="Sudar Meruva"  height="375" />
                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            
                            
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            <p>Please find my recent projects in latest technologies under Portfolio tab and feel free to contact me
                            </p>                            
                            <hr className="line_className" />
                        </div>
                    </div>
                </div>
                <div className="push"></div>
            </div>
        </div>    
    );
}

export default Home;
