import React from 'react';
import { Card, Row, Col, Statistic, Table, Chart } from 'antd';
import { CalendarOutlined, AudioOutlined, FireOutlined } from '@ant-design/icons';

const Progress = () => {
  const practiceHistory = [
    { date: '2024-01-15', duration: 45, questions: 8, type: 'Part 1' },
    { date: '2024-01-14', duration: 30, questions: 5, type: 'Part 2' },
    { date: '2024-01-13', duration: 50, questions: 10, type: 'Mixed' },
    { date: '2024-01-12', duration: 35, questions: 7, type: 'Part 1' },
  ];

  const columns = [
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '题型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '练习时长',
      dataIndex: 'duration',
      key: 'duration',
      render: (text) => `${text} 分钟`,
    },
    {
      title: '题目数量',
      dataIndex: 'questions',
      key: 'questions',
    },
  ];

  return (
    <div className="app-container">
      <h1 className="page-title">📊 学习进度</h1>

      <Row gutter={[24, 24]} style={{ marginBottom: '30px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总练习天数"
              value={12}
              prefix={<CalendarOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总练习时长"
              value={485}
              suffix="分钟"
              prefix={<AudioOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="已练习题目"
              value={96}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="连续打卡"
              value={5}
              suffix="天"
              prefix={<FireOutlined />}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
      </Row>

      <Card title="📈 近期练习记录" style={{ marginBottom: '24px' }}>
        <Table
          dataSource={practiceHistory}
          columns={columns}
          rowKey="date"
          pagination={false}
        />
      </Card>

      <Card title="💡 学习建议">
        <div style={{ lineHeight: '2' }}>
          <p>✨ 您已经坚持练习 12 天，保持得很好！</p>
          <p>🎯 建议重点加强 Part 3 的深度讨论能力</p>
          <p>📚 可以尝试与他人进行语言交换</p>
          <p>🔊 定期听标准发音，改进发音习惯</p>
        </div>
      </Card>
    </div>
  );
};

export default Progress;
