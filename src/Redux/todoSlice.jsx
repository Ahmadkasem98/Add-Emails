import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

}
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos : function(state , action ) {
      console.log(action);
       state.items.push(action.payload)    
    },
    deleteTodo : function(state , action ) {
      state.items = state.items.filter(item =>
        item.id != action.payload.id 
      )
    },
    EditItems : function(state , action) {
      state.items.map((item) => {
        if(item.id == action.payload.id) {
          item.email = action.payload.email
        }
      })
    }

}
}
)

export const { addTodos ,deleteTodo , EditItems } = todoSlice.actions

export default todoSlice.reducer