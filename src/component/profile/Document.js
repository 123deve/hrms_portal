import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const Documents = () => {
  return (
    <>
    <Profile/>
      <div className='md:mt-16'>
        <div className='shadow-lg rounded-lg overflow-hidden'>
          <table className='min-w-full bg-white'>
            <thead className='bg-gray-800 text-white'>
              <tr>
                <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Document Name</th>
                <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Date Uploaded</th>
                <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Actions</th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              <tr>
                <td className='text-left py-3 px-4'>Resume.pdf</td>
                <td className='text-left py-3 px-4'>2024-01-12</td>
                <td className='text-left py-3 px-4'>
                  <a href="#" className='text-blue-500 hover:text-blue-700'>View</a>
                </td>
              </tr>
              <tr className='bg-gray-100'>
                <td className='text-left py-3 px-4'>OfferLetter.pdf</td>
                <td className='text-left py-3 px-4'>2024-01-10</td>
                <td className='text-left py-3 px-4'>
                  <a href="#" className='text-blue-500 hover:text-blue-700'>View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Documents;
