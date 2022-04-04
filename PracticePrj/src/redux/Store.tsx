// import {createStore} from 'redux';
// import rootReducer from './Reducer';
//
// const store = createStore(rootReducer);
//
// export default store;

import {configureStore} from '@reduxjs/toolkit';
import noteListReducer from '../screens/Home/noteSlice';

const store = configureStore({
  reducer: {
    noteList: noteListReducer.reducer,
  },
});

export default store;
