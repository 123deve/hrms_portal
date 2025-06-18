import React from 'react'
import { Link } from 'react-router-dom'
import Performance from '../performance/Performance'

const Improvement = () => {
  return (
    <>
    <Performance/>
    <div className='flex font-light mt-8'>
        <Link className='border-2 py-2 px-6 mr-6 hover:border-blue-700' to='/performance/improvement/process'>In Process</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/improvement/completed'>Completed</Link>
    </div>
    </>
  )
}

export default Improvement;