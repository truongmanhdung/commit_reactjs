import * as  types from './../constants/ActionTypes'
var initialState = [];
var findIndex = (works,id)=>{
     var result = -1;
     works.forEach((work,index)=>{
       if(work.id === id){
         result = index;
       }
     });
     return result;
     
   }
const myReducer = (state = initialState,action) =>{
     var index = -1;
     var { id} = action;

     switch (action.type){
          case types.FETCH_WORKS:
               state = action.works;
               return [...state];
          case types.DELETE_WORKS:
               index = findIndex(state,id);
               state.splice(index, 1);
               return [...state];
          case types.ADD_WORKS:
               state.push(action.work);
               return [...state];
          case types.UPDATE_STATUS:
               index = findIndex(state,id);
               state[index] = {
                    ...state[index],
                    status: id.status
               }
               window.location.reload();  
               return [...state];
          default: return [...state];
     }
}

export default myReducer