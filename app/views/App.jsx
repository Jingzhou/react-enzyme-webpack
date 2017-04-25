import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './App.scss';

// export default () => <h1>Hello World</h1>;

class App extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

export default cssModules(App, styles, { allowMultiple: true, errorWhenNotFound: false });
