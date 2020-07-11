import React, { Component } from 'react';
import profile from '../assets/images/profile.png';
import '../assets/css/blog.css';

class Blog extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 float-right">
                                <img src={profile} alt="MayankMohindra Profile" className = "profile-pic" />
                            </div>
                            <div className="col-md-7">
                                <br /><br /><br />
                                <h1 className="display-3">Hi, I AM MAYANK!</h1>
                                <h2 className="display-6">I write Code.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <h1 className="display-3">Blog</h1>
                    </div>
                    <hr />
                    <div className="row">
                        <h2><a href="#" className="none-text-decoration">Postgres CopyCat: <span className="text-muted">Copy any data across databases</span></a></h2>
                        <p className="lead col-md-10">Placeholder textDonec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
} export default Blog;