import * as React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Box , Button ,Container ,TextField ,IconButton , Typography} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import './Register.css'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';



export default function Register() {

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
    
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleChange =
    (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

  return (



    <Box sx={{
      display:'flex', justifyContent:'space-between', padding:'30px', color:'white',
      width:'100%'

    }} className='register'>
      
    <Typography component='div'
    sx={{
      margin:'350px 140px' , fontWeight:'bold' , fontSize:'35px'
    }}
    ><Typography component='span' sx={{fontFamily:'Roboto',backgroundColor:'pink', fontWeight:'bold' , fontSize:'35px' ,display:'inline-block' ,width:'fit-content' , padding:'0 5px' , borderRadius:'3px'}}>XD </Typography> Adobe XD</Typography>
    
    <Typography component='div' 
    sx={{
      backgroundColor:'White',
      padding:'20px 30px',
      borderRadius:'10px',
      color:'black'
    }}
    >
      <Container>
          <Typography component='div' sx={{color:'#747474',fontFamily:'Roboto',padding:'15px 5px'}}>step 1 of 2</Typography>
          <Typography component='div' sx={{color:'#323232',fontFamily:'Roboto',fontSize:'30px',fontWeight:'bold'}}>Create an account</Typography>
          <Typography component='div' className='social' sx={{padding:'15px 5px'}}>
              <Button variant="outlined"><GoogleIcon/></Button>
              <Button variant="contained"><FacebookIcon /></Button>
              <Button variant="contained" className='apple'><AppleIcon /></Button>
          </Typography> 

          <Typography component='div' sx={{position:'relative',color:'#4b4b4b',marginTop:'30px'}}>
        <hr />
        <Typography component='span' sx={{color:'#4b4b4b',backgroundColor:'white',position:'absolute',left:'50%',top:'-10px',transform:'translate(-50%)'}}>Or</Typography>
      </Typography>

      <Typography component='div' sx={{color:'#323232',padding:'20px 5px',fontFamily:'Roboto',fontSize:'17px'}}>Sign up with email</Typography>
      <Typography component='div' sx={{color:'#4b4b4b',padding:'5px',fontFamily:'Roboto',fontSize:'17px'}}>Already have an account?<Link to='/login' className='sign'>Sign in</Link>  </Typography>
          

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >

      
      <TextField id="standard-basic" label="Email address" variant="standard" sx={{width:'100%',fontFamilt:'Roboto',marginTop:'10px'}} /><br />
      <TextField id="standard-basic" sx={{marginTop:'10px'}} label="first name" variant="standard" />
      <TextField id="standard-basic" sx={{marginTop:'10px'}} label="last name" variant="standard" /><br />
        <FormControl sx={{ m: 1, width: '100%' ,marginTop:'10px' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Link to='/login' style={{textDecoration:'none' , marginTop:'30px'}}>
          <Button variant="contained" sx={{fontFamily:'Roboto',borderRadius:'20px',marginTop:'20px' , display:'block' , marginLeft:'70%'}} >Continue</Button>
          </Link>
          </FormControl>
    </Box>


      </Container>
      </Typography> 

      
  </Box>









  )
}
