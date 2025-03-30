import React, { useState } from 'react';
import FileList from '@/components/FileManager/FileList';
import SearchBar from '@/components/FileManager/SearchBar';
import { useFileManager } from '@/modules/FileManager/fileManagerModule';

const FileManager: React.FC = () => {
  const { searchFiles, handleFileClick } = useFileManager();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFiles = searchFiles(searchTerm);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">文件管理</h1>
      </div>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
      />

      <FileList
        files={filteredFiles}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onFileClick={handleFileClick}
      />
    </div>
  );
};

export default FileManager;