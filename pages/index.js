/**
 * Created by axetroy on 17-5-8.
 */
import { Component } from 'react';

import Global from '../component/global';

import Home from './home';

export default class extends Component {
  render() {
    return (
      <Global>
        <Home />
      </Global>
    );
  }
}
