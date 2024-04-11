import React from 'react'
import { Link } from 'react-router-dom'

const Performance = () => {
  return (
    <>
    <div className='border-b-2 py-2 md:flex block justify-around font-light'>
        <Link to='/performance/objective'>Objective</Link>
        <Link to='/performance/meeting'>1:1 Meetings</Link>
        <Link to='/performance/feedback'>Continous Feedback</Link>
        <Link to="/performance/review">Reviews</Link>
        <Link to='/performance/competencies'>Competencies & Core values</Link>
        <Link to='/performance/improvement'>Performance Improvement Plan (PIP)</Link>
    </div>
    
    </>
  )
}

export default Performance;