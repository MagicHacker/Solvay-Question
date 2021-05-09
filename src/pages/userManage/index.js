import React, { Component } from 'react';
import { Form, DatePicker, Input, Radio, Button } from 'antd';
import './index.less';
export default class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="user_manage_wrapper">
        <div className="user_manage_title">用户管理</div>
        <div className="user_manage_search">
          <Form layout="inline">
            <Form.Item label="注册时间:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <DatePicker showTime />
            </Form.Item>
            <Form.Item label="登录时间:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <DatePicker showTime />
            </Form.Item>
            <Form.Item label="姓名:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <Input />
            </Form.Item>
            <Form.Item label="昵称:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <Input />
            </Form.Item>
            <Form.Item label="手机号:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <Input />
            </Form.Item>
            <Form.Item label="用户身份:" style={{ marginTop: 10 }} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
              <Radio.Group>
                <Radio value="">已报名</Radio>
                <Radio value="">未报名</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item style={{ marginTop: 10 }}>
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
