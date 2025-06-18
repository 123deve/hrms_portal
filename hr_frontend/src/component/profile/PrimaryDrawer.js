import React from 'react'
import { TextField} from '@mui/material'
import {Button} from 'antd'

const PrimaryDrawer = () => {
  return (
    <>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="First Name" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Middle Name" variant="outlined" fullWidth />
    </div>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Display Name" variant="outlined" fullWidth />
    </div>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Gender" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Date Of Birth" variant="outlined" fullWidth />
    </div>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Maritial Status" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Blood Group" variant="outlined" fullWidth />
    </div>
    <div className='flex'>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Physically Handicapped" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Naitionality" variant="outlined" fullWidth />
    </div>
    <Button style={{marginTop:'30px',marginRight:'10px'}}
    type='default' size='large'>Cancel</Button>
    <Button 
    type='primary' size='large'>Update</Button>
    </>
  )
}

export default PrimaryDrawer