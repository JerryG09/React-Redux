import React from 'react';
import './App.css';
import Post from './components/Post'
import PostForm from './components/PostForm'

import { Provider } from "react-redux"
import store from '../src/components/store'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <PostForm />
            <Post />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
