import React, { Component } from 'react';
import { Form, Input, Space, Button, DatePicker, Tabs, Card } from 'antd';
import './index.less';
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
export default class StudentError extends Component {
  render() {
    return (
      <div className="student_error_wrapper">
        <div className="student_error_title">学员纠错</div>
        <div className="student_error_search">
          <Form layout="inline">
            <Form.Item label="时间筛选:">
              <RangePicker showTime />
            </Form.Item>
            <Form.Item label="试题名称:">
              <Input />
            </Form.Item>
            <Form.Item label="试题编码:">
              <Input />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button>重置</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
        <Tabs type="card" className="student_error_tabs">
          <TabPane tab="已解决" key="1">
            <Card title="题目">已解决</Card>
          </TabPane>
          <TabPane tab="未解决" key="2">
            <Card title="题目">未解决</Card>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
