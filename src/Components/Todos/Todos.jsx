import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useSelector } from 'react-redux'
import React from 'react'
import { useEffect , useState} from 'react'
import Todo from '../Todo/Todo'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'



export default function Todos() {
     
  const items = useSelector(state => state.todos.items)

  
  

 
  
  const todosRender = items.map((tod , index) => {
   return <Todo key={index} data={tod} />
  })
   
 
  

  return (
       
  <Box sx={{width:'60%',margin:'20px auto'}}>
        <h1 style={{fontWeight:'700',fontSize:'3rem',textAlign:'center'}}>Todo List</h1>
        <Typography component='div' sx={{backgroundColor:'#eee',padding:'20px'}}>
          <Container>
            <Typography component='div'>
               {todosRender}
            </Typography>
            <Link to='./login'>
            <Button sx={{fontSize:'35px',display:'block',margin:'10px auto'}}><BsFillPlusCircleFill /></Button>
            </Link>
          </Container>
        </Typography>
        
  </Box>

      
       
  )
}
