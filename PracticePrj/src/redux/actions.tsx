export const signIn = (data: any) => {
  return {
    type: 'auth/signIn',
    payload: data,
  };
};

export const signUp = (data: any) => {
  return {
    type: 'auth/signUp',
    payload: data,
  };
};

export const addNewFolder = (data: any) => {
  return {
    type: 'folderList/addNewFolder',
    payload: data,
  };
};
