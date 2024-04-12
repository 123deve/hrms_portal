import React,{useState} from 'react'
import HelpDesk from './HelpDesk';
import { Button,Drawer } from 'antd';

const Tickets = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handlePlanMeeting = () => {
    setIsDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <>
    <HelpDesk/>
    <div className='py-4 flex justify-between'>
      <div>
      <h1 className='text-2xl font-light px-8 py-2'>Open Tickets</h1>
      <h1 className='text-sm font-light px-8'>These are your tickets that are yet to be addressed.</h1>
      </div>
      <div>
      <Button
      type='primary'
      size='large'
      onClick={handlePlanMeeting}
      >+ New Ticket</Button>
      </div>
    </div>
    <Drawer
        title="Raise a ticket"
        placement="right"
        closable={true}
        onClose={handleCloseDrawer}
        visible={isDrawerVisible}
        width={700}
      >
      </Drawer>
    </>
  )
}

export default Tickets