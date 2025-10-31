import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/reducer";
import coursesReducer from "./Courses/coursesReducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import enrollmentsReducer from "./Courses/enrollmentsReducer";

const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,
  },
});

export default store;