import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface SearchResult {
  id: string;
  title: string;
  type: 'file' | 'folder';
  path: string;
}

const GlobalSearch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl + K 或 Command + K 唤起搜索
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsVisible(true);
      }
      // ESC 关闭搜索
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    // 点击外部关闭搜索框
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    // TODO: 实现搜索逻辑
    const mockResults: SearchResult[] = [
      { id: '1', title: '示例文件.txt', type: 'file', path: '/文档/示例文件.txt' },
      { id: '2', title: '项目文件夹', type: 'folder', path: '/项目文件夹' },
    ];
    setResults(mockResults);
  };

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'default' ? 'compact' : 'default'));
  };

  if (!isVisible) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
      <div
        ref={searchRef}
        className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <div className="p-4">
          <button
            onClick={handleThemeToggle}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            切换主题
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="搜索文件或文件夹 (Ctrl + K)"
            className={`w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'compact' ? 'text-sm' : 'text-lg'}`}
            autoFocus
          />
        </div>
        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto border-t border-gray-200">
            {results.map((result) => (
              <div
                key={result.id}
                className="p-3 hover:bg-gray-50 cursor-pointer flex items-center"
              >
                <span className="material-icons mr-2">
                  {result.type === 'folder' ? 'folder' : 'description'}
                </span>
                <div>
                  <div className="font-medium">{result.title}</div>
                  <div className="text-sm text-gray-500">{result.path}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default GlobalSearch;