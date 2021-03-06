import React, {Component} from 'react';

class Comment extends Component {
  state = {
    input: ""
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  inputValue() {
    const value = this.state.input
    console.log(value)
  }

  render() {
    console.log(this.state.input)
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} value={this.state.input}></input>
        <button onClick={this.inputValue.bind(this)}>ADD COMMENT</button>
      </div>
    )
  }
}

const myQuery = gql`
  mutation createComponent($name: String!) {
    createComment(name: $name) {
      id
      name
	  }
  }
`;

export default graphql(myQuery, {
  props: ({ ownProps, mutate }) => ({
    submit: ({ name }) => mutate({
      variables: { repoFullName, commentContent },
    })
  }),
})(Comment)