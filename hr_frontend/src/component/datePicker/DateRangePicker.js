import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const DateRangePicker = () => (
  <Space direction="vertical" className='py-6'>
    <RangePicker picker="week" size='large'/>
  </Space>
);

export default DateRangePicker;