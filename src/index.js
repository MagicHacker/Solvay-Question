import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import './index.less';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
