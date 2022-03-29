import React, {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface AuthType {
  user: FirebaseAuthTypes.User | null;
  isLoading: boolean;
}

export const AuthContext = React.createContext({} as AuthType);

interface Prop {
  children: React.ReactNode;
}

export default function AuthProvider(props: Prop) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  return (
    <AuthContext.Provider value={{user, isLoading}}>
      {props.children}
    </AuthContext.Provider>
  );
}
