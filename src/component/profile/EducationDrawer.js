import React from 'react'
import { TextField} from '@mui/material'
import {Button} from 'antd'

const EducationDrawer = () => {
  return (
    <>
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Branch/Specialization" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="CGPA/Percentage" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Degree" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="College/University" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px', marginRight: '10px' }} id="outlined-basic" label="Year Of Completion" variant="outlined" fullWidth />
    <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Year Of Joining" variant="outlined" fullWidth />
    
    <Button style={{marginTop:'30px',marginRight:'10px'}}
    type='default' size='large'>Cancel</Button>
    <Button 
    type='primary' size='large'>Update</Button>
    </>
  )
}

export default EducationDrawer;