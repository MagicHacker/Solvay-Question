import React, { Component } from 'react';
import { Form, Input, Space, Button, DatePicker, Tabs, Card } from 'antd';
import './index.less';
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
export default class StudentError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '',
      endTime: '',
      topicName: '',
      topicCode: '',
      rangePickerKey: '',
    };
  }
  changeTime = (date, dateString) => {
    this.setState({
      startTime: dateString[0],
      endTime: dateString[1],
    });
  };
  changeTopicName = (e) => {
    const { target } = e;
    this.setState({
      topicName: target.value,
    });
  };
  changeTopicCode = (e) => {
    const { target } = e;
    this.setState({
      topicCode: target.value,
    });
  };
  search = () => {
    const { topicName, topicCode } = this.state;
    console.warn('搜索', topicName, topicCode);
  };
  reset = () => {
    this.setState({
      topicName: '',
      topicCode: '',
      rangePickerKey: new Date(),
    });
  };
  render() {
    const { topicName, topicCode, rangePickerKey } = this.state;
    return (
      <div className="student_error_wrapper">
        <div className="student_error_title">学员纠错</div>
        <div className="student_error_search">
          <Form layout="inline">
            <Form.Item label="时间筛选:">
              <RangePicker showTime onChange={this.changeTime} key={rangePickerKey} />
            </Form.Item>
            <Form.Item label="试题名称:">
              <Input placeholder="请输入课程名称" value={topicName} onChange={this.changeTopicName} />
            </Form.Item>
            <Form.Item label="试题编码:">
              <Input placeholder="请输入课程编码" value={topicCode} onChange={this.changeTopicCode} />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit" onClick={this.search}>
                  查询
                </Button>
                <Button onClick={this.reset}>重置</Button>
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
