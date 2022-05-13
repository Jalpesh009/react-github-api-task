import { combineReducers } from "redux";
import userReducer from './User/Reducer';
import reposReducer from './Repos/Reducer';

const rootReducer = combineReducers({
    user: userReducer,
    repos: reposReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;