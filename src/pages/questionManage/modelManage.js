import React, { Component } from 'react';
import PagesHeader from '../../components/pages-header';
import { Tabs, Form, Input, Space, Button } from 'antd';
import './modelManage.less';
const { TabPane } = Tabs;

const ModelSearch = () => {
  return (
    <Form>
      <Form.Item>
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button>查询</Button>
          <Button>重置</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default class modelManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      location: { state },
    } = this.props;
    return (
      <div className="model_manage_wrapper">
        <PagesHeader title={{ first: '题库管理', second: '模块管理' }} />
        <div className="model_manage_title">{state.courseName}</div>
        <div className="model_manage_content">
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="全部题库" key="1">
              <ModelSearch />
            </TabPane>
            <TabPane tab="每日练习" key="2">
              <ModelSearch />
            </TabPane>
            <TabPane tab="真题" key="3">
              <ModelSearch />
            </TabPane>
            <TabPane tab="模拟题" key="4">
              <ModelSearch />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
