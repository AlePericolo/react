import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


class Home extends Component {

    constructor(props) {
        super(props);
        console.log(props);

      }
    
      render() {
        return (
          <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark boxShadowSmall">
                <div className="navbar-brand">
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav justify-content-end">
                        <form className="form-inline">
                            <Link to="/new">
                                <button className="btn btn-outline-success btn-sm" type="button" title="Go to New">
                                    Add new 
                                </button>
                            </Link>
                        </form>
                        */}
                    </ul>
                </div>
            </nav>
          </div>
        );
      }
    }
export default Home;