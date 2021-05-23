import React, { Component } from 'react';
import PagesHeader from '../../components/pages-header';
import { Tree, Input } from 'antd';
import './chapterCheck.less';
const { Search } = Input;
export default class ChapterCheck extends Component {
  render() {
    return (
      <div className="chapter_check_wrapper">
        <PagesHeader title={{ first: '章节管理', second: '查看章节' }} />
        <div className="chapter_check_title">马克思主义</div>
        <div className="chapter_check_content">
          <Search placeholder="请输入" />
          <Tree />
        </div>
      </div>
    );
  }
}
