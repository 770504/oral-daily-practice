# 口语天天练 - IELTS Speaking Practice Platform

一个为雅思考生打造的系统化口语练习平台，帮助您在日常练习中不断提升口语水平。

## ✨ 功能特色

- 🎤 **语音录制** - 实时录制和回放您的口语练习
- 📚 **题库完整** - 涵盖雅思口语 Part 1、Part 2、Part 3 的精选题库
- 📊 **进度追踪** - 智能记录您的学习数据和进度
- 📱 **响应式设计** - 支持桌面、平板和手机等多种设备
- 🔥 **每日打卡** - 坚持练习，连续打卡获得成就
- 🏆 **成就系统** - 通过完成任务获得徽章和奖励

## 🚀 快速开始

### 前置要求
- Node.js 14.0 或更高版本
- npm 6.0 或更高版本

### 安装和运行

```bash
# 克隆仓库
git clone https://github.com/770504/oral-daily-practice.git

# 进入项目目录
cd oral-daily-practice

# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm build
```

## 📁 项目结构

```
oral-daily-practice/
├── public/
│   ├── index.html          # HTML 入口文件
│   └── favicon.ico         # 网站图标
├── src/
│   ├── components/         # 可复用组件
│   │   └── Header.js       # 头部导航组件
│   ├── pages/              # 页面组件
│   │   ├── Home.js         # 首页
│   │   ├── Practice.js     # 练习页面
│   │   └── Progress.js     # 进度追踪页面
│   ├── App.js              # 应用根组件
│   ├── App.css             # 应用样式
│   ├── index.js            # React 入口
│   └── index.css           # 全局样式
├── package.json            # 项目依赖和脚本
├── .gitignore              # Git 忽略文件
└── README.md               # 项目文档
```

## 🛠️ 技术栈

- **前端框架**: React 18.2+
- **UI 组件库**: Ant Design 5.x
- **路由管理**: React Router v6
- **HTTP 客户端**: Axios
- **图标库**: Ant Design Icons

## 📋 使用指南

### 首页 (Home)
- 查看今日学习统计
- 了解平台功能特色
- 获取学习建议

### 练习 (Practice)
- 选择题型 (Part 1/2/3)
- 按照题目进行口语练习
- 使用麦克风录制您的回答
- 下载或删除音频录制

### 进度 (Progress)
- 查看总体学习统计
- 浏览近期练习记录
- 获取个性化学习建议

## 🔄 发展路线

- [ ] 后端 API 集成
- [ ] 用户认证系统
- [ ] 数据库持久化
- [ ] AI 口语评分
- [ ] 语音识别功能
- [ ] 发音检测
- [ ] 社区交流功能
- [ ] 移动应用版本

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 💬 联系我们

- 提交 [Issues](https://github.com/770504/oral-daily-practice/issues)
- 提交 [Pull Requests](https://github.com/770504/oral-daily-practice/pulls)

## ❤️ 致谢

感谢所有贡献者的支持！让我们一起打造最好的雅思口语练习平台。

---

**口语天天练** - 让雅思口语练习变得简单有趣 🎤✨
