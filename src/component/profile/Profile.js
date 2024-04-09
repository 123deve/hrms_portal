import React from 'react'
//import ProfileDetail from './ProfileDetail'
//import About from './About'
import Assets from './Assets'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div className='ml-52 md:mt-0'>
    <div className='md:flex p-2 m-6 border-b-2 border-t-2'>
        <div>
          <img
          className='w-full md:w-3/4'
          src='https://www.shutterstock.com/image-photo/close-head-shot-confident-serious-260nw-1481322794.jpg'
          />
        </div>

        <div>
          <h1 className='mb-6 text-sm md:text-lg font-light'>Akhilesh Rajak</h1>
          <div className='md:flex text-sm md:text-lg font-light border-b-2'>
            <p className='mr-10'>Associate Software engineer</p>
            <p className='mr-10'>akhilesh@ingeniousolution.com</p>
            <p className='mr-10'>9098354440</p>
            <p className='mr-10'>ingeniousolution</p>
            <p className='mr-10'>#1110</p>
          </div>

          <div className='md:flex md:mt-10 mt-4 text-sm font-light'>
          <p className='mr-20'>BUSINESS UNIT</p>
          <p className='mr-20'>DEPARTMENT</p>
          <p className='mr-20'>REPORTING MANAGER</p>
        </div>
        </div>
    </div>
     <div className='flex p-2 ml-6 border-b-2 text-sm font-light'>
     <Link className='md:mr-20 mr-4' to='/about'>ABOUT</Link>
     <Link className='md:mr-20 mr-4' to='/profileDetail'>PROFILE</Link>
     <Link className='md:mr-20 mr-4'to='/job'>JOB</Link>
     <a className='md:mr-20 mr-4' href='#'>DOCUMENTS</a>
     <Link className='md:mr-20 mr-4' to='/assets'>ASSETS</Link>
   </div>
   </div>
   </>
  )
}

export default Profile