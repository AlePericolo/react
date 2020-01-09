import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Card from './Card';
import Clock from './Clock';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location.state.user);
        this.state = {
            user: {
                name: this.props.location.state.user.username,
            }
        }
        
      }
    
      render() {
        return (
          <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark boxShadowSmall">
                <div className="navbar-brand">
                    <Link to="/home">
                        Home
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav justify-content-end">
                        <form className="form-inline">
                            <Link to="/">
                                <button className="btn btn-outline-danger btn-sm" type="button" title="Go to New">
                                    Logout 
                                </button>
                            </Link>
                        </form>
                    </ul>
                </div>
            </nav>
          
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <h3>USER:</h3>
                        <Card username={this.state.user.name}/>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <h3>MESSAGES:</h3>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h3>CLOCK:</h3>
                        <Clock />
                    </div>
                </div>
            </div>
        </div>
        );
      }
    }
export default Home;