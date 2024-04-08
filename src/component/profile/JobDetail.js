import React from 'react'

const JobDetail = () => {
  return (
    <>
    <div className='border-2 md:mt-10 m-6'>
        <h1 className='border-b-2 p-2 m-6 text-sm md:text-lg'>Job Details</h1>
        <div className='md:flex p-2 m-6 mb-10 md:mb-20 mt-6 md:mt-10 text-sm md:text-lg font-light'>
            <p className='mr-20'>EMPLOYEE NUMBER</p>
            <p className='mr-20'>DATE OF JOINING</p>
            <p className='mr-20'>JOB TITLE- PRIMARY</p>
            <p className='mr-20'>JOB TITLE- SECONDARY</p>
            <p className='mr-20'>IN PROBATION?</p>
        </div>
        <div className='md:flex p-2 m-6 md:mb-20 text-sm md:text-lg font-light'>
            <p className='mr-20'>NOTICE PERIOD</p>
            <p className='mr-20'>WORKER TYPE</p>
            <p className='mr-20'>TIME TYPE</p>
            <p className='mr-20'>CONTRACT STATUS</p>
            <p className='mr-20'>PAY BAND</p>
            <p className='mr-20'>PAY GRADE</p>
        </div>
    </div>

    <div className='border-2 md:mt-10 m-6'>
        <h1 className='border-b-2 p-2 m-6 text-sm md:text-lg'>EMPLOYEE TIME</h1>
        <div className='md:flex p-2 m-6 mb-10 md:mb-20 mt-6 md:mt-10 text-sm md:text-lg font-light'>
            <p className='mr-20'>SHIFT</p>
            <p className='mr-20'>WEEKLY OFF POLICY</p>
            <p className='mr-20'>LEAVE PLAN</p>
            <p className='mr-20'>HOLIDAY CALENDER</p>
            <p className='mr-20'>ATTENDANCE NUMMBER</p>
        </div>
    </div>

    <div className='border-2 md:mt-10 m-6'>
        <h1 className='border-b-2 p-2 m-6 text-sm md:text-lg'>OTHER</h1>
        <div className='md:flex p-2 m-6 mb-10 md:mb-20 mt-6 md:mt-10 text-sm md:text-lg font-light'>
            <p className='mr-20'>EXPENSE POLICY</p>
            <p className='mr-20'>LOAN POLICY</p>
            <p className='mr-20'>TIMESHEET POLICY</p>
        </div>
    </div>
    </>
  )
}

export default JobDetail