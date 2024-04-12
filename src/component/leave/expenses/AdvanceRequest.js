import React from 'react'
import ExpensesTravel from './ExpensesTravel'

const AdvanceRequest = () => {
  return (
    <>
    <ExpensesTravel/>
    <div className='border-2 p-6'>
      <div className='border-2'>
        <h1 className='px-6 py-6 font-light bg-yellow-100'>
        You are not allowed to submit advance requests. Please contact your HR administration to enable advance requests
        </h1>
      </div>
    </div>
    </>
  )
}

export default AdvanceRequest;