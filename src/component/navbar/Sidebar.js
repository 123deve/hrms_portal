import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [openSidebar,setOpenSidebar] = useState(false);

  const handleBarToggle = () => {
    setOpenSidebar(prevState => !prevState);
  }

  return (
    <>
      <i className="fa fa-fw fa-bars text-xl ml-2 block md-hidden z-10 fixed" 
      onClick={handleBarToggle}></i>
    {!openSidebar && (
      <div className={`h-full md:block md:w-52 fixed z-1 top-0 left-0 overflow-x-hidden pt-1 md:bg-black border-r-2`}>
    <div className='p-2 cursor-pointer'>
    <Link className='py-6 md:px-8 px-0 no-underline text-sm md:text-lg md:text-white'
      to="/"><i className="fa fa-fw fa-home mr-1 md:text-white"></i> Home</Link>
    </div>
    <div className='p-2 cursor-pointer'>
    <Link className='py-6 md:px-8 px-0 no-underline text-sm md:text-lg md:text-white'
     to="/profile"><i className="fa fa-fw fa-wrench mr-1 md:text-white"></i> Profile</Link>
    </div>
    <div className='p-2 cursor-pointer'>
    <Link className='py-6 md:px-8 px-0 no-underline text-sm md:text-lg md:text-white'
    to="/me"><i className="fa fa-fw fa-user mr-1 md:text-white"></i> Me</Link>
    </div>
    <div className='p-2 cursor-pointer'>
    <a className='py-6 md:px-8 px-0 no-underline text-sm md:text-lg md:text-white'
    to="/inbox"><i className="fa fa-fw fa-envelope mr-1 md:text-white"></i> Inbox</a>
    </div>
    <div className='p-2 cursor-pointer'>
    <a className='py-6 md:px-8 px-0 no-underline text-sm md:text-lg md:text-white'
    to="/myteam"><i className="fa fa-fw fa-user mr-1 md:text-white"></i> My Team</a>
    </div>
    <div className='p-2 cursor-pointer'>
    <a className='py-6 md:px-8 px-0 no-underline text-sm md:text-lg md:text-white'
    to="/finance"><i className="fa fa-fw fa-university mr-1 md:text-white"></i> My Finance</a>
    </div>
    <div className='p-2 cursor-pointer'>
    <a className='py-6 md:px-8 px-0 no-underline text-sm md:text-lg md:text-white'
    to="/organisation"><i className="fa fa-fw fa-building mr-1 md:text-white"></i> Org</a>
    </div>
    <div className='p-2 cursor-pointer'>
    <a className='py-6 md:px-8 px-0 no-underline text-sm md:text-lg md:text-white'
    to="/setting"><i className="fa fa-fw fa-cog mr-1 md:text-white"></i> Setting</a>
    </div>
    </div>
    )}
    </>

    
    // <div style={{ display: 'flex' }}>
    //   <Drawer
    //     variant="permanent"
    //     anchor="left"
    //     sx={{
    //       width: 240,
    //       flexShrink: 0,
    //       '& .MuiDrawer-paper': {
    //         width: 240,
    //         boxSizing: 'border-box',
    //       },
    //     }}
    //   >
    //     <div className="logo p-5 text-center font-bold text-xl text-black">
    //       Logo Here
    //     </div>
    //     <List>
    //       <ListItemButton component={Link} to="/" selected={window.location.pathname === '/'} sx={{ color: 'black' }}>
    //         <ListItemIcon><UserOutlined/></ListItemIcon>
    //         <ListItemText primary="HOME" />
    //       </ListItemButton>
    //       <ListItemButton component={Link} to="/profile" selected={window.location.pathname === '/route2'} sx={{ color: 'black' }}>
    //         <ListItemIcon><VideoCameraOutlined /></ListItemIcon>
    //         <ListItemText primary="PROFILE" />
    //       </ListItemButton>
    //       <ListItemButton component={Link} to="/me" selected={window.location.pathname === '/route3'} sx={{ color: 'black' }}>
    //         <ListItemIcon><UploadOutlined /></ListItemIcon>
    //         <ListItemText primary="ME" />
    //       </ListItemButton>
    //     </List>
    //   </Drawer>
    // </div>
  );
};

export default Sidebar;