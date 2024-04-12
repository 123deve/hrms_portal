import React from 'react';
import ExpensesTravel from './ExpensesTravel';
import DateRangePicker from '../../datePicker/DateRangePicker';
import SelectPicker from '../../datePicker/SelectPicker';
import SearchPicker from '../../datePicker/SearchPicker';

const PastClaim = () => {
  return (
    <>
    <ExpensesTravel/>
    <div>
      <h1 className='text-2xl font-light mt-8 px-8'>Past Expense Claims</h1>
      <h1 className='text-sm font-light px-8'>Following are the expense claims that are paid already.</h1>

      <div className='flex'>
        <div>
        <DateRangePicker/>
        </div>
        <div className='mt-6'>
        <SelectPicker/>
        </div>
        <div>
          <SearchPicker/>
        </div>
      </div>

      <div className='px-6 py-6 border-2 mt-2 font-light'>
      <div className='bg-blue-100 px-4 py-4'><h1>No past claims to show within the date range selected.</h1></div>
    </div>
    </div>

    <div>
      <h1 className='text-2xl font-light mt-8 px-8'>Past Advance Settlements</h1>
      <h1 className='text-sm font-light px-8'>Following are the expense claims that are paid already.</h1>

      <div className='flex'>
        <div>
        <DateRangePicker/>
        </div>
        <div className='mt-6'>
        <SelectPicker/>
        </div>
        <div>
          <SearchPicker/>
        </div>
      </div>

      <div className='px-6 py-6 border-2 mt-2 font-light'>
      <div className='bg-blue-100 px-4 py-4'><h1>No past claims to show within the date range selected.</h1></div>
    </div>
    </div>
    </>
  )
}

export default PastClaim