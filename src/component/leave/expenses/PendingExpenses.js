import React,{useState} from 'react'
import ExpensesTravel from './ExpensesTravel'
import { Button,Drawer } from 'antd';

const PendingExpenses = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handlePlanMeeting = () => {
    setIsDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <>
    <ExpensesTravel/>
    <div className='py-4 flex justify-between border-b-2'>
      <div>
      <h1 className='text-2xl font-light px-8'>Expenses to be Claimed</h1>
      <h1 className='text-sm font-light px-8'>The following are the expenses that you are yet to claim</h1>
      </div>
      <div>
      <Button
      type='primary'
      size='large'
      onClick={handlePlanMeeting}
      >+ Add your Expenses</Button>
      </div>
    </div>
    <div className='px-8 py-6 border-2 font-light'>
    <div className='bg-blue-100 px-4 py-4'><h1>No saved expenses to show.</h1></div>
    </div>

    <div className='py-4 flex justify-between border-b-2 mt-8'>
      <div>
      <h1 className='text-2xl font-light px-8'>Expense claims in process</h1>
      <h1 className='text-sm font-light px-8'>The following are the expense claims that are yet to be approved or yet to be paid are shown here</h1>
      </div>
      </div>
      <div className='px-6 py-6 border-2 font-light'>
      <div className='bg-blue-100 px-4 py-4'><h1>No pending expenses claims to show.</h1></div>
    </div>

    <div className='py-4 flex justify-between border-b-2 mt-6'>
      <div>
      <h1 className='text-2xl font-light px-8'>Advance settlements in process</h1>
      <h1 className='text-sm font-light px-8'>The following are the advance settlements that are yet to be approved or yet to be paid are shown here</h1>
      </div>
      </div>
      <div className='px-6 py-6 border-2 font-light'>
      <div className='bg-blue-100 px-4 py-4'><h1>No pending expenses claims to show.</h1></div>
    </div>
    <Drawer
        title="Update your expenses"
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

export default PendingExpenses;