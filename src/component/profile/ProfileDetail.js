import React,{useState} from 'react'
import Profile from './Profile'
import { Drawer } from 'antd'
import PrimaryDrawer from './PrimaryDrawer';
import ContactDrawer from './ContactDrawer';
import EducationDrawer from './EducationDrawer';

const ProfileDetail = () => {
  const [isPrimaryDrawerVisible, setIsPrimaryDrawerVisible] = useState(false);
  const [isContactDrawerVisible, setIsContactDrawerVisible] = useState(false);
  const [isEducationDrawerVisible, setIsEducationDrawerVisible] = useState(false);

  const handleEditPrimary = () => {
    setIsPrimaryDrawerVisible(true);
  };

  const handleEditContact = () => {
    setIsContactDrawerVisible(true);
  };

  const handleEditEducation = () => {
    setIsEducationDrawerVisible(true);
  };

  const handleClose = () => {
    setIsPrimaryDrawerVisible(false);
    setIsContactDrawerVisible(false);
    setIsEducationDrawerVisible(false);
  };
  return (
    <>
    <Profile/>
    <div className='border-2 md:mt-5'>
       <div className='flex justify-between py-2 px-6'>
        <h1 className='border-b-2 py-4 text-sm md:text-lg'>PRIMARY DETAILS</h1>
         <button onClick={handleEditPrimary}
         className='text-lg text-blue-400'>Edit
         </button>
         </div>
        <div className='md:flex justify-between p-2 m-6 mb-10 md:mb-20 mt-6 md:mt-10 text-sm font-light'>
            <p className='mr-20'>FIRST NAME</p>
            <p className='mr-20'>MIDDLE NAME</p>
            <p className='mr-20'>LAST NAME</p>
            <p className='mr-20'>DISPLAY NAME</p>
            <p className='mr-20'>GENDER</p>
        </div>
        <div className='md:flex p-2 m-6 md:mb-20 text-sm justify-between font-light'>
            <p className='mr-20'>DATE OF BIRTH</p>
            <p className='mr-20'>MARITAIL STATUS</p>
            <p className='mr-20'>BLOOD GROUP</p>
            <p className='mr-20'>PHYSICALLY HANDICAPPED</p>
            <p className='mr-20'>NATIONALITY</p>
        </div>
    </div>

    <div className='border-2 md:mt-5'>
    <div className='flex justify-between py-2 px-6'>
        <h1 className='border-b-2 py-4 text-sm md:text-lg'>CONTACT DETAILS</h1>
         <button onClick={handleEditContact}
         className='text-lg text-blue-400'>Edit
         </button>
         </div>
        <div className='md:flex p-2 m-6 mb-10 md:mb-20 mt-6 md:mt-10 text-sm justify-between font-light'>
            <p className='mr-20'>WORK EMAIL</p>
            <p className='mr-20'>PERSONAL EMAIL</p>
            <p className='mr-20'>MOBILE PHONE</p>
            <p className='mr-20'>EMERGRNCY CONTACT 1 NAME</p>
            <p className='mr-20'>GENDER</p>
        </div>
        <div className='md:flex p-2 m-6 md:mb-10 text-sm justify-between font-light'>
            <p className='mr-20'>DATE OF BIRTH</p>
            <p className='mr-20'>MARITAIL STATUS</p>
            <p className='mr-20'>BLOOD GROUP</p>
            <p className='mr-20'>PHYSICALLY HANDICAPPED</p>
            <p className='mr-20'>NATIONALITY</p>
        </div>
    </div>

    <div className='border-2 md:mt-5'>
    <div className='flex justify-between py-2 px-6'>
        <h1 className='border-b-2 py-4 text-sm md:text-lg'>EDUCATION</h1>
         <button onClick={handleEditEducation}
         className='text-lg text-blue-400'>Edit
         </button>
         </div>
        <div className='md:flex p-2 m-6 mb-10 md:mb-20 mt-6 md:mt-10 text-sm justify-between font-light'>
            <p className='mr-20'>BRANCH/SPECAILIZATION</p>
            <p className='mr-20'>CGPA/PRECENTAGE</p>
            <p className='mr-20'>DEGREE</p>
            <p className='mr-20'>UNIVERSITY/COLLEGE</p>
            <p className='mr-20'>YEAR OF COMPLETION</p>
            <p className='mr-20'>YEAR OF JOINING</p>
        </div>
    </div>
    <Drawer
        title="Update Your Details"
        placement="right"
        closable={true}
        onClose={handleClose}
        visible={isPrimaryDrawerVisible || isContactDrawerVisible || isEducationDrawerVisible}
        width={700}
      >
        {isPrimaryDrawerVisible && <PrimaryDrawer />}
        {isContactDrawerVisible && <ContactDrawer />}
        {isEducationDrawerVisible && <EducationDrawer />}
      </Drawer>
    </>
  )
}

export default ProfileDetail