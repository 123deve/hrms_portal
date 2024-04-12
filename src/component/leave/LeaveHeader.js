import React from 'react'
import { Link } from 'react-router-dom'

const LeaveHeader = () => {
  return (
    <div>
            <ul className='block md:flex px-2 py-2 text-left border-b-2'>
                <Link to="/me"><li className='mr-2 md:mr-10 text-sm font-thin cursor-pointer '>LEAVE</li></Link>
                <li className='mr-2 md:mr-10 text-sm font-thin cursor-pointer '>TIMESHEET</li>
                <li className='mr-2 md:mr-10 text-sm font-thin cursor-pointer '>ATTENDANCE</li>
                <Link to="/performance"><li className='mr-2 md:mr-10 text-sm font-thin cursor-pointer '>PERFORMANCE</li></Link>
                <Link to="/expense&travel"><li className='mr-2 md:mr-10 text-sm font-thin cursor-pointer '>EXPENSE & TRAVEL</li></Link>
                <li className='mr-2 md:mr-10 text-sm font-thin cursor-pointer '>HELPDESK</li>
                <li className='mr-2 md:mr-10 text-sm font-thin cursor-pointer '>APPS</li>
            </ul>
        </div>
  )
}

export default LeaveHeader;