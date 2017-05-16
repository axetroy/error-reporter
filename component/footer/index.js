/**
 * Created by axetroy on 17-5-8.
 */
import { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        ©2016 Created by Axetroy
      </Footer>
    );
  }
}
