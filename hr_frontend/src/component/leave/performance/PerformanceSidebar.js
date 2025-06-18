import React, { useState } from 'react';
import { Input, DatePicker, Drawer, Button } from "antd";
import SelectTempleteSidebar from './SelectTempleteSidebar';

const PerformanceSidebar = ({ onSubmit }) => {
  const [templateDrawer, setTemplateDrawer] = useState(false);
  
  const [formData, setFormData] = useState({
    employee: '',
    title: '',
    date: '',
    frequency: ''
  });

  const handleTemplate = () => {
    setTemplateDrawer(true);
  };

  const handleCloseDrawer = () => {
    setTemplateDrawer(false);
  };

  const handleSubmit = () => {
    if (formData.employee && formData.title && formData.date && formData.frequency) {
      onSubmit({
        ...formData,
        date: formData.date.format('YYYY-MM-DD')
      });
    }
  };

  return (
    <>
      <div className='flex'>
        <div className='w-2/4 pr-4'>
          <Input
            placeholder='Select employee to have a 1:1'
            className='p-2 mb-6'
            value={formData.employee}
            onChange={(e) => setFormData({ ...formData, employee: e.target.value })}
          />
          <Input
            placeholder='Enter meeting title'
            className='p-2 mb-6'
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <DatePicker
            className='mb-6 w-full'
            onChange={(date) => setFormData({ ...formData, date })}
          />
          <Input
            placeholder='Frequency of this meeting'
            className='p-2 mb-6'
            value={formData.frequency}
            onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
          />
          <Button type="primary" onClick={handleSubmit}>
            Submit Meeting
          </Button>
        </div>

        <div className='w-2/4 px-4'>
          <p className='text-xl'>Talking Points</p>
          <p className='py-2 font-light'>
            Set an agenda for meeting to be on the same page with your employee.
          </p>
          <p onClick={handleTemplate} className='py-6 text-lg text-blue-400 cursor-pointer'>
            Select from template
          </p>
        </div>
      </div>

      <Drawer
        title={<div className='font-bold'>Select your template</div>}
        placement="right"
        closable={true}
        onClose={handleCloseDrawer}
        visible={templateDrawer}
        width={900}
        headerStyle={{ backgroundColor: '#16a34a' }} 
      >
        <SelectTempleteSidebar
        onTemplateSelect={(title) => {
        setFormData({ ...formData, title }); 
        setTemplateDrawer(false);            
    }}
   />
      </Drawer>
    </>
  );
};

export default PerformanceSidebar;
