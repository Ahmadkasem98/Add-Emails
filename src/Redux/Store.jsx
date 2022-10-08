// import { /createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";


// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store =createStore(Reducer , enhancer());
const store = configureStore({
    reducer : {
        todos : todoSlice,
    }
})
export default store ;