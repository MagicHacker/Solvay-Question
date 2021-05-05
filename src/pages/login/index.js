import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import './index.less';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  login = () => {
    const { history } = this.props;
    history.push({ pathname: '/homepage' });
    message.success('登录成功!');
  };
  handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="login_wrapper">
        <div className="login_left" />
        <div className="login_right">
          <h4>Solvay Question</h4>
          <Form className="login_form">
            <Form.Item>
              <Input
                name="username"
                value={username}
                bordered={false}
                placeholder="用户名"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="password"
                type="password"
                value={password}
                bordered={false}
                placeholder="密码"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button shape="round" onClick={this.login}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
