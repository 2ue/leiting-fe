import { useState, useCallback } from 'react';

export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  size?: string;
  modifiedDate: string;
  path: string;
}

export const useFileManager = () => {
  const [files] = useState<FileItem[]>([
    {
      id: '1',
      name: '文档',
      type: 'folder',
      modifiedDate: '2024-01-20',
      path: '/文档'
    },
    {
      id: '2',
      name: '项目.txt',
      type: 'file',
      size: '1.2MB',
      modifiedDate: '2024-01-19',
      path: '/项目.txt'
    }
  ]);

  const searchFiles = useCallback((searchTerm: string) => {
    if (!searchTerm) return files;
    return files.filter(file =>
      file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [files]);

  const handleFileClick = useCallback((file: FileItem) => {
    // TODO: 实现文件点击逻辑
    console.log('Clicked file:', file);
  }, []);

  return {
    files,
    searchFiles,
    handleFileClick
  };
};