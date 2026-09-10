import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { AudioOutlined, BarChartOutlined, HomeOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <Layout.Header
      style={{
        background: '#1890ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px',
      }}
    >
      <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
        🎤 口语天天练
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ flex: 1, marginLeft: '50px', background: '#1890ff', border: 'none' }}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: <Link to="/" style={{ color: 'white' }}>首页</Link>,
          },
          {
            key: '2',
            icon: <AudioOutlined />,
            label: <Link to="/practice" style={{ color: 'white' }}>开始练习</Link>,
          },
          {
            key: '3',
            icon: <BarChartOutlined />,
            label: <Link to="/progress" style={{ color: 'white' }}>学习进度</Link>,
          },
        ]}
      />
      <Button type="primary" style={{ background: 'white', color: '#1890ff' }}>
        登录
      </Button>
    </Layout.Header>
  );
};

export default Header;
