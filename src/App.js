import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
// import logo from './logo.svg';
import './App.css';

import store from './store';

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <div className="App">
            <PostForm></PostForm>
            <hr></hr>
            <Posts></Posts>
          </div>
        </Provider>
      );
  }
}

export default App;
