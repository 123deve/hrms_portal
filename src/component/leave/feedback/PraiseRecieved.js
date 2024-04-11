import React from 'react'
import Feedback from './Feedback'

const PraiseRecieved = () => {
  return (
    <>
    <Feedback/>
    <div className='p-8'>
      <h1 className='text-2xl font-light px-8'>Praise recieved</h1>
      <h1 className='text-sm font-light px-8'>This section contains the praises received by me.</h1>
    </div>
    <div className='text-center h-96 border-2'>
      <i className='fa fa-fw fa-trophy text-9xl mt-36'></i>
      <p className='p-4 font-light'>No praises received.Keep giving your best, keep working hard.</p>
    </div>
    </>
  )
}

export default PraiseRecieved