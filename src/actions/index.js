import * as  types from './../constants/ActionTypes'
import callAPI from '../utils/apiCaller';
export const listAll = () =>{
     return {
          type: types.LIST_ALL
     }
}

export const saveTask = (task) =>{
     return {
          type: types.SAVE_TASK,
          task: task
     }
}

export const toggleForm = () =>{
     return {
          type: types.TOGGLE_FORM,
     }
}

export const closeForm = () =>{
     return {
          type: types.CLOSE_FORM,
     }
}

export const openForm = () =>{
     return {
          type: types.OPEN_FORM,
     }
}


export const onDelete = (id) =>{
     return {
          type: types.DELETE_TASK,
          id: id,
     }
}
export const onEditTask = (task) =>{
     return {
          type: types.EDIT_TASK,
          task: task
     }
}
export const filterTask = (filter) =>{
     return {
          type: types.FILTER_TABLE,
          filter: filter
     }
}
export const searchTask = (keyword) =>{
     return {
          type: types.SEARCH,
          keyword: keyword
     }
}
export const sortTask = (sort) =>{
     return {
          type: types.SORT,
          sort: sort
     }
}

export const fetchWorksRequest = ()=>{
     return(dispatch) =>{
          if(localStorage.getItem('user')){
               var id_user = localStorage.getItem('user');
               return callAPI(`users/${id_user}/works`,'GET',null)
               .then(res=>{
                    dispatch(fetchWorks(res.data))
               })
          }
           
     }
}

export const fetchWorks = (works) =>{
     return {
          type: types.FETCH_WORKS,
          works
     }
}

export const deleteWorksRequest = (id) =>{
     return dispatch =>{
          var id_user = localStorage.getItem('user');
          return callAPI(`users/${id_user}/works/${id}`,'DELETE',null)
          .then(res=>{
               if(res.status===200){
                    dispatch(deleteWorks(id))
               }
          })
     }
}

export const deleteWorks = (id) =>{
     return {
          type: types.DELETE_WORKS,
          id
     }
}

export const addWorksRequest = (work) =>{
     return dispatch =>{
          var id_user = localStorage.getItem('user');
          return callAPI(`users/${id_user}/works`,'POST',work)
          .then(res=>{
               dispatch(addWorks(res.data));
          })
     }
}

export const addWorks = (work) =>{
     return {
          type: types.ADD_WORKS,
          work
     }
}


export const updateWorksRequest = (id,status) =>{
     return dispatch =>{
          var id_user = localStorage.getItem('user');
          return callAPI(`users/${id_user}/works/${id}`,'PUT',{
               status: !status
          })
          .then(res=>{
               dispatch(updateWorks(res.data));
          })
     }
}

export const updateWorks = (id,status) =>{
     return {
          type: types.UPDATE_STATUS,
          id,
          status
     }
}

