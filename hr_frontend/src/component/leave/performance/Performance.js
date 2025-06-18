import React from 'react'
import { Link } from 'react-router-dom'
import LeaveHeader from '../LeaveHeader';

const Performance = () => {
  return (
    <>
    <LeaveHeader/>
    <div className='border-b-2 py-2 mt-4 md:flex block justify-around font-dark'>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/objective'>Objective</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/meeting'>1:1 Meetings</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/feedback'>Continous Feedback</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to="/performance/review">Reviews</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/competencies'>Competencies & Core values</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700' to='/performance/improvement'>Performance Improvement Plan (PIP)</Link>
    </div>
    </>
  )
}

export default Performance;