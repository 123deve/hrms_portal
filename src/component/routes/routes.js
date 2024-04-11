import React from 'react';
import { UserOutlined, TeamOutlined, InfoCircleOutlined, ApartmentOutlined, SolutionOutlined, FileTextOutlined } from '@ant-design/icons';
import Profile from '../profile/Profile';
import Leave from '../leave/Leave';
import About from '../profile/About';
import JobDetail from '../profile/JobDetail';
import Assets from '../profile/Assets';
import ProfileDetail from '../profile/ProfileDetail';
import Documents from "../profile/Document";
import Performance from "../leave/performance/Performance"
import MyTeam from '../myteam/MyTeam';
import Objective from '../leave/objective/Objective'
import Review from '../leave/review/Review';
import Feedback from '../leave/feedback/Feedback';
import Meeting from '../leave/performance/Meeting';
import Competencies from '../leave/competencies/Competencies';
import Improvement from '../leave/improvement/Improvement';
import PraiseRecieved from '../leave/feedback/PraiseRecieved';
import FeedbackRecieved from '../leave/feedback/FeedbackRecieved';
import PraiseGiven from '../leave/feedback/PraiseGiven'
import FeedbackGiven from '../leave/feedback/FeedbackGiven';
import InternalNotes from '../leave/feedback/InternalNotes';

const routes = [
  { path: '/profile', element: <Profile />, icon: <UserOutlined /> },
  { path: '/me', element: <Leave />, icon: <TeamOutlined /> },
  { path: '/about', element: <About />, icon: <InfoCircleOutlined /> },
  { path: '/job', element: <JobDetail />, icon: <ApartmentOutlined /> },
  { path: '/assets', element: <Assets />, icon: <SolutionOutlined /> },
  { path: '/profileDetail', element: <ProfileDetail />, icon: <UserOutlined /> },
  { path: '/documents', element: <Documents />, icon: <FileTextOutlined /> },
  { path: '/performance', element: <Performance />},
  { path: '/myteam', element: <MyTeam />, icon: <ApartmentOutlined /> },
  { path: '/performance/objective', element: <Objective /> },
  { path: '/performance/meeting', element: <Meeting /> },
  { path: '/performance/feedback', element: <Feedback /> },
  { path: '/performance/review', element: <Review /> },
  { path: '/performance/competencies', element: <Competencies /> },
  { path: '/performance/improvement', element: <Improvement /> },

  { path: '/performance/feedback/praise', element: <PraiseRecieved /> },
  { path: '/performance/feedback/feedrecieve', element: <FeedbackRecieved /> },
  { path: '/performance/feedback/praisegiven', element: <PraiseGiven /> },
  { path: '/performance/feedback/feedgiven', element: <FeedbackGiven /> },
  { path: '/performance/feedback/internal', element: <InternalNotes /> },
];

export default routes;
