import React,{useState} from 'react'
import { Button,Drawer } from 'antd'
import Performance from '../performance/Performance';
import ObjectiveSidebar from './ObjectiveSidebar';

const Objective = () => {
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
    <div className='px-8 py-2'>
      <h1 className='px-4 pt-6 pb-1 text-2xl font-light'>Objectives</h1>
      <h1 className='px-4 text-sm font-light'>Objectives help you define what you want to achieve.</h1>
    </div>
    
    <div className='text-center md:mt-52 mt-30'>
      <i className='fa fa-fw fa-frown-o text-9xl'></i>
      <p className='p-4'>
      There are no objectives added for this time frame.</p>
      <Button
      type='primary'
      size='large'
      onClick={handlePlanMeeting}
      >+ Add Objective</Button>
    </div>
    <Drawer
        title="Schedule 1:1 meeting"
        placement="right"
        closable={true}
        onClose={handleCloseDrawer}
        visible={isDrawerVisible}
        width={700}
      >
        <ObjectiveSidebar/>
      </Drawer>
    </>
  )
}

export default Objective