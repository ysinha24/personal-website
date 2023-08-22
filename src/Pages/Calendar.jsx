import React, { Component }  from 'react';
import { Badge, Calendar } from 'antd';
import { Navbar } from '../Components/Navbar';

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'success',
          content: 'This is usual event.',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
export const CalendarPage = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  return <div className='calendar'>
    <Navbar/>
    <div className='cal'>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
    </div>
    
  </div>;
};
