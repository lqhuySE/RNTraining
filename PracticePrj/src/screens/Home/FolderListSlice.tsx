const initState = {
  folderList: [
    {id: 1, title: 'Folder 1'},
    {id: 2, title: 'Folder 2'},
    {id: 3, title: 'Folder 3'},
    {id: 4, title: 'Folder 4'},
    {id: 5, title: 'Folder 5'},
  ],
};
const folderListReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'folderList/addNewFolder':
      return [...state.folderList, action.payload];
    default:
      return state;
  }
};

export default folderListReducer;
