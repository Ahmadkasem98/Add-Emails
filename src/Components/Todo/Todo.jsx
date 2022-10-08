import { Box, Button, Typography } from '@mui/material'
import React ,{useEffect , useState} from 'react'
import {AiTwotoneDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RiCheckDoubleFill} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { deleteTodo , EditItems } from '../../Redux/todoSlice'
import './Todo.css'

export default function Todo({data}) {
      
  const dispatch = useDispatch()

  useEffect(() => {
    
  })

  const [edit , setEdit ] = useState(false)
  const [updateEmail, setUpdateEmail] =useState('');
  const [email, setEmail] =useState('');
  const [id , setId] = useState(0);
  const [complete , setComplete] = useState(true)
 

  return (
    <Box sx={{backgroundColor:'#3dc2c9',padding:'15px',marginBottom:'10px',color:'white',borderRadius:"10px"}}>
      <div>{Date()}</div>
    
<Typography component='div' sx={{display:'flex',justifyContent:'space-between'}}>

    <div className='todoLeft'>
        <div>{data.email}</div>
    </div>

    <div className='todoRight'>
       <button onClick={() => dispatch(deleteTodo({id : data.id }))}><AiTwotoneDelete /></button>
      { complete && <button onClick={() => setEdit(true)  }><AiFillEdit /></button>}
      { complete && <button><AiFillCloseCircle /></button>}
      { complete &&<button onClick={() => setComplete(false)}><RiCheckDoubleFill /></button>}

    </div>
</Typography>
        { edit && (
          <Typography component='div'>
          <input type='text' value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} 
          style={{outline:'none',padding:'5px',marginRight:'5px'}}  />

          <button
           onClick={() => { dispatch(EditItems({id : data.id , email : updateEmail}))
           setUpdateEmail('')
             }
            } style={{padding:'5px',cursor:'pointer'}} >Update</button>
          
      </Typography>
        )
        }

   </Box>
  )
}
