import React from 'react';
import { Button, Row, Col, Card, Statistic } from 'antd';
import { AudioOutlined, FireOutlined, TrophyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 className="page-title">欢迎来到口语天天练</h1>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
          系统化的雅思口语练习平台，帮助您在日常练习中不断提升口语水平
        </p>
        <Button
          type="primary"
          size="large"
          icon={<AudioOutlined />}
          onClick={() => navigate('/practice')}
          style={{ padding: '8px 40px', fontSize: '16px' }}
        >
          立即开始练习
        </Button>
      </div>

      <Row gutter={[24, 24]} style={{ marginBottom: '50px' }}>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="今日完成"
              value={0}
              prefix={<FireOutlined />}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="总练习时长"
              value={0}
              suffix="分钟"
              prefix={<AudioOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="连续打卡天数"
              value={0}
              prefix={<TrophyOutlined />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12}>
          <Card title="📚 功能特色" hoverable>
            <ul style={{ lineHeight: '2' }}>
              <li>✨ 精选雅思口语题库（Part 1, 2, 3）</li>
              <li>🎙️ 实时语音录制与回放</li>
              <li>📊 学习进度智能追踪</li>
              <li>⏰ 每日打卡提醒</li>
              <li>🏆 成就系统与排行榜</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="💡 学习建议" hoverable>
            <ul style={{ lineHeight: '2' }}>
              <li>🎯 每天至少练习 30 分钟</li>
              <li>🔁 重复练习困难题目</li>
              <li>📝 记录自己的进步</li>
              <li>👂 多听标准发音</li>
              <li>💬 与他人讨论交流</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
