import React from 'react'
import Feedback from './Feedback'

const FeedbackGiven = () => {
  return (
    <>
    <Feedback/>
    <div className='p-8'>
      <h1 className='text-2xl font-light px-8'>Feedback given</h1>
      <h1 className='text-sm font-light px-8'>This section contains the feedbacks given by me.</h1>
    </div>
    <div className='text-center h-96 border-2'>
      <i className='fa fa-fw fa-envelope-open text-9xl mt-36'></i>
      <p className='p-4 font-light'>No feedback given Give feedback to your team</p>
    </div>
    </>
  )
}

export default FeedbackGiven