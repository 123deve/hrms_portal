import React from 'react'
import { Link } from 'react-router-dom'
import LeaveHeader from '../LeaveHeader'


const HelpDesk = () => {
  return (
    <>
    <LeaveHeader/>
    <div className='border-b-2 py-2 mt-4 md:flex block font-dark'>
    <Link className='border-2 mr-8 py-2 px-6 hover:border-blue-700' to="/helpdesk/tickets">My Tickets</Link>
    <Link className='border-2 mr-8 py-2 px-6 hover:border-blue-700' to="/helpdesk/follow">Following</Link>
    </div>
    </>
  )
}

export default HelpDesk