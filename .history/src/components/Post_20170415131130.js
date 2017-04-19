import '../App.css';

import React, { Component } from 'react';

import { connect } from 'react-redux'

class Post extends Component {

  add() {
    const five = "hello ";
    this.props.addValue(five)
  }
  
  render() {
    console.log('INITIAL StoreState is: ', this.props.email)
    const {id, name, email} = this.props;
      
    return (
      <div>
        <li>
          <p>{id}</p>
          <p>{name}</p>
          <p>{email}</p>
           
          
        </li>

        <button value="23"
          onClick={this.add.bind(this)}
        > add some value
        </button>
        {/* {this.props.email} */}
      </div>
    );
  }
}

export default connect(
  state => ({
      email: state.auth.profile.email
    }),
    
  dispatch => ({
    addValue: (value) => {
      dispatch({type: 'ADD', do: value})
    }
  })
)(Post);