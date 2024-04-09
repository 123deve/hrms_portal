import React, { useState } from 'react';
import MySunEditor from '../suneditor/MySunEditor';
import Profile from './Profile';

const About = () => {
  const [isEditorOpen1, setIsEditorOpen1] = useState(false);
  const [isEditorOpen2, setIsEditorOpen2] = useState(false);
  const [isEditorOpen3, setIsEditorOpen3] = useState(false);

  const handleOpenEditor1 = () => {
    setIsEditorOpen1(true);
  };

  const handleOpenEditor2 = () => {
    setIsEditorOpen2(true);
  };

  const handleOpenEditor3 = () => {
    setIsEditorOpen3(true);
  };

  const handleCloseEditor1 = () => {
    setIsEditorOpen1(false);
  };

  const handleCloseEditor2 = () => {
    setIsEditorOpen2(false);
  };

  const handleCloseEditor3 = () => {
    setIsEditorOpen3(false);
  };

  return (
    <>
    <Profile/>
    <div className='ml-56'>
      <div className='border-2 md:m-4 m-1'>
        <div className='p-2 md:m-6 mb-10 mt-6 text-sm md:text-lg font-light'>
          <p className='mr-20'>About</p>
          {!isEditorOpen1 && (
            <button className='text-blue-500 border-2 p-2 border-r-4 mt-4' onClick={handleOpenEditor1}>
              Add your response
            </button>
          )}
          {isEditorOpen1 && <MySunEditor onCancel={handleCloseEditor1}/>}
          <p className='mr-20 mt-10'>What I love about my job?</p>
          {!isEditorOpen2 && (
            <button className='text-blue-500 border-2 p-2 border-r-4 mt-4' onClick={handleOpenEditor2}>
              Add your response
            </button>
          )}
          {isEditorOpen2 && <MySunEditor onCancel={handleCloseEditor2}/>}
          <p className='mr-20 mt-10'>My interests and hobbies</p>
          {!isEditorOpen3 && (
            <button className='text-blue-500 border-2 p-2 border-r-4 mt-4' onClick={handleOpenEditor3}>
              Add your response
            </button>
          )}
          {isEditorOpen3 && <MySunEditor onCancel={handleCloseEditor3}/>}
        </div>
      </div>
      </div> 
    </>
  );
};

export default About;
