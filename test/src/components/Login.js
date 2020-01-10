import React, { Component } from 'react';
import Service from '../api/Service';
import Swal from 'sweetalert2'

class Login extends Component {

    constructor(props) {
        super(props);
        //console.log(props);

        this.state = {
            user: {
                username: null,
                password: null
            },    
            formValid: false,
            usernameValid: false,
            pwdValid: false
        };
        this.addService = new Service();
      }

      handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        
        this.setState(
            { user: { ...this.state.user, [name]: value } },
            () => { this.validateField(name, value) },
            () => { /*console.log(this.state.user)*/ }
        )
      }

      validateField(field, value) {
        let usernameValid = this.state.usernameValid;
        let pwdValid = this.state.pwdValid;
        
        //console.log(field);
        switch (field) {
            case 'username':
                usernameValid = value.length > 0
                break;
            case 'password':
                pwdValid = value.length > 0
                break;
            default:
                break;
        }
        this.setState(
            {
                usernameValid: usernameValid,
                pwdValid: pwdValid
            }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.usernameValid && this.state.pwdValid } /*,console.log(this.state)*/);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        Service.checkLogin(this.state.user)
        .then(response => {
            //console.log(response);
            if (response.status === 200) {
                            
                if(response.data.length > 0){   
                    let userId = response.data[0].id;

                    this.props.history.push({
                        pathname: '/home',
                        state: { userId: userId }
                    })
                }else{
                    Swal.fire(
                        'Error!',
                        'User not found',
                        'error'
                        )                
                }
            }
        })
    }

    goToRegister = (e) => {
        e.preventDefault();

        this.props.history.push({
            pathname: '/register'
        })
    }

      render() {
        return (
          <div>
            <div className="container-fluid">
                <div className="col-md-4 col-sm-6 offset-md-4 offset-sm-3">
                    <div className="card  bg-dark text-white mt-5">
                        <div className="card-body">
                        <h2 className="text-center">Login form</h2>
                            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                                <div className="form-group mb-0 mt-2">
                                    <label htmlFor="username">Username:</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" name="username"/>
                                </div>
                                <small className="text-danger">{this.state.usernameValid ? '' : 'Username required'}</small>
                                <div className="form-group mb-0 mt-2">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password"/>
                                </div>
                                <small className="text-danger">{this.state.pwdValid ? '' : 'Password required'}</small>
                                <div className="mt-3 text-center">
                                    <button type="submit" disabled={!this.state.formValid} className="btn btn-outline-success mx-2">Login</button>
                                    <button onClick={this.goToRegister} className="btn btn-outline-warning mx-2">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      }
    }
export default Login;