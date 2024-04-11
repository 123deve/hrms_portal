import React, { useState } from 'react';

function AttendanceCalendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  const [attendanceData, setAttendanceData] = useState({});

  const handleAttendanceChange = (employee, date, status) => {
    const newData = { ...attendanceData };
    if (!newData[employee]) {
      newData[employee] = {};
    }
    newData[employee][date] = status;
    setAttendanceData(newData);
  };

  const renderCalendarGrid = () => {
    const employees = ['Vaibhav', 'Rajveer' ,'Shreya','Anuja','Gourav','Akhilesh'];

    const daysInMonth = new Date(year, month, 0).getDate();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return (
      <div style={{ overflowX: 'auto' }} className='p-4'>
        <h2 className='py-6'>{`${new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' })} ${year}`}</h2>
        <table>
          <thead>
            <tr>
              <th className='py-6'>Employee</th>
              {days.map((day) => (
                <th key={day} style={{ minWidth: 80 }}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='p-2'>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee}</td>
                {days.map((day) => (
                  <td key={day}>
                    <select
                      onChange={(e) =>
                        handleAttendanceChange(employee, day, e.target.value)
                      }
                      value={attendanceData[employee]?.[day] || 'P'}
                    >
                      <option value="P">Present</option>
                      <option value="A">Absent</option>
                      <option value="L">Late</option>
                      <option value="H">Holiday</option>
                      <option value="W">Work from Home</option>
                    </select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  return (
    <div>
      <div>
        <h2 className='p-2 m-2'>Attendance Calendar</h2>
        <label htmlFor="month" className='p-2 m-2'>Month: </label>
        <select id="month" value={month} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{new Date(currentYear, i, 1).toLocaleString('default', { month: 'long' })}</option>
          ))}
        </select>
        <label htmlFor="year" className='p-2 m-2'>Year: </label>
        <input type="number" id="year" value={year} onChange={handleYearChange} />
      </div>
      {renderCalendarGrid()}
    </div>
  );
}

export default AttendanceCalendar;
