import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';
import PagesHeader from '../../components/pages-header';
import './userCheck.less';
export default class UserCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dataSource = [
      {
        key: '1',
        courseName: '胡彦斌',
        videoType: 32,
        videoName: 'Eugenia',
        techerName: '男',
      },
      {
        key: '2',
        courseName: '胡彦祖',
        videoType: 42,
        videoName: 'Eugenia',
        techerName: '男',
      },
    ];
    this.columns = [
      {
        title: '课程',
        dataIndex: 'courseName',
        key: 'courseName',
        align: 'center',
      },
      {
        title: '视频',
        dataIndex: 'videoName',
        key: 'videoName',
        align: 'center',
      },
      {
        title: '讲师',
        dataIndex: 'techerName',
        key: 'techerName',
        align: 'center',
      },
      {
        title: '视频类型',
        dataIndex: 'videoType',
        key: 'videoType',
        align: 'center',
      },
    ];
  }
  render() {
    const {
      location: { state },
    } = this.props;
    return (
      <div className="user_check_wrapper">
        <PagesHeader title={{ first: '用户管理', second: '查看用户' }} />
        <div className="user_check_detail">
          <span style={{ fontSize: 20, fontWeight: 600 }}>用户信息</span>
          <Row gutter={20}>
            <Col span={8}>
              <div>用户名：{state.userName}</div>
            </Col>
            <Col span={8}>
              <div>昵称：{state.nickName}</div>
            </Col>
            <Col span={8}>
              <div>性别：{state.sex}</div>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={8}>
              <div>手机号：{state.phone}</div>
            </Col>
            <Col span={8}>
              <div>所属地区：{state.area}</div>
            </Col>
            <Col span={8}>
              <div>注册时间：{state.registerTime}</div>
            </Col>
          </Row>
        </div>
        <Table dataSource={this.dataSource} columns={this.columns} />
      </div>
    );
  }
}
