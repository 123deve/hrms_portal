import React from 'react'
import { Input } from 'antd'
import MySunEditor from '../../suneditor/MySunEditor'

function FeedbacjRecivedSidebar() {
  return (
    <div>
        <Input
        className = 'border-2 p-2 mb-6' 
        placeholder='Employee Nmae'/>

        <MySunEditor/>
    </div>
  )
}

export default FeedbacjRecivedSidebar