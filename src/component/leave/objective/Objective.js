import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import Performance from '../performance/Performance';
import ObjectiveSidebar from './ObjectiveSidebar';

const Objective = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [objectives, setObjectives] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState('');

  const handlePlanMeeting = () => {
    setIsDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const handleAddObjective = () => {
    if (title.trim() === '' || !date || description.trim() === '') return;

    const newObjective = {
      id: Date.now(),
      title,
      date: date.format('YYYY-MM-DD'),
      description,
    };

    setObjectives([...objectives, newObjective]);

    setTitle('');
    setDate(null);
    setDescription('');
    handleCloseDrawer();
  };

  return (
    <>
      <Performance />
      <div className='md:px-6 px-2 md:m-4 m-2 text-lg md:text-2xl'>
        <h1>Objective</h1>
        <p className='md:text-sm text-sm font-light'>
          Objectives help you define what you want to achieve.
        </p>
      </div>

      <div className='px-8 py-4'>
        {objectives.length > 0 ? (
          <ul>
            {objectives.map((obj) => (
              <li key={obj.id} className='mb-4 border p-4 rounded'>
                <h3 className='font-semibold'>{obj.title}</h3>
                <p className='text-sm text-gray-600'>Date: {obj.date}</p>
                <p>{obj.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className='text-center md:mt-44 mt-28'>
            <i className='fa fa-fw fa-frown-o text-9xl'></i>
            <p className='p-4'>
              There are no objectives added for this time frame.
            </p>

            <Button type='primary' size='large' onClick={handlePlanMeeting}>
              + Add Objective
            </Button>
          </div>
        )}
      </div>

      <Drawer
        title='OBJECTIVE SIDEBAR'
        placement='right'
        closable={true}
        onClose={handleCloseDrawer}
        visible={isDrawerVisible}
        width={700}
        headerStyle={{ backgroundColor: '#16a34a' }} 
      >
        <ObjectiveSidebar
          title={<div className='font-bold'>{title}</div>}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          description={description}
          setDescription={setDescription}
          handleAddObjective={handleAddObjective}
        />
      </Drawer>
    </>
  );
};

export default Objective;
