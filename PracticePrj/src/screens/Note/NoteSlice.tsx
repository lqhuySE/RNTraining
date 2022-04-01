const initState = {
  noteList: [
    {id: 1, title: 'Note 1', time: '31/03/2022 16:53:00'},
    {id: 2, title: 'Note 2', time: '31/03/2022 16:53:00'},
    {id: 3, title: 'Note 3', time: '31/03/2022 16:53:00'},
    {id: 4, title: 'Note 4', time: '31/03/2022 16:53:00'},
    {id: 5, title: 'Note 5', time: '31/03/2022 16:53:00'},
  ],
};
const noteListReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'noteList/addNewNote': {
    }
    default:
      return state;
  }
};

export default noteListReducer;
