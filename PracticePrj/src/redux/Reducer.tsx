const initState = {
  auth: {
    email: '',
    password: '',
  },
  folderList: [
    {id: 1, title: 'Folder 1'},
    {id: 2, title: 'Folder 2'},
    {id: 3, title: 'Folder 3'},
    {id: 4, title: 'Folder 4'},
    {id: 5, title: 'Folder 5'},
  ],
  noteList: [
    {id: 1, title: 'Note 1', time: '31/03/2022 16:53:00', note: 'Demo 1'},
    {id: 2, title: 'Note 2', time: '31/03/2022 16:53:00', note: 'Demo 2'},
  ],
};
const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'folderList/addNewFolder': {
      return {
        ...state,
        folderList: [...state.folderList, action.payload],
      };
    }
    case 'noteList/addNewNote': {
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    }
    // case 'noteList/updateNote': {
    //   const newArrayList = [...state.noteList];
    //   const index = newArrayList.find(note => note.id === action.payload.id);
    //   console.log('Index' + index);
    //   // if (index) {
    //   //   newArrayList[index] =
    //   // }
    //   // return [...newArrayList];
    // }
    default:
      return state;
  }
};

export default rootReducer;
