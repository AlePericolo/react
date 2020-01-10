import React, { Component } from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        //console.log(props);

        this.state = {
            post: props.user.post,
            userId: props.user.id
        }
      }

      checkPost = () => {
            
        if(this.state.post.length > 0 ){
              return (
                  <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Text</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.printRows()}
                        </tbody>
                    </table>
                  </div>
              )
        }
        return (
            <div className="alert alert-warning">
                  <strong>No post!</strong> add one...
            </div>
        )  
      }

      printRows = () => {

        return this.state.post.map((obj, index) => {
            const { id, mex } = obj //destructuring
            return (
               <tr key={index}>
                  <td>{id}</td>
                  <td>{mex}</td>
               </tr>
            )
         })
      }

      render() {
        return (
          <div>
            <h3>POST:</h3>
            {this.checkPost()}
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-success">New post</button>
                </div>
            </div>
          </div>
        );
      }
    }
export default Post;