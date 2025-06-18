import React from 'react'
import { Link } from 'react-router-dom'
import LeaveHeader from '../LeaveHeader'

const ExpensesTravel = () => {
  return (
    <>
    <LeaveHeader/>
    <div className='border-b-2 py-2 mt-4 md:flex block font-dark'>
    <Link className='border-2 px-6 mr-8 py-2 hover:border-blue-700' to="/expense&travel/pending">Pending Expenses</Link>
    <Link className='border-2 px-6 mr-8 py-2 hover:border-blue-700' to="/expense&travel/past">Past Claims</Link>
    <Link className='border-2 px-6 mr-8 py-2 hover:border-blue-700'to="/expense&travel/advance">Advance Request</Link>
    </div>
    </>
    
  )
}

export default ExpensesTravel