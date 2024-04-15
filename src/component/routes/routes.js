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
import MyPerformance from '../leave/review/MyPerformance';
import ReviewsGiven from '../leave/review/ReviewsGiven';
import Process from '../leave/improvement/Process';
import Completed from '../leave/improvement/Completed';
import ExpensesTravel from '../leave/expenses/ExpensesTravel';
import PendingExpenses from '../leave/expenses/PendingExpenses';
import PastClaim from '../leave/expenses/PastClaim';
import AdvanceRequest from '../leave/expenses/AdvanceRequest';
import HelpDesk from '../leave/helpDesk/HelpDesk';
import Tickets from '../leave/helpDesk/Tickets';
import Following from '../leave/helpDesk/Following'
import Application from '../leave/application/Application';
import Organisation from '../organisation/Organisation';
import EmployeeOrg from '../organisation/EployeeOrg';
import DocumentOrg from '../organisation/DocumentOrg';
import EngageOrg from '../organisation/EngageOrg';
import HiringOrg from '../organisation/HiringOrg';

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

  { path: '/performance/review/myperformance', element: <MyPerformance /> },
  { path: '/performance/review/reviewgiven', element: <ReviewsGiven /> },

  { path: '/performance/improvement/process', element: <Process /> },
  { path: '/performance/improvement/completed', element: <Completed /> },
  { path: '/expense&travel', element: <ExpensesTravel /> },
  { path: '/expense&travel/pending', element: <PendingExpenses /> },
  { path: '/expense&travel/past', element: <PastClaim /> },
  { path: '/expense&travel/advance', element: <AdvanceRequest /> },
  { path: '/helpdesk', element: <HelpDesk /> },
  { path: '/helpdesk/tickets', element: <Tickets /> },
  { path: '/helpdesk/follow', element: <Following /> },
  { path: '/application', element: <Application /> },

  { path: '/organisation', element: <Organisation />, icon: <TeamOutlined /> },
  { path: '/employee', element: <EmployeeOrg />},
  { path: '/document', element: <DocumentOrg />},
  { path: '/engage', element: <EngageOrg />},
  { path: '/hiring', element: <HiringOrg />},
  
  

];

export default routes;
