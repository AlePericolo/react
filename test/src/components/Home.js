import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from './Card';
import Post from './Post';
import Clock from './Clock';
import Service from '../api/Service';
import Swal from 'sweetalert2'

class Home extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props.location.state.userId);
        this.state = {
            userId: this.props.location.state.userId,
            user: null,
            loadComplete: false
        } 
      }

      componentDidMount() {
        Service.getUserById(this.state.userId)
            .then(response => {
                //console.log(response);
                
                if (response.status === 200) {
                    this.setState(
                        { user: response.data[0] }
                    );
                }
                this.setState({ loadComplete: true })
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire(error.toString())
                    .then(() => {
                        window.location.reload();
                        console.log('Reload')
                    });
            })
    }
    
      render() {

        if (this.state.loadComplete) {
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
                        <div className="col-md-2 col-sm-12">
                            <Card user={this.state.user}/>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <Post user={this.state.user}/>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <Clock />
                        </div>
                    </div>
                </div>
            </div>
            );
            }
            return null;
        }
    }
export default Home;