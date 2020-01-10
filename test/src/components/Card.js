import React, { Component } from 'react';
import Gender from './Gender';

class Card extends Component {

    constructor(props) {
        super(props);
        //console.log(props);

        this.state = {
            user: this.props.user
        }

      }

      render() {
        return (
          <div>
            <h3>USER:</h3>
            <div className="card">
                <img className="card-img-top" src={this.state.user.avatar} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{this.state.user.username}</h4>
                    <p className="card-text mb-0"><b>Age:</b> {this.state.user.age}</p>
                    <Gender gender={this.state.user.gender} />
                    <p className="card-text">{this.state.user.bio}</p>
                </div>
            </div>
          </div>
        );
      }
    }
export default Card;