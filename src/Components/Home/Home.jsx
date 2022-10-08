import React , {useEffect} from 'react'
import Login from '../Login/Login'
import { useSelector } from 'react-redux'

import Todos from '../Todos/Todos'

export default function Home() {
    
    const items = useSelector(state => state.todos.items)

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
      },[items])
      
    
  return (
    <>
    <div className='home'>
        <Todos />
    </div>
    </>
  )
}
