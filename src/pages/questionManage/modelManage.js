import React, { Component } from 'react';
import PagesHeader from '../../components/pages-header';
import { Tabs, Form, Input, Space, Button, Card } from 'antd';
import './modelManage.less';
const { TabPane } = Tabs;

const ModelSearch = () => {
  return (
    <Form layout="inline">
      <Form.Item label="章节筛选:">
        <Input placeholder="请输入章节" />
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
export default class ModelManage extends Component {
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
              <Card title="题号">全部题库</Card>
            </TabPane>
            <TabPane tab="每日练习" key="2">
              <ModelSearch />
              <Card title="题号">每日练习</Card>
            </TabPane>
            <TabPane tab="真题" key="3">
              <ModelSearch />
              <Card title="题号">真题</Card>
            </TabPane>
            <TabPane tab="模拟题" key="4">
              <ModelSearch />
              <Card title="题号">模拟题</Card>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
