import React from 'react'
import Feedback from './Feedback'

const PraiseGiven = () => {
  return (
   <>
   <Feedback/>
   <div className='p-8'>
      <h1 className='text-2xl font-light px-8'>Praise given</h1>
      <h1 className='text-sm font-light px-8'>This section contains the praises received by me.</h1>
    </div>
    <div className='text-center h-96 border-2'>
      <i className='fa fa-fw fa-trophy text-9xl mt-36'></i>
      <p className='p-4 font-light'>No praises received.Start giving praise to your team members.</p>
    </div>
   </>
  )
}

export default PraiseGiven