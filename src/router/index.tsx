import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Menu from '@/pages/Menu';
import FileManager from '@/pages/FileManager';
import Settings from '@/pages/Settings';
import MarkdownEditor from '@/pages/Markdown';
import Draw from '@/pages/Draw';
import MindMap from '@/pages/MindMap';
import TagManager from '@/pages/TagManager';

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
        element: <Menu />,
      },
      {
        path: 'files',
        element: <FileManager />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'markdown',
        element: <MarkdownEditor />,
      },
      {
        path: 'draw',
        element: <Draw />,
      },
      {
        path: 'mindmap',
        element: <MindMap />,
      },
      {
        path: 'tags',
        element: <TagManager />,
      },
    ],
  },
]);