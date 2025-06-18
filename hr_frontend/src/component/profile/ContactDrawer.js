import React from 'react'
import { TextField} from '@mui/material'
import {Button} from 'antd'

const ContactDrawer = () => {
  return (
    <>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Work Email" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Personal Email" variant="outlined" fullWidth />
    </div>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Mobile Phone" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Emergency Contact 1 Name" variant="outlined" fullWidth />
    </div>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Emergency Contact 1 Number" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Emergency Contact 2 Name" variant="outlined" fullWidth />
    </div>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Emergency Contact 2 Number" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Work Phone" variant="outlined" fullWidth />
    </div>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Residence Phone" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Skype" variant="outlined" fullWidth />
    </div>
    <Button style={{marginTop:'30px',marginRight:'10px'}}
    type='default' size='large'>Cancel</Button>
    <Button 
    type='primary' size='large'>Update</Button>
    </>
  )
}

export default ContactDrawer