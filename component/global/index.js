/**
 * Created by axetroy on 17-5-8.
 */
import { Component } from 'react';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

import stylesheet from '../../styles/index.css';

import Aside from '../aside';
import Footer from '../footer';

export default class extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Layout style={{ height: '100vh' }}>
          <Sider style={{ overflow: 'auto' }}>
            <Aside />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div
                style={{ padding: 24, background: '#fff', textAlign: 'center' }}
              >
                {this.props.children}
              </div>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </div>
    );
  }
}
