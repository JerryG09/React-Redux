import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="">
          <div>
            <label htmlFor="title">Title: </label>
            <br />
            <input type="text" name="title" />
          </div>
          <div>
            <label htmlFor="title">Body: </label>
            <br />
            <textarea name="body" id="" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm