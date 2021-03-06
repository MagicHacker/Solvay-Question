import React, { Component } from 'react';
import { Form, Input, Space, Button, DatePicker, Table } from 'antd';
import './index.less';
const { RangePicker } = DatePicker;
export default class QuestionManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '',
      endTime: '',
      courseName: '',
      courseCode: '',
      rangePickerKey: '',
    };
    this.dataSource = [
      {
        key: '1',
        courseName: '马克思主义',
        moduleCount: 32,
        exerciseCount: 40,
        admin: '管理员',
        courseCode: '45678',
        operationTime: '2019-5-10  18:00:00',
      },
      {
        key: '2',
        courseName: '毛概',
        moduleCount: 42,
        exerciseCount: 40,
        admin: '管理员',
        courseCode: '45678',
        operationTime: '2019-5-10  18:00:00',
      },
    ];
    this.columns = [
      {
        title: '课程编码',
        dataIndex: 'courseCode',
        key: 'courseCode',
        align: 'center',
      },
      {
        title: '课程名称',
        dataIndex: 'courseName',
        key: 'courseName',
        align: 'center',
      },
      {
        title: '模块数量',
        dataIndex: 'moduleCount',
        key: 'moduleCount',
        align: 'center',
      },
      {
        title: '习题数量',
        dataIndex: 'exerciseCount',
        key: 'exerciseCount',
        align: 'center',
      },
      {
        title: '管理员',
        dataIndex: 'admin',
        key: 'admin',
        align: 'center',
      },
      {
        title: '操作时间',
        dataIndex: 'operationTime',
        key: 'operationTime',
        align: 'center',
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record) => {
          return (
            <Space>
              <Button
                size={{ size: 'small' }}
                type="text"
                danger
                onClick={() => {
                  this.handleModelManage(record);
                }}
              >
                模块管理
              </Button>
              <Button size={{ size: 'small' }} type="text" danger>
                查看
              </Button>
              <Button size={{ size: 'small' }} type="text" danger>
                编辑
              </Button>
            </Space>
          );
        },
      },
    ];
  }
  handleModelManage = (record) => {
    const { history } = this.props;
    const { courseCode, courseName } = record;
    history.push({
      pathname: '/homepage/modelManage',
      state: {
        courseCode,
        courseName,
      },
    });
  };
  changeTime = (date, dateString) => {
    this.setState({
      startTime: dateString[0],
      endTime: dateString[1],
    });
  };
  changeCourseName = (e) => {
    const { target } = e;
    this.setState({
      courseName: target.value,
    });
  };
  changeCourseCode = (e) => {
    const { target } = e;
    this.setState({
      courseCode: target.value,
    });
  };
  search = () => {
    const { courseName, courseCode } = this.state;
    console.warn('搜索', courseName, courseCode);
  };
  reset = () => {
    this.setState({
      courseName: '',
      courseCode: '',
      rangePickerKey: new Date(),
    });
  };
  render() {
    const { courseName, courseCode, rangePickerKey } = this.state;
    return (
      <div className="question_manage_wrapper">
        <div className="question_manage_title">题库管理</div>
        <div className="question_manage_search">
          <Form layout="inline">
            <Form.Item label="时间筛选:">
              <RangePicker showTime onChange={this.changeTime} key={rangePickerKey} />
            </Form.Item>
            <Form.Item label="课程名称:">
              <Input placeholder="请输入课程名称" value={courseName} onChange={this.changeCourseName} />
            </Form.Item>
            <Form.Item label="课程编码:">
              <Input placeholder="请输入课程编码" value={courseCode} onChange={this.changeCourseCode} />
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
        <Table className="question_manage_table" dataSource={this.dataSource} columns={this.columns} />
      </div>
    );
  }
}
