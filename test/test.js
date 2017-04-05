/**
 * Created by Administrator on 2017/4/5 0005.
 */
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { expect } from 'chai';
import App from '../app/views/App';

describe('Enzyme Shallow', function () {
  it('App\'s title should be Hello World', function () {
    const app = shallow(<App />);
    expect(app.find('h1').text()).to.equal('Hello World');
  });
});
