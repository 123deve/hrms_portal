import React from 'react';
import { UserOutlined, TeamOutlined, InfoCircleOutlined, ApartmentOutlined, SolutionOutlined, FileTextOutlined } from '@ant-design/icons';
import Profile from '../profile/Profile';
import Leave from '../leave/Leave';
import About from '../profile/About';
import JobDetail from '../profile/JobDetail';
import Assets from '../profile/Assets';
import ProfileDetail from '../profile/ProfileDetail';
import Documents from "../profile/Document";

const routes = [
  { path: '/profile', element: <Profile />, icon: <UserOutlined /> },
  { path: '/me', element: <Leave />, icon: <TeamOutlined /> },
  { path: '/about', element: <About />, icon: <InfoCircleOutlined /> },
  { path: '/job', element: <JobDetail />, icon: <ApartmentOutlined /> },
  { path: '/assets', element: <Assets />, icon: <SolutionOutlined /> },
  { path: '/profileDetail', element: <ProfileDetail />, icon: <UserOutlined /> },
  { path: '/documents', element: <Documents />, icon: <FileTextOutlined /> },
];

export default routes;
