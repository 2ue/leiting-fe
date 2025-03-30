import React, { useState } from 'react';
import { Checkbox, Button, Input, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface Tag {
  id: string;
  name: string;
  group: string;
}

const TagManager: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([
    { id: '1', name: '重要', group: '优先级' },
    { id: '2', name: '紧急', group: '优先级' },
    { id: '3', name: '工作', group: '类型' },
    { id: '4', name: '学习', group: '类型' },
  ]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTag, setEditingTag] = useState<Tag | null>(null);
  const [activeTab, setActiveTab] = useState('优先级');

  // 获取所有分组
  const groups = Array.from(new Set(tags.map(tag => tag.group)));

  // 按分组对标签进行分类
  // const groupedTags = groups.reduce((acc, group) => {
  //   acc[group] = tags.filter(tag => tag.group === group);
  //   return acc;
  // }, {} as Record<string, Tag[]>);

  // 处理标签选择
  const handleTagSelect = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  // 处理批量删除
  const handleBatchDelete = () => {
    if (selectedTags.length === 0) {
      message.warning('请选择要删除的标签');
      return;
    }
    setTags(prev => prev.filter(tag => !selectedTags.includes(tag.id)));
    setSelectedTags([]);
    message.success('删除成功');
  };

  // 处理编辑标签
  const handleEditTag = (tag: Tag) => {
    setEditingTag(tag);
  };

  // 处理保存编辑
  const handleSaveEdit = (tag: Tag, newName: string, newGroup: string) => {
    setTags(prev =>
      prev.map(t =>
        t.id === tag.id
          ? { ...t, name: newName, group: newGroup }
          : t
      )
    );
    setEditingTag(null);
    message.success('更新成功');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">标签管理</h1>

      {/* 工具栏 */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={handleBatchDelete}
            disabled={selectedTags.length === 0}
          >
            批量删除
          </Button>
        </div>
        <Input.Search
          placeholder="搜索标签"
          className="w-64"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 标签页导航 */}
      <div className="flex border-b border-gray-200 mb-6">
        {groups.map(group => (
          <button
            key={group}
            className={`py-2 px-4 font-medium transition duration-200 ease-in-out ${activeTab === group ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'}`}
            onClick={() => setActiveTab(group)}
          >
            {group}
          </button>
        ))}
      </div>

      {/* 标签列表 */}
      <div className="bg-white rounded-lg shadow transition-all duration-300 ease-in-out">
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tags
              .filter(tag => tag.group === activeTab && tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(tag => (
                <div
                  key={tag.id}
                  className={`flex items-center justify-between p-3 rounded-lg border transition duration-200 ease-in-out ${selectedTags.includes(tag.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'}`}
                >
                  <div className="flex items-center">
                    <Checkbox
                      checked={selectedTags.includes(tag.id)}
                      onChange={() => handleTagSelect(tag.id)}
                      className="mr-3"
                    />
                    {editingTag?.id === tag.id ? (
                      <Input
                        defaultValue={tag.name}
                        size="small"
                        onPressEnter={(e) => {
                          const target = e.target as HTMLInputElement;
                          handleSaveEdit(tag, target.value, tag.group);
                        }}
                        onBlur={(e) => handleSaveEdit(tag, e.target.value, tag.group)}
                        autoFocus
                        className="transition-all duration-200 ease-in-out"
                      />
                    ) : (
                      <span className="text-gray-700">{tag.name}</span>
                    )}
                  </div>
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => handleEditTag(tag)}
                    className="hover:text-blue-600 transition-colors duration-200"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagManager;