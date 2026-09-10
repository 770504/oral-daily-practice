import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import './App.css';

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ padding: '24px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center', marginTop: '50px' }}>
          口语天天练 ©2024 - 让雅思口语练习变得简单有趣
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
