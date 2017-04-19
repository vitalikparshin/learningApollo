import '../App.css';

import { gql, graphql } from 'react-apollo';

import Post from './Post'
import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

function PostList({email , data: { loading, allCommentses } }) {
  // console.log('Value TestStore', this.name)
  if (loading) {
    return <div>Loading</div>;
  } else {
    const comment = allCommentses[0].name
    console.log("DATA COMMENT: ", comment);
    return (
      <div>
        <p className="App-intro">
          Hello world
        </p>
        <ul>
          { allCommentses.map((name, index) => 
            <div> 
              <li key={index}> { name.id } {name.name} </li>
            </div>
          )}
        </ul>
        
      </div>
    );
  }
}
const myQuery =  gql`
  query Comments {
    allCommentses {
      id
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
  graphql(myQuery 
  // {
  //   options:({ email }) => {
  //     return { variables: { email } }
  //   }}
  )
)(PostList)
