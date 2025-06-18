import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const SearchPicker = () => (
  <>
    <Input size="large" className='mt-6 px-4'
    placeholder="Search" prefix={<SearchOutlined />} />
  </>
);
export default SearchPicker;