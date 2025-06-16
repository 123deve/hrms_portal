import React from 'react'
import LeaveHeader from './LeaveHeader';

const Leave = () => {
  return (
    <div>
        <LeaveHeader/>
        <div className='px-2 py-2 border-b-2'>
            <h2 className='text-left text-lg font-thin'>Summary</h2>
        </div>
        <div className='md:flex justify-between py-4 text-lg md:text-2xl font-thin border-b-2'>
            <p>Pending leave requests</p>
            <select className='p-2 m-2'> 
                <option className='text-lg'>Jan 2024 - Dec 2024</option>
                <option className='text-lg'>Jan 2023 - Dec 2023</option>
                <option className='text-lg'>Jan 2022 - Dec 2022</option>
            </select>
        </div>

        <h1 className='px-2 py-4 text-left md:text-2xl text-lg'>Leave Balances</h1>

        <div className='block md:flex'>
        <div className='md:mb-0 mb-4 m-4 md:m-0'>
            <div className='h-64 border-2'>
                <div className='flex justify-between p-2 m-2'>
                    <h1>Paid Leave</h1>
                    <h1 className='text-blue-400'>View Detail</h1>
                </div>
            </div>
            <div className='flex justify-around border-2 p-2'>
                <h1 className='p-2 m-2 font-thin text-sm'>AVAILABLE</h1>
                <h1 className='p-2 m-2 font-thin text-sm'>CONSUMED</h1>
            </div>
            <div className='flex justify-around border-2 p-2'>
                <h1 className='p-2 m-2 font-thin text-sm'>ACCRUED SO</h1>
                <h1 className='p-2 m-2 font-thin text-sm'>CARRYOVER</h1>
                <h1 className='p-2 m-2 font-thin text-sm'>ANNUAL QUOTA</h1>
            </div>
        </div>

        {/* <div className='md:mb-0 mb-4 md:m-0'>
            <div className='h-64 border-2'>
            <div className='flex justify-between p-2 m-2'>
                    <h1>Paid Leave</h1>
                    <h1 className='text-blue-400'>View Detail</h1>
                </div>
            </div>
            <div className='flex justify-around border-2 p-2'>
                <h1 className='p-2 m-2 font-thin text-sm'>AVAILABLE</h1>
                <h1 className='p-2 m-2 font-thin text-sm'>CONSUMED</h1>
            </div>
            <div className='flex justify-around border-2 p-2'>
                <h1 className='p-2 m-2 font-thin text-sm'>ACCRUED SO</h1>
                <h1 className='p-2 m-2 font-thin text-sm'>CARRYOVER</h1>
                <h1 className='p-2 m-2 font-thin text-sm'>ANNUAL QUOTA</h1>
            </div>
        </div> */}
        </div>

        <h1 className='px-2 py-4 text-left md:text-2xl text-lg'>Leave History</h1>
        <div className='md:flex p-2 m-2 border-2'>
            <div className='p-2 m-2 border-2'>
                <select className="p-2 w-full">
                    <option>Leave Type</option>
                    <option>Paid Leave</option>
                    <option>Unpiad Leave</option>
                </select>
            </div>
            <div className='p-2 m-2 border-2'>
                <select className="p-2 w-full">
                    <option>Status</option>
                    <option>Approved</option>
                    <option>Cancelled</option>
                    <option>Rejected</option>
                </select>
            </div>
            <div className='p-2 m-2'>
                <input
                placeholder='Search........'
                className='p-2 border-2 w-full'
                />
            </div>
        </div>
        <div className='p-2 m-2 border-2'>
                <h1 className='p-2 m-2 text-end'>Total Count : </h1>
        </div>
    </div>
  )
}

export default Leave;