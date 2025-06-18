import React from 'react'
import Performance from '../performance/Performance'

const Competencies = () => {
  return (
    <>
    <Performance/>
    <div className='py-8'>
      <h1 className='text-2xl font-dark px-6'>Competencies</h1>
      <h1 className='text-sm font-light px-6'>These are the competencies expected out of me.</h1>
    </div>
    <div className='text-center h-96 border-2'>
      <i className='fa fa-fw fa-random text-9xl mt-36'></i>
      <p className='p-4 font-light'>There are no competencies assigned.</p>
    </div>
    </>
  )
}

export default Competencies