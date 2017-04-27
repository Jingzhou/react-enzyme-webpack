import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1 styleName="red">Hello World</h1>
        <h2 styleName="red">Hello World!!!!!!!!!!!!</h2>
      </div>
    );
  }
}

export default cssModules(App, styles, { allowMultiple: true, errorWhenNotFound: false });
