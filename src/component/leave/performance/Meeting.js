import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import PerformanceSidebar from './PerformanceSidebar';
import Performance from '../performance/Performance';

const Meeting = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [meetings, setMeetings] = useState([]);

  const handlePlanMeeting = () => {
    setIsDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const addMeeting = (meetingData) => {
    setMeetings([...meetings, meetingData]);
    handleCloseDrawer();
  };

  return (
    <>
      <Performance />

      <div className='md:px-6 px-2 md:m-4 m-2 text-lg md:text-2xl'>
        <h1>1:1 meetings</h1>
        <p className='md:text-sm text-sm font-light'>
          Meetings which are created by me or which I am a participant will be shown here.
        </p>
      </div>

      {meetings.length === 0 && (
        <div className='text-center md:mt-48 mt-30'>
          <i className='fa fa-fw fa-laptop text-9xl'></i>
          <p className='p-4'>
            You don't have any meeting scheduled. Start using 1:1 meetings to have a regular interaction with your managers and peers.
          </p>
        </div>
      )}

      <div className='text-center my-4'>
        <Button type='primary' size='large' onClick={handlePlanMeeting}>
          + Schedule 1:1 meeting
        </Button>
      </div>

       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-6'>
        {meetings.map((meeting, index) => (
          <div
            key={index}
            className='p-4 border rounded-lg shadow-md bg-white'
          >
            <h2 className='text-lg font-semibold mb-2'>Meeting #{index + 1}</h2>
            <p><strong>👤 Employee:</strong> {meeting.employee}</p>
            <p><strong>📝 Title:</strong> {meeting.title}</p>
            <p><strong>📅 Date:</strong> {meeting.date}</p>
            <p><strong>🔁 Frequency:</strong> {meeting.frequency}</p>
          </div>
        ))}
      </div>

      <Drawer
        title={<div className='font-bold'>Schedule 1:1 meeting</div>}
        placement='right'
        closable={true}
        onClose={handleCloseDrawer}
        visible={isDrawerVisible}
        width={700}
        headerStyle={{ backgroundColor: '#16a34a' }} 
      >
        <PerformanceSidebar onSubmit={addMeeting} />
      </Drawer>
    </>
  );
};

export default Meeting;
