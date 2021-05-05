import React, { Component } from 'react';
import { Layout, Menu, Popover } from 'antd';
import {
  UserOutlined,
  AppstoreFilled,
  ReadFilled,
  FileFilled,
  HighlightFilled,
  CodeSandboxCircleFilled,
  GithubFilled,
  LoginOutlined,
} from '@ant-design/icons';
import './index.less';

const { Header, Sider, Content } = Layout;
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logOut = () => {
    const { history } = this.props;
    history.replace({ pathname: '/login' });
  };
  render() {
    return (
      <div className="homepage_wrapper">
        <Layout className="homepage_layout">
          <Sider className="homepage_sider">
            <div className="homepage_sider_logo">
              <CodeSandboxCircleFilled />
              <span style={{ marginLeft: '10px' }}>Solvay Question</span>
            </div>
            <Menu className="homepage_sider_menu">
              <Menu.Item icon={<UserOutlined />}>用户管理</Menu.Item>
              <Menu.Item icon={<AppstoreFilled />}>题库管理</Menu.Item>
              <Menu.Item icon={<ReadFilled />}>章节管理</Menu.Item>
              <Menu.Item icon={<FileFilled />}>知识点管理</Menu.Item>
              <Menu.Item icon={<HighlightFilled />}>学院纠错</Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="homepage_header">
              <Popover
                className="homepage_header_user"
                content={
                  <div style={{ cursor: 'pointer' }} onClick={this.logOut}>
                    <LoginOutlined />
                    <span>退出登录</span>
                  </div>
                }
              >
                <GithubFilled />
                <span>MagicHacker</span>
              </Popover>
            </Header>
            <Content className="homepage_content">aa</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
