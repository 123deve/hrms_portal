import React from 'react'
import { Link } from 'react-router-dom'
import LeaveHeader from '../LeaveHeader'

const ExpensesTravel = () => {
  return (
    <>
    <LeaveHeader/>
    <div className='border-b-2 py-2 mt-4 md:flex block font-light'>
    <Link className='mr-8 py-2' to="/expense&travel/pending">Pending Expenses</Link>
    <Link className='mr-8 py-2' to="/expense&travel/past">Past Claims</Link>
    <Link className='mr-8 py-2'to="/expense&travel/advance">Advance Request</Link>
    </div>
    </>
    
  )
}

export default ExpensesTravel