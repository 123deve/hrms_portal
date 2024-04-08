import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <div className="logo p-5 text-center font-bold text-xl text-black">
          Logo Here
        </div>
        <List>
          <ListItemButton component={Link} to="/" selected={window.location.pathname === '/'} sx={{ color: 'black' }}>
            <ListItemIcon><UserOutlined/></ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItemButton>
          <ListItemButton component={Link} to="/profile" selected={window.location.pathname === '/route2'} sx={{ color: 'black' }}>
            <ListItemIcon><VideoCameraOutlined /></ListItemIcon>
            <ListItemText primary="PROFILE" />
          </ListItemButton>
          <ListItemButton component={Link} to="/me" selected={window.location.pathname === '/route3'} sx={{ color: 'black' }}>
            <ListItemIcon><UploadOutlined /></ListItemIcon>
            <ListItemText primary="ME" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;