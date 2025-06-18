import React from 'react'
import Organisation from './Organisation'
import {Badge , Avatar , Typography , Button} from "antd";


const EployeeOrg = () => {
  return (
   <>
    <Organisation/>
    <div className='py-8'>
      <h1 className='text-2xl font-dark px-6'>Employee Directory</h1>
    </div>
    <div className='border-2 p-4 mb-8'>
     <div className='mb-4'> <h2>Frontend Developer</h2> </div>
    <div className="flex items-center gap-4">
      <Badge color="green" offset={[-5, 5]} dot>
        <Avatar size={60} src="https://docs.material-tailwind.com/img/face-2.jpg"/>
      </Badge>
      
      <div className="flex flex-col">
        <Typography.Title level={5} style={{ margin: 0 }}>  Sujal sahu </Typography.Title> 
        <Typography.Text type="secondary"> Web Developer </Typography.Text>
      </div>
        {/* <Button className='bg-blue-600 text-white'>Remove</Button> */}
    </div>   

    <div className="flex items-center gap-4 mt-4">
      <Badge color="green" offset={[-5, 5]} dot>
        <Avatar size={60} src="https://docs.material-tailwind.com/img/face-2.jpg"/>
      </Badge> 

      <div className="flex flex-col">
      <Typography.Title level={5} style={{ margin : 0 }}> Nirjal Paramar </Typography.Title> 
      <Typography.Text type="secondary"> Web Developer </Typography.Text>
      </div>
        {/* <Button className='bg-blue-600 text-white'>Remove</Button> */}
    </div>      
    </div>

    <div className='border-2 p-4 mb-8'>
     <div className='mb-4'> <h2>Backend Developer</h2> </div>
    <div className="flex items-center gap-4">
      <Badge color="green" offset={[-5, 5]} dot>
        <Avatar size={60} src="https://docs.material-tailwind.com/img/face-2.jpg"/>
      </Badge>
      
      <div className="flex flex-col">
        <Typography.Title level={5} style={{ margin: 0 }}>  Rajveer Sir </Typography.Title> 
        <Typography.Text type="secondary"> Web Developer </Typography.Text>
      </div>
        <Button type='primary' className='bg-blue-600 text-white'>Remove</Button>
    </div>   

    <div className="flex items-center gap-4 mt-4">
      <Badge color="green" offset={[-5, 5]} dot>
        <Avatar size={60} src="https://docs.material-tailwind.com/img/face-2.jpg"/>
      </Badge> 

      <div className="flex flex-col">
      <Typography.Title level={5} style={{ margin : 0 }}> Gourav Sir </Typography.Title> 
      <Typography.Text type="secondary"> Web Developer </Typography.Text>
      </div>
        <Button type='primary' className='bg-blue-600 text-white'>Remove</Button>
    </div>      
    </div>
    <div className='text-center border-2 p-4'>
      <p className='p-4 font-light bg-yellow-100 border-2'>Please select any department or location.</p>
    </div>

    </>
  )
}

export default EployeeOrg