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
    {id: 1, title: 'Note 1', time: '31/03/2022 16:53:00'},
    {id: 2, title: 'Note 2', time: '31/03/2022 16:53:00'},
    {id: 3, title: 'Note 3', time: '31/03/2022 16:53:00'},
    {id: 4, title: 'Note 4', time: '31/03/2022 16:53:00'},
    {id: 5, title: 'Note 5', time: '31/03/2022 16:53:00'},
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'auth/signIn': {
    }
    case 'folderList/addNewFolder': {
      return {
        ...state,
        folderList: [...state.folderList, action.payload],
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
