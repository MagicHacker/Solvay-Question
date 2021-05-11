import React, { Component } from 'react';
import { Form, Space, Button, Input, DatePicker, Table } from 'antd';
import './index.less';
const { RangePicker } = DatePicker;
export default class ChapterManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dataSource = [
      {
        key: '1',
        courseName: '马克思主义',
        chapterCount: 32,
        admin: '管理员',
        courseCode: '45678',
        operationTime: '2019-5-10  18:00:00',
      },
      {
        key: '2',
        courseName: '毛概',
        chapterCount: 42,
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
        title: '章节数量',
        dataIndex: 'chapterCount',
        key: 'chapterCount',
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
        render: () => {
          return <a>章节管理</a>;
        },
      },
    ];
  }
  render() {
    return (
      <div className="chapter_manage_wrapper">
        <div className="chapter_manage_title">章节管理</div>
        <div className="chapter_manage_search">
          <Form layout="inline">
            <Form.Item label="时间筛选:">
              <RangePicker showTime />
            </Form.Item>
            <Form.Item label="课程名称:">
              <Input />
            </Form.Item>
            <Form.Item label="课程编码:">
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
        <Table className="chapter_manage_table" dataSource={this.dataSource} columns={this.columns} />
      </div>
    );
  }
}
