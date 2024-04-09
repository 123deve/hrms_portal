import React from 'react'
import Profile from './Profile'

const Assets = () => {
  return (
    <>
    <Profile/>
    <div className='m-56 mt-0'>
    <div className='border-2 md:mt-10 m-6'>
        <h1 className='m-6 text-sm md:text-3xl'>Assigned Assets</h1>
        <p className='m-6'>Assets that are currently assigned to you</p>
        <div className='md:flex justify-between border-2 p-4 m-6 mb-10 md:mb-20 mt-6 md:mt-10 text-sm font-light'>
            <p className='mr-16'>ASSET TYPE</p>
            <p className='mr-16'>ASSET NAME</p>
            <p className='mr-16'>ASSET ID</p>
            <p className='mr-16'>ASSEST CATEGORY</p>
            <p className='mr-16'>ASSIGNED ON</p>
            <p className='mr-16'>ACKNOWLEDGEMENT STATUS</p>
            <p className='mr-16'>CURRENT CONDITION</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Assets