import React, { Component } from 'react';
import { Form, DatePicker, Input, Radio, Button, Table, Space } from 'antd';
import './index.less';
export default class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        phone: 32,
        registerTime: '2019-5-10',
        id: 45678,
        nickName: 'Eugenia',
        sex: '男',
        area: '上海',
        userIdentity: '已报名',
        loginTime: '2021-10-21',
      },
      {
        key: '2',
        name: '胡彦祖',
        phone: 42,
        registerTime: '2019-5-10',
        id: 45678,
        nickName: 'Eugenia',
        sex: '男',
        area: '香港',
        userIdentity: '未报名',
        loginTime: '2021-10-21',
      },
    ];

    this.columns = [
      {
        title: 'ID',
        key: 'id',
        dataIndex: 'id',
        align: 'center',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
      },
      {
        title: '昵称',
        dataIndex: 'nickName',
        key: 'nickName',
        align: 'center',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
      },
      {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center',
      },
      {
        title: '地区',
        dataIndex: 'area',
        key: 'area',
        align: 'center',
      },
      {
        title: '用户身份',
        dataIndex: 'userIdentity',
        key: 'userIdentity',
        align: 'center',
      },
      {
        title: '注册时间',
        dataIndex: 'registerTime',
        key: 'registerTime',
        align: 'center',
      },
      {
        title: '登录时间',
        dataIndex: 'loginTime',
        key: 'loginTime',
        align: 'center',
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: () => {
          return (
            <Space>
              <Button size={{ size: 'small' }} type="text" danger>
                查看
              </Button>
              <Button size={{ size: 'small' }} type="text" danger>
                添加
              </Button>
            </Space>
          );
        },
      },
    ];
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
            <Form.Item style={{ marginTop: 10 }} wrapperCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
                查询
              </Button>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </div>
        <Table className="user_manage_table" dataSource={this.dataSource} columns={this.columns} />
      </div>
    );
  }
}
