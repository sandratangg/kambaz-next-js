import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import coursesReducer from "./Courses/coursesReducer";
import enrollmentsReducer from "./Courses/enrollmentsReducer";
import modulesReducer from "./Courses/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";

const store = configureStore({
  reducer: {
    accountReducer,
    coursesReducer,
    enrollmentsReducer,
    modulesReducer,
    assignmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;