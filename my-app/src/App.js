import React from 'react';
import './App.css';
import Post from './components/Post'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Post />
        </header>
      </div>
    );
  }
}

export default App;
