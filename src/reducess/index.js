import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayform from './isDisplayForm';
import itemEditting from './itemEditting';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';
import works from './works';
const myReducer = combineReducers({
   tasks: tasks,
   isDisplayform: isDisplayform,
   itemEditting: itemEditting,
   filterTable: filterTable,
   search :search,
   sort: sort,
   works: works,
});

export default myReducer;