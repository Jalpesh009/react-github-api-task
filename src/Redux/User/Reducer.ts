import { userTypes } from "./ActionTypes";
import { UserActions, UserState } from "./Types";

const initialState: UserState = {
  userInformation: {},
  error: null
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      return {
        ...state,
      };
      
    case userTypes.FETCH_USER_SUCCESS: 
      return {
        ...state,
        userInformation: action.payload.userInformation,
        error: null
      };
     
    case userTypes.FETCH_USER_ERROR:
      return {
        ...state,
        userInformation: {},
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
