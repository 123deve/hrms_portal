import React from 'react';
import { Link } from 'react-router-dom';
import Performance from '../performance/Performance';

const Review = () => {
  return (
    <>
    <Performance/>
    <div className='flex font-light mt-8'>
        <Link className='border-2 py-2 px-6 hover:border-blue-700 mr-6' to='/performance/review/myperformance'>My Performance reviews</Link>
        <Link className='border-2 py-2 px-6 hover:border-blue-700 ' to='/performance/review/reviewgiven'>Reviews given to other</Link>
    </div>
    </>
    
  )
}

export default Review