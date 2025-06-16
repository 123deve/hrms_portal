import React from 'react';
import { Link } from 'react-router-dom';

const Organisation = () => {
  return (
    <div className='bg-green-200'>
            <ul className='block md:flex px-2 py-2 text-left border-b-2'>
                <Link to="/employee"><li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400 '>EMPLOYEES</li></Link>
                <Link to="/document"><li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400'>DOCUMENTS</li></Link>
                <Link to="/engage">  <li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400'>ENGAGE</li></Link>
                <Link to="/hiring">  <li className='mr-2 md:mr-10 text-sm font-bold cursor-pointer hover:bg-green-400'>HIRING</li></Link>
            </ul>
    </div>
  )
}

export default Organisation