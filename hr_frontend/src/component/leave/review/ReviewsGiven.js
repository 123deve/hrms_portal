import React from 'react'
import Review from './Review'

const ReviewsGiven = () => {
  return (
    <>
    <Review/>
    <div className='py-8'>
      <h1 className='text-2xl font-dark px-6'>Reviews Given to Others</h1>
      <h1 className='text-sm font-light px-6'>The following are the reviews that I have submitted for others.</h1>
    </div>
    <div className='text-center h-96 border-2'>
      <i className='fa fa-fw fa-recycle text-9xl mt-36'></i>
      <p className='p-4 font-light'>No Data Available</p>
    </div>
    </>
  )
}

export default ReviewsGiven