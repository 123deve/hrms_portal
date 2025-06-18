import React from 'react';
import { Input, DatePicker, Button } from 'antd';

const ObjectiveSidebar = ({ title, setTitle, date, setDate, description, setDescription, handleAddObjective }) => {
  return (
    <div>
      <Input
        placeholder='Enter Objective title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='p-2 mb-6'
      />
      <DatePicker
        value={date}
        onChange={(value) => setDate(value)}
        className='mb-6 w-full'
      />
      <Input.TextArea
        rows={4}
        placeholder='Write your objective'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='p-2 mb-6'
      />
      <Button type='primary' onClick={handleAddObjective}>
        Submit Objective
      </Button>
    </div>
  );
};

export default ObjectiveSidebar;
