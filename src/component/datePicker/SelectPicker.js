import React, { useState } from 'react';
import { Select, Space } from 'antd';

const options = [
    { value: 'Select', label: 'Select' },
    { value: 'Payroll', label: 'Payroll' },
    { value: 'Outside Payroll', label: 'Outside Payroll' }
  ];

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const SelectPicker = () => {
  const [size, setSize] = useState('large');
  
  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Select
          size={size}
          defaultValue="Select"
          onChange={handleChange}
          style={{
            width: 200,
          }}
          options={options}
        />
      </Space>
    </>
  );
};
export default SelectPicker;