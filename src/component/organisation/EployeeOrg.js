import React from 'react'
import Organisation from './Organisation'

const EployeeOrg = () => {
  return (
    <>
    <Organisation/>
    <div className='py-8'>
      <h1 className='text-2xl font-light px-6'>Employee Directory</h1>
    </div>
    <div className='border-2 p-8 mb-8'></div>
    <div className='text-center border-2 p-4'>
      <p className='p-4 font-light bg-yellow-100 border-2'>Please select any department or location.</p>
    </div>
    </>
  )
}

export default EployeeOrg