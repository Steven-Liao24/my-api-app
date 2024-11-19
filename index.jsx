import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18 使用 createRoot
import App from './app/components/app'; // 引入主应用组件

const container = document.getElementById('root');
const root = createRoot(container); // 使用 React 18 的 createRoot
root.render(<App />);
