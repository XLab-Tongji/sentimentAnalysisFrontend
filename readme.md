## 1. 项目描述

本项目作为程序前端，实现基于深度学习的语音情绪分析功能。

后端地址：[后端](https://github.com/haiqihub/Flask_SpeechEmotionRecognition)

## 2. 启动方式
2.1 cd至项目文件夹，启动服务器：

> http-server

2.2 浏览器打开http://localhost:8080/#，启动项目：

![前端图片](https://github.com/XLab-Tongji/sentimentAnalysisFrontend/blob/master/doc/frontend.png)

2.3 点击”开始录音“，开始录音，推荐使用耳机。点击“停止录音”，结束录音。点击“播放”，利用下方的H5空间播放录音。点击“上传”，录音将上传至后端，后端返回情绪预测的结果。

## 3. 其他问题

1. chrome需要开启跨域功能。e.g.,下载浏览器插件Allow-Control-Allow-Origin: *
2. chrome需要同意使用麦克风。
3. chrome需要禁用user gestures: 打开chrome://flags/， 将Autoplay policy项设置为 No user gesture is required.

![](https://github.com/XLab-Tongji/sentimentAnalysisFrontend/blob/master/doc/gestures.png)