import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            date: new Date(),
            username: this.props.user.name + ' ' + this.props.user.surname
        };
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        return (
          <div>
            <h1>Ciao, {this.state.username}!</h1>
            <h2>Sono le {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
export default Clock;