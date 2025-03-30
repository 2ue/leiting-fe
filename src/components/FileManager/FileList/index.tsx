import React from 'react';

interface FileItem {
  name: string;
  type: 'file' | 'folder';
  size?: string;
  modifiedDate: string;
}

interface FileListProps {
  files: FileItem[];
  onFileClick: (file: FileItem) => void;
}

const FileList: React.FC<FileListProps> = ({ files, onFileClick }) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-12 gap-4 p-3 bg-gray-100 font-semibold text-gray-700">
          <div className="col-span-6">名称</div>
          <div className="col-span-2">类型</div>
          <div className="col-span-2">大小</div>
          <div className="col-span-2">修改日期</div>
        </div>
        <div className="divide-y divide-gray-200">
          {files.map((file, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-4 p-3 hover:bg-gray-50 cursor-pointer"
              onClick={() => onFileClick(file)}
            >
              <div className="col-span-6 flex items-center">
                <span className="material-icons mr-2">
                  {file.type === 'folder' ? 'folder' : 'description'}
                </span>
                {file.name}
              </div>
              <div className="col-span-2">{file.type === 'folder' ? '文件夹' : '文件'}</div>
              <div className="col-span-2">{file.size || '-'}</div>
              <div className="col-span-2">{file.modifiedDate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileList;