import React, { useState } from 'react';
import { Card, Button, Radio, Row, Col, Progress, message } from 'antd';
import { AudioOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons';

const Practice = () => {
  const [questionType, setQuestionType] = useState('part1');
  const [recording, setRecording] = useState(false);
  const [recordedTime, setRecordedTime] = useState(0);

  // 示例题库
  const questions = {
    part1: [
      { id: 1, question: "What's your name?", category: "Personal Info" },
      { id: 2, question: "Where are you from?", category: "Personal Info" },
      { id: 3, question: "What do you do?", category: "Work/Study" },
    ],
    part2: [
      { id: 1, question: "Describe a memorable journey you have taken.", category: "Experiences" },
      { id: 2, question: "Talk about your favorite book.", category: "Hobbies" },
    ],
    part3: [
      { id: 1, question: "Why do people like to travel?", category: "Discussion" },
      { id: 2, question: "What are the benefits of reading?", category: "Discussion" },
    ],
  };

  const currentQuestions = questions[questionType] || [];

  const handleStartRecording = () => {
    setRecording(true);
    setRecordedTime(0);
    message.success('开始录音...');
  };

  const handleStopRecording = () => {
    setRecording(false);
    message.success('录音已保存');
  };

  const handleDeleteRecording = () => {
    setRecordedTime(0);
    message.info('已删除录音');
  };

  return (
    <div className="app-container">
      <h1 className="page-title">📝 开始练习</h1>

      <Card style={{ marginBottom: '24px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '20px', fontSize: '16px' }}>选择题型：</label>
          <Radio.Group value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
            <Radio value="part1">Part 1 (常见问题)</Radio>
            <Radio value="part2">Part 2 (话题阐述)</Radio>
            <Radio value="part3">Part 3 (深度讨论)</Radio>
          </Radio.Group>
        </div>
      </Card>

      <Row gutter={[24, 24]}>
        {currentQuestions.map((q) => (
          <Col xs={24} key={q.id}>
            <Card hoverable>
              <div style={{ marginBottom: '16px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#1890ff',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    marginRight: '12px',
                  }}
                >
                  {q.category}
                </span>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '20px', minHeight: '50px' }}>
                {q.question}
              </h3>

              <div
                style={{
                  background: '#f5f5f5',
                  padding: '20px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}
              >
                {recordedTime > 0 && (
                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontSize: '14px', color: '#666' }}>录音时长</p>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1890ff' }}>
                      {Math.floor(recordedTime / 60)}:{String(recordedTime % 60).padStart(2, '0')}
                    </p>
                    <Progress
                      percent={(recordedTime / 120) * 100}
                      status={recordedTime > 120 ? 'exception' : 'active'}
                      style={{ marginTop: '12px' }}
                    />
                  </div>
                )}
                {!recording && recordedTime === 0 && (
                  <p style={{ fontSize: '14px', color: '#999' }}>点击下方开始录音</p>
                )}
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                {!recording ? (
                  <Button
                    type="primary"
                    icon={<AudioOutlined />}
                    size="large"
                    onClick={handleStartRecording}
                  >
                    开始录音
                  </Button>
                ) : (
                  <Button
                    danger
                    size="large"
                    onClick={handleStopRecording}
                  >
                    停止录音
                  </Button>
                )}

                {recordedTime > 0 && (
                  <>
                    <Button icon={<DownloadOutlined />} size="large">
                      下载音频
                    </Button>
                    <Button
                      danger
                      icon={<DeleteOutlined />}
                      size="large"
                      onClick={handleDeleteRecording}
                    >
                      删除
                    </Button>
                  </>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Practice;
