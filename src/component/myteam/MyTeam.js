import React from 'react'
import AttendanceCalendar from '../myteam/Attendance'

const MyTeam = () => {
  return (
    <>
    <div className='flex'>
        <div className='px-4 py-6 text-2xl m-2 h-60 w-full border-2 font-light'>
            <h1>Who is off today</h1>
        </div>
        <div className='px-4 py-6 text-2xl m-2 h-60 w-full border-2 font-light'>
            <h1>Not in yet today</h1>
        </div>
    </div>
    <div className='flex'>
        <div className='px-4 py-6 text-lg m-2 h-40 w-full border-2 font-light'>
            <h1>Employess on time today</h1>
        </div>
        <div className='px-4 py-6 text-lg m-2 h-40 w-full border-2 font-light'>
            <h1>Late arrivals today</h1>
        </div>
        <div className='px-4 py-6 text-lg m-2 h-40 w-full border-2 font-light'>
            <h1>Work from home/On duty today</h1>
        </div>
        <div className='px-4 py-6 text-lg m-2 h-40 w-full border-2 font-light'>
            <h1>Remote clock-in today</h1>
        </div>
    </div>
    <div className='px-4 py-6 m-2 h-60 w-full border-2 '>
     <AttendanceCalendar/>
    </div>
    </>
  )
}

export default MyTeam