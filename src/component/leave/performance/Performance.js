import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Button,Drawer } from 'antd'
import PerformanceSidebar from './PerformanceSidebar';

const Performance = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handlePlanMeeting = () => {
    setIsDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <>
    <div className='ml-52 p-6 m-2 border-b-2 flex justify-around font-light'>
        <Link>Objective</Link>
        <Link>1:1 Meetings</Link>
        <Link>Continous Feedback</Link>
        <Link>Reviews</Link>
        <Link>Competencies & Core values</Link>
        <Link>Performance Improvement Plan (PIP)</Link>
    </div>
    <div className='ml-52 p-6 m-2 text-3xl'>
      <h1>1:1 meetings</h1>
      <p className='text-lg font-light'>
        Meetings which are created by me or which I am a participant will be shown here.</p>
    </div>
    <div className='text-center mt-52'>
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

export default Performance;