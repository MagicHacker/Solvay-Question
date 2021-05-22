import React from 'react';
import { Breadcrumb } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import './index.less';
function PageHeader(props) {
  const goBack = () => {
    const { history } = props;
    history.goBack();
  };
  return (
    <div className="pages_header_wrapper">
      <Breadcrumb style={{ fontSize: 24 }}>
        <Breadcrumb.Item>
          <a href="">{props.title.first}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{props.title.second}</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ cursor: 'pointer' }} onClick={goBack}>
        <ArrowLeftOutlined />
        返回
      </div>
    </div>
  );
}
export default withRouter(PageHeader);
