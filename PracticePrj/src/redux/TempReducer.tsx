import folderListReducer from '../screens/Home/FolderListSlice';
import noteListReducer from '../screens/Note/NoteSlice';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    folderList: folderListReducer,
    noteList: noteListReducer,
});

export default rootReducer;
