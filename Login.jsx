import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
    
    <button>Login</button>
    <Typography variant='h1' color='secondary'>welcome</Typography>
    <TextField label='email' variant='outlined' />
    <TextField label='password' type='password' variant='filled' />
    <br></br>
    <Button variant='contained' color='primary' >Login</Button>

    </div>
  )
}

export default Login
