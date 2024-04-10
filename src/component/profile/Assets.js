import React from 'react'
import Profile from './Profile'

const Assets = () => {
  return (
    <>
    <Profile/>
    <div className='border-2 md:mt-5'>
        <h1 className='px-4 py-2 text-sm md:text-3xl'>Assigned Assets</h1>
        <p className='px-4'>Assets that are currently assigned to you</p>
        <div className='md:flex justify-between border-2 p-2 m-2 mb-10 md:mb-20 mt-6 md:mt-10 text-sm font-light'>
            <p className='mr-16'>ASSET TYPE</p>
            <p className='mr-16'>ASSET NAME</p>
            <p className='mr-16'>ASSET ID</p>
            <p className='mr-16'>ASSEST CATEGORY</p>
            <p className='mr-16'>ASSIGNED ON</p>
            <p className='mr-16'>ACKNOWLEDGEMENT STATUS</p>
            <p className='mr-16'>CURRENT CONDITION</p>
        </div>
    </div>
    </>
  )
}

export default Assets