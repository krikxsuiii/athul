import { TextField, Typography } from '@mui/material'
import React from 'react'

const Sign = () => {
  return (
    <div>
        <TextField label='first name' /> <br/><br/>
        <TextField label='last name' /> <br/><br/>
        <TextField label='email' /> <br/><br/>
        <TextField label='password' type='password' /> <br/><br/>
        <button type='contained'>sign up</button>
    </div>
  )
}

export default Sign
