import '../App.css';

import { gql, graphql } from 'react-apollo';

import Post from './Post'
import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

function PostList({ data: { loading, adGroups } }) {
  // console.log('Value TestStore', this.name)
  if (loading) {
    return <div>Loading</div>;
  } else {
    console.log("DATA IS ", loading);
    return (
      <div>
        <p className="App-intro">
          Hello world
        </p>
        <ul>
          { adGroups.map((group, index) => 
            <Post key={index} {...group}/>
          )}
        </ul>
      </div>
    );
  }
}
const artemEmail = 2
const myQuery =  gql`
  query allGroups($email: Int! ){
    adGroups(email: $email) {
      id
      email
      name
    }
  }
`;


export default compose(
  connect(
    state => ({
      testStore: state.auth
    })
  ),
  graphql(myQuery, {options: {variables: {email: artemEmail}}}),
)(PostList)
