import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './App2.scss';

class App2 extends Component {
  render() {
    return (
      <div>
        <h1 styleName="red">Hello World</h1>
        <h2 styleName="red">Hello World!</h2>
      </div>
    );
  }
}

export default cssModules(App2, styles, { allowMultiple: true, errorWhenNotFound: false });
