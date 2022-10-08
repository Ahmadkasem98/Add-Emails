import { Typography ,Box , InputLabel ,FormControl , Input , Button , hr } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addTodos } from '../../Redux/todoSlice'
import './Login.css'
import { Container } from '@mui/system'
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { useRef } from 'react'



export default function Login() {

  const emailInp = useRef()
  const items = useSelector(state => state.todos.items)
    const dispatch = useDispatch()
    const [email, setEmail] =useState('');
    const [run, setRun] =useState(false);
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };

    useEffect(()=> {
       
    })
  
  return (
    <Box sx={{
      display:'flex', justifyContent:'space-between', padding:'30px ', color:'white',
      width:'100%', height:'100vh'

    }} className='login'>
      
    <Typography component='div'
    sx={{
      margin:'350px 140px' , fontWeight:'bold' , fontSize:'35px'
    }}
    ><Typography component='span' sx={{backgroundColor:'pink', fontWeight:'bold' , fontSize:'35px' ,display:'inline-block' ,width:'fit-content' , padding:'0 5px' , borderRadius:'3px'}}>XD </Typography> Adobe XD</Typography>
    
    <Typography component='div' 
    sx={{
      backgroundColor:'White',
      padding:'20px 30px',
      borderRadius:'10px',
      color:'black'
    }}
    >
      <Container>
      <Typography component='h2' sx={{
        color:'#323232',fontSize:'33px', fontWeight:'bold'
      }}>Sign in</Typography>
      <Typography component='span'
      sx={{color:'#505050' , marginTop:'15px'}}
      >New user?<Link to='/Register' style={{color:'#1473e6' , fontSize:'17px'}}>create an account</Link> </Typography>
      <FormControl variant="standard" sx={{marginTop:'25px' , width:'100%'}}>
        <InputLabel htmlFor="component-simple">Email</InputLabel>

        <Input id="component-simple" type='email' ref={emailInp} value={email} onChange={handleChange} />
      <Link to='/' style={{textDecoration:'none'}}>
            <Button variant="contained" disabled={!email} sx={{borderRadius:'20px',marginTop:'20px' , display:'block' , marginLeft:'60%'}} 
              onClick={() => { if(email !== '') {
                dispatch(addTodos({id:items.length + 1,email}))
                setEmail('') }
              }  
            }>Continue</Button>
       </Link>
      </FormControl>

      <Typography component='div' sx={{position:'relative',marginTop:'30px'}}>
        <hr />
        <Typography component='span' sx={{color:'#4b4b4b',backgroundColor:'white',position:'absolute',left:'50%',top:'-10px',transform:'translate(-50%)'}}>Or</Typography>
      </Typography>
      
      <Stack sx ={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',marginTop:'30px'}}>
      <Button variant="outlined" 
      sx={{width:'300px',padding:'15px 20px',borderRadius:'30px',fontWeight:'bold',marginBottom:'10px'}}
       startIcon={<GoogleIcon/>}>
        Continue with Google
      </Button>
      <Button variant="contained"
      sx={{width:'300px',padding:'15px 20px',borderRadius:'30px',fontWeight:'bold',marginBottom:'10px'}}
      startIcon={<FacebookIcon />}>
      Continue with Facebook
      </Button>
      <Button variant="contained" className='apple'
       sx={{width:'300px',padding:'15px 20px',borderRadius:'30px',color:'white',fontWeight:'bold',marginBottom:'40px',backgroundColor:'black'}}
      startIcon={<AppleIcon />}>
      Continue with Apple
      </Button>
      
    </Stack>

      <Link to='/Register' style={{color:'blue',fontSize:'15px',textDecoration:'none'}}>Get help signing in</Link>
      </Container>
      </Typography> 

      
  </Box>
     
  )
}
