import React, { useState, useCallback } from 'react';
import AddChannel from './AddChannel'; // 引入 AddChannel 组件

export default function App() {
  const [channels, setChannels] = useState([]);

  // 定义 onSubmit 函数
  const onSubmit = useCallback((channel) => {
    setChannels((prevChannels) => [...prevChannels, channel]);
  }, []);

  return (
    <div>
      <h1>React 组件结构测试</h1>
      <p>这是主应用的入口组件</p>
      {/* 正确传递 onSubmit */}
      <AddChannel cssClass="col s6" onSubmit={onSubmit} />
      
      {/* 这里没有必要重复 AddChannel */}
      <ul>
        {channels.map((channel, index) => (
          <li key={index}>{channel}</li>
        ))}
      </ul>
    </div>
  );
}
