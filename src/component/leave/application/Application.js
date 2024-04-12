import React from 'react';
import LeaveHeader from '../LeaveHeader';
import applicationData from './applicationData';

const Application = () => {
  return (
    <>
    <LeaveHeader/>
    <div className='py-4 flex justify-between mt-8'>
      <div>
      <h1 className='text-2xl font-light px-8 py-2'>App Registration</h1>
      <h1 className='text-sm font-light px-8'>Third party app registration to make best use of Keka</h1>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {applicationData.map((app, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
            <img src={app.imageUrl} alt={app.name} className="w-1/4 h-auto mb-4" style={{ maxHeight: '200px' }} />
            <h2 className="text-xl font-bold mb-2">{app.name}</h2>
            <p className="text-gray-600 mb-2">{app.powered}</p>
            <p className="text-gray-700 mb-4">{app.description}</p> 
          <button className='border-2 p-2 px-4 bg-blue-300 rounded-lg'>Connect</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Application