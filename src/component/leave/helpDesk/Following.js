import React from 'react'
import HelpDesk from './HelpDesk'

const Following = () => {
  return (
    <>
    <HelpDesk/>
    <div className='py-4 flex justify-between mt-8'>
      <div>
      <h1 className='text-2xl font-light px-8 py-2'>Closed Tickets</h1>
      <h1 className='text-sm font-light px-8'>These are the open tickets in which you are added as follower.</h1>
      </div>
      </div>
    </>
  )
}

export default Following