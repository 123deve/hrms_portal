import React from 'react'
import Improvement from './Improvement'

const Process = () => {
  return (
   <>
   <Improvement/>
   <div className='text-center h-96 border-2'>
      <i className='fa fa-fw fa-history text-9xl mt-36'></i>
      <p className='p-4 font-light'>
      You're on track

No Performance Improvement Plan (PIP) required. Keep up the great work!
      </p>
    </div>
   </>    
  )
}

export default Process