import React from 'react';
import './App.css';
import Post from './components/Post'
import PostForm from './components/PostForm'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PostForm />
          <Post />
        </header>
      </div>
    );
  }
}

export default App;
