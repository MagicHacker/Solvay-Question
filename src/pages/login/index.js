import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import './index.less';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login_wrapper">
        <div className="login_left" />
        <div className="login_right">
          <h4>Solvay Question</h4>
          <Form className="login_form">
            <Form.Item>
              <Input bordered={false} placeholder="用户名" />
            </Form.Item>
            <Form.Item>
              <Input type="password" bordered={false} placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button shape="round">登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
