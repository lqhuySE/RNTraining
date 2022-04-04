import noteListReducer from '../screens/Home/noteSlice';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  noteList: noteListReducer,
});

export default rootReducer;
