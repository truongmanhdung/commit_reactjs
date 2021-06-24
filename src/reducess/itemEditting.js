import * as  types from './../constants/ActionTypes'
var initialState = {};

var myReducer = (state= initialState, action) =>{
     switch (action.type) {
          case types.EDIT_WORKS:
               return action.work; 
          default:
               return state;
     }    
}

export default myReducer