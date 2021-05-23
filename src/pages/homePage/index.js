import React, { Component } from 'react';
import { Layout, Menu, Popover } from 'antd';
import { NavLink, Switch, Route } from 'react-router-dom';
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
import ChapterManage from '../chapterManage';
import KnowledgeManage from '../knowledgeManage';
import QuestionManage from '../questionManage';
import StudentError from '../studentError';
import UserManage from '../userManage';
import UserCheck from '../userManage/userCheck';
import ModelManage from '../questionManage/modelManage';
import ChapterCheck from '../chapterManage/chapterCheck';
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
              <Menu.Item icon={<UserOutlined />}>
                <NavLink to="/homepage/userManage">用户管理</NavLink>
              </Menu.Item>
              <Menu.Item icon={<AppstoreFilled />}>
                <NavLink to="/homepage/questionManage">题库管理</NavLink>
              </Menu.Item>
              <Menu.Item icon={<ReadFilled />}>
                <NavLink to="/homepage/chapterManage">章节管理</NavLink>
              </Menu.Item>
              <Menu.Item icon={<FileFilled />}>
                <NavLink to="/homepage/knowledgeManage">知识点管理</NavLink>
              </Menu.Item>
              <Menu.Item icon={<HighlightFilled />}>
                <NavLink to="/homepage/studentError">学员纠错</NavLink>
              </Menu.Item>
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
            <Content className="homepage_content">
              <Switch>
                <Route path="/homepage/userManage" component={UserManage} />
                <Route path="/homepage/userCheck" component={UserCheck} />
                <Route path="/homepage/questionManage" component={QuestionManage} />
                <Route path="/homepage/modelManage" component={ModelManage} />
                <Route path="/homepage/chapterManage" component={ChapterManage} />
                <Route path="/homepage/chapterCheck" component={ChapterCheck} />
                <Route path="/homepage/knowledgeManage" component={KnowledgeManage} />
                <Route path="/homepage/studentError" component={StudentError} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
