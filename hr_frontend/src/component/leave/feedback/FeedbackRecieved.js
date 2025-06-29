import React,{useState} from 'react'
import Feedback from './Feedback';
import { Button,Drawer } from 'antd';
import FeedbacjRecivedSidebar from './FeedbacjRecivedSidebar.js';

const FeedbackRecieved = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handlePlanMeeting = () => {
    setIsDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <>
    <Feedback/>
    <div className='p-8'>
      <h1 className='text-2xl font-dark px-8'>Feedbacks Received</h1>
      <h1 className='text-sm font-light px-8'>This section contains the feedbacks that I have received from others.</h1>
    </div>
    <div className='text-center h-96 border-2'>
      <i className='fa fa-fw fa-envelope-open text-9xl mt-24'></i>
      <p className='p-4 font-light'>No feedback received
    Request feedback from your managers and peers</p>
    <Button
      type='primary'
      size='large'
      onClick={handlePlanMeeting}
      >Request Feedback</Button>
    </div>
    
      <Drawer
        title={<div className='font-bold'>Request For Feedback</div>}
        placement="right"
        closable={true}
        onClose={handleCloseDrawer}
        visible={isDrawerVisible}
        width={700}
        headerStyle={{ backgroundColor: '#16a34a' , fontWeight: 'bold' }} 
      >
       <FeedbacjRecivedSidebar/>
      </Drawer>
    </>
  )
}

export default FeedbackRecieved