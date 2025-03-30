import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import FileManager from '@/pages/FileManager';

// 页面组件
const Home = () => <div>首页</div>;
const About = () => <div>关于我们</div>;

// 路由配置
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'files',
        element: <FileManager />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);