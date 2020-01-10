import React, { Component } from 'react';
import Service from '../api/Service';
import Swal from 'sweetalert2'

class Register extends Component {

    constructor(props) {
        super(props);
        //console.log(props);

        this.state = {
            user: {
                username: null,
                password: null,
                age: null,
                gender: null,
                avatar: null,
                bio: null,
                post: [],
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
        
        //console.log(name);
        //console.log(value);

        this.setState(
            { user: { ...this.state.user, [name]: value } },
            () => { this.validateField(name, value) }
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
        this.setState(
            { formValid: this.state.usernameValid && this.state.pwdValid } ,
            () => { this.setAvatar() }
        )
    }

    setAvatar() {
        
        switch (this.state.user.gender){
            case 'M':
                this.setState(
                    { user: { ...this.state.user, avatar: 'https://www.w3schools.com/bootstrap4/img_avatar3.png'} }
                )
                break;
            case 'F':
                this.setState(
                    { user: { ...this.state.user, avatar: 'https://www.w3schools.com/bootstrap4/img_avatar4.png'} }
                )
                break;
            default:
                this.setState(
                    { user: { ...this.state.user, avatar: null} }
                )
                break;
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        Service.saveUser(this.state.user)
        .then(response => {
            //console.log(response);
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'User saved',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    this.props.history.push('/');
                });
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Something went wrong',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    this.props.history.push('/');
                });
            }
        })
    }

    goBack = (e) => {
        e.preventDefault();

        this.props.history.push({
            pathname: '/'
        })
    }

      render() {
        return (
          <div>
            <div className="container-fluid">
                <div className="col-md-8 col-sm-12 offset-md-2">
                    <div className="card  bg-dark text-white mt-5">
                        <div className="card-body">
                        <h2 className="text-center">Registration form</h2>
                            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group mb-0 mt-2">
                                            <label htmlFor="username">Username:</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" name="username"/>
                                        </div>
                                        <small className="text-danger">{this.state.usernameValid ? '' : 'Username required'}</small>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-0 mt-2">
                                            <label htmlFor="password">Password:</label>
                                            <input type="password" className="form-control" id="password" placeholder="Enter password" name="password"/>
                                        </div>
                                        <small className="text-danger">{this.state.pwdValid ? '' : 'Password required'}</small>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group mb-0 mt-2">
                                        <label htmlFor="age">Gender:</label>
                                        <div className="row">
                                            <div className="col text-right">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="gender" value="M" />M
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="gender" value="F" />F
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-0 mt-2">
                                            <label htmlFor="age">Age:</label>
                                            <input type="number" className="form-control" id="number" placeholder="Enter age" name="age" min="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group mb-0 mt-2">
                                            <label htmlFor="bio">Bio:</label>
                                            <textarea className="form-control" rows="3" id="bio" placeholder="Enter bio" name="bio"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <button type="submit" disabled={!this.state.formValid} className="btn btn-outline-success mx-2">Save</button>
                                    <button onClick={this.goBack} className="btn btn-outline-warning mx-2">Go back</button>
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
export default Register;