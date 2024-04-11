import React from 'react'
import Feedback from './Feedback'

const InternalNotes = () => {
  return (
    <>
    <Feedback/>
    <div className='p-8'>
      <h1 className='text-2xl font-light px-8'>Internal notes</h1>
      <h1 className='text-sm font-light px-8'>Below are the internal notes taken by me for others.</h1>
    </div>
    <div className='text-center h-96 border-2'>
      <i className='fa fa-fw fa-pencil-square text-9xl mt-36'></i>
      <p className='p-4 font-light'>You haven't taken any internal notes
You can start by taking an internal note from the employee’s profile</p>
    </div>
    </>
  )
}

export default InternalNotes