import React,{useState} from 'react'
import { Input,DatePicker,Drawer } from "antd";

const PerformanceSidebar = () => {
    const [templateDrawer,setTemplateDrawer] = useState(false);

    const handleTemplate = () => {
        setTemplateDrawer(true);
      };
    
      const handleCloseDrawer = () => {
        setTemplateDrawer(false);
      };

  return (
    <>
    <div className='flex'>
        <div className='w-2/4 pr-4'>
            <Input placeholder='Select employee to have a 1:1' className='p-2 mb-6'/>
            <Input placeholder='Enter meeting title' className='p-2 mb-6'/>
            <DatePicker className='mb-6'/>
            <Input placeholder='Frequency of this meeting' className='p-2 mb-6'/>
        </div>
        <div className='w-2/4 px-4'>
            <p className='text-xl'>Talking Points</p>
            <p className='py-2 font-light'>
            Set an agenda for meeting to be on the same page with your employee.</p>
            <p onClick={handleTemplate}
            className='py-6 text-lg text-blue-400 cursor-pointer'>
            Select from template</p>
        </div>
    </div>

    <Drawer
    title="Select your template"
    placement="right"
    closable={true}
    onClose={handleCloseDrawer}
    visible={templateDrawer}
    width={900}
    >

    </Drawer>
    </>
  )
}

export default PerformanceSidebar