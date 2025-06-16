import React from 'react'
import { Link } from 'react-router-dom'
import Performance from '../performance/Performance'

const Feedback = () => {
  return (
    <>
    <Performance/>
    <div className='md:flex block justify-around font-light mt-8 '>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/feedback/praise'>Praise Recieved</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/feedback/feedrecieve'>Feedback Recieved</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/feedback/praisegiven'>Praise Given</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to="/performance/feedback/feedgiven">Feedback Given</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/feedback/internal'>Internal notes</Link>
    </div>
    </>
  )
}

export default Feedback