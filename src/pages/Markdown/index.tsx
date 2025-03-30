import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor: React.FC = () => {
  const [value, setValue] = useState<string>('# 欢迎使用 Markdown 编辑器');

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Markdown 编辑器</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">编辑区域</h2>
          <MDEditor
            value={value}
            onChange={(val) => setValue(val || '')}
            preview="edit"
            height={400}
          />
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">预览区域</h2>
          <div className="prose max-w-none">
            <ReactMarkdown>{value}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;