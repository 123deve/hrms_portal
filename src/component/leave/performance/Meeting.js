import React,{useState} from 'react'
import { Button,Drawer } from 'antd'
import PerformanceSidebar from './PerformanceSidebar';
import Performance from '../performance/Performance';

const Meeting = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handlePlanMeeting = () => {
    setIsDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <>
    <Performance/>
    <div className='md:px-6 px-2 md:m-4 m-2 text-lg md:text-3xl '>
      <h1>1:1 meetings</h1>
      <p className='md:text-lg text-sm font-light'>
        Meetings which are created by me or which I am a participant will be shown here.</p>
    </div>
    <div className='text-center md:mt-52 mt-30'>
      <i className='fa fa-fw fa-laptop text-9xl'></i>
      <p className='p-4'>
        You don't have any meeting scheduled.Start using 1:1 meetings to have a regular interaction with your managers and peers</p>
      <Button
      type='primary'
      size='large'
      onClick={handlePlanMeeting}
      >Schedule 1:1 meeting</Button>
    </div>
    <Drawer
        title="Schedule 1:1 meeting"
        placement="right"
        closable={true}
        onClose={handleCloseDrawer}
        visible={isDrawerVisible}
        width={700}
      >
        <PerformanceSidebar/>
      </Drawer>
    </>
  )
}

export default Meeting