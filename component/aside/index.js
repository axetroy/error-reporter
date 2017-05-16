/**
 * Created by axetroy on 17-5-9.
 */
import { Component } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

export default class extends Component {
  state = {
    menu: [{ title: '仪表盘', href: '/' }, { title: '报错列表', href: '/list' }]
  };
  render() {
    return (
      <div>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          {this.state.menu.map(v => {
            return (
              <Menu.Item key={v.title}>
                <Link href={v.href}>
                  {v.title}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}
