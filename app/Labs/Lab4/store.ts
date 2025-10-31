import { configureStore } from "@reduxjs/toolkit";
import HelloRedux from "./ReduxExamples/HelloRedux";
import helloReducer from "./ReduxExamples/HelloRedux/helloReducer";
import CounterRedux from "./ReduxExamples/CounterRedux";    
import counterReducer from "./ReduxExamples/CounterRedux/counterReducer";
import addReducer from "./ReduxExamples/AddRedux/addReducer";
import todoReducer from "./ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer: todoReducer,  
  },
});
export default store;