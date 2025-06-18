import React, { useState } from 'react';

const SelectTempleteSidebar = ({ onTemplateSelect }) => {
  const templateData = {
    title1: "First one-on-one meeting",
    title2: "Weekly one-on-one meeting",
    title3: "Monthly one-on-one meeting",
    title4: "Remote one-on-one meeting",
  };

  const [selectedTitle, setSelectedTitle] = useState('');

  const handleSelect = (title) => {
    setSelectedTitle(title);
    onTemplateSelect(title); 
  };

  return (
    <form className="space-y-4">
      {Object.entries(templateData).map(([key, title], index) => (
        <div
          key={index}
          className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-all flex items-center gap-3"
          onClick={() => handleSelect(title)}
        >
          <input
            type="radio"
            name="meeting"
            className="accent-blue-600"
            value={title}
            checked={selectedTitle === title}
            readOnly
          />
          <label className="text-base">{title}</label>
        </div>
      ))}
    </form>
  );
};

export default SelectTempleteSidebar;

