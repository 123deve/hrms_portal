import React from 'react'
import Improvement from './Improvement'

const Completed = () => {
  return (
    <>
    <Improvement/>
    <div className='text-center h-96 border-2'>
      <i className='fa fa-fw fa-history text-9xl mt-36'></i>
      <p className='p-4 font-light'>
      You don’t have any completed PIP yet
      </p>
    </div>
    </>
  )
}

export default Completed