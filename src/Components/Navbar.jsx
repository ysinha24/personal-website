import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons';
import { Menu } from 'antd'; 
import { Link, useNavigate } from "react-router-dom";
import LogoImg from '../Resources/logo.PNG';
import "../Styles/Navbar.css";
const items = [
    {
        label: <Link to='/'>Home</Link>,
        default: true
    },
    {
        label: <Link to="/projects">Projects</Link>,
        key: 'projects',
        icon: <AppstoreOutlined />
    },
    {
        label: <Link to="/publications">Publications</Link>,
        key: 'publications',
        icon: <BookOutlined />
      },
    // {
    //   label: <Link to="/calendar">Calendar</Link>,
    //   key: 'calendar',
    //   icon: <CalendarOutlined />
    // },
    {
        label: 'Links',
        key: 'mail',
        icon: <MailOutlined />,
        children: [
          {
              type: 'group',
              label: 
              <a href="https://www.linkedin.com/in/ysinha24/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
          },
          
          {
              type: 'group',
              label: <a href="https://github.com/ysinha24" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          },
          {
            type: 'group',
            label: <a href="https://github.com/ysinha24" target="_blank" rel="noopener noreferrer">
              Other Links
            </a>
        }
        ]
      }
  ];


  export const Navbar = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return <Menu onClick={onClick} theme="dark" selectedKeys={[current]}  mode="horizontal" items={items} />;
  };

