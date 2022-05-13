import { reposTypes } from "./ActionTypes";
import { ReposActions, ReposState } from "./Types";

const initialState: ReposState = {
  repos: [],
  error: null
};

export default (state = initialState, action: ReposActions) => {
  switch (action.type) {
    case reposTypes.FETCH_REPOS_REQUEST:
      return {
        ...state,
      };
      
    case reposTypes.FETCH_REPOS_SUCCESS: 
      return {
        ...state,
        repos: action.payload.repos,
        error: null
      };
     
    case reposTypes.FETCH_REPOS_ERROR:
      return {
        ...state,
        repos: [],
        error: action.payload.error
      };
      
    default:
      return {
        ...state
      };
  }
};
