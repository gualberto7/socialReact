import React from 'react'

import { TextField, Grid } from '@material-ui/core'

const Register = () => {

  return (

    <Grid container >
        <Grid item xs={12} md={12}>
          <TextField label="Nombres" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Apellidos" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Correo electrónico" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField type='password' label="Contraseña" />
        </Grid>      
    </Grid>
  )
}

export default Register
