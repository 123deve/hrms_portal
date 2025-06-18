import React from 'react'
import { Link } from 'react-router-dom'

const LeaveHeader = () => {
  return (
    <div>
         <ul className='block md:flex px-8 py-2 text-left border-b-2 bg-green-200'>
               <div>
                 <Link to="/me"><li className=' mr-2 md:mr-10 text-sm font-bold hover:bg-green-400 '>LEAVE</li></Link></div>
               <div>
                 <li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400 '>TIMESHEET</li></div>
               <div> 
                <li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400 '>ATTENDANCE</li></div>
               <div>
                 <Link to="/performance"><li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400'>PERFORMANCE</li></Link></div>
               <div>
                 <Link to="/expense&travel"><li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400 '>EXPENSE & TRAVEL</li></Link></div>
               <div>
                 <Link to="/helpdesk"><li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400 '>HELPDESK</li></Link></div>
               <div>
                 <Link to="/application"><li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400 '>APPS</li></Link></div>
            </ul>
        </div>
  )
}

export default LeaveHeader;