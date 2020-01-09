import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props);
        //console.log(props);

        this.state = {
            username: this.props.username,
            avatar: 'https://www.w3schools.com/bootstrap4/img_avatar1.png'
        }
      }

      render() {
        return (
          <div>
            <div className="card">
                <img className="card-img-top" src={this.state.avatar} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{this.state.username}</h4>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
          </div>
        );
      }
    }
export default Card;