import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            formValid: false,
            user: {
                username: null,
                pwd: null
            },    
            usernameValid: false,
            pwdValid: false
        };
      }

      handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        
        this.setState(
            { user: { ...this.state.user, [name]: value } },
            () => { this.validateField(name, value) },
            () => { console.log(this.state.user) }
        )
      }

      validateField(field, value) {
        let usernameValid = this.state.usernameValid;
        let pwdValid = this.state.pwdValid;
        
        console.log(field);
        switch (field) {
            case 'username':
                usernameValid = value.length > 0
                break;
            case 'pwd':
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
        this.setState({ formValid: this.state.usernameValid && this.state.pwdValid },console.log(this.state));
    }
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.user);
      }

      render() {
        return (
          <div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                    <h2>Login form</h2>
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username" name="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                        </div>
                        <button type="submit" disabled={!this.state.formValid} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>
            </div>
          </div>
        );
      }
    }
export default Login;