import '../App.css';

import { gql, graphql } from 'react-apollo';

import Post from './Post'
import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

function PostListMutation({email , data: { loading, adGroups } }) {
  // console.log('Value TestStore', this.name)
//   if (loading) {
//     return <div>Loading</div>;
//   } else {
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
        <div>{email}</div>
      </div>
    );
//   }
}
// const artemEmail = 'artem@serga.name'
const myQuery =  gql`
  mutation allGroups($email: String!) {
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
      email: state.auth.profile.email
    })
  ),
  graphql(myQuery, {
    options:({ email }) => {
      return { variables: { email } }
    }
  }),
)(PostListMutation)
