import { useContext, createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext<AuthContextValues | undefined>(
  undefined
);
type AuthProviderProp = {
  children: React.ReactNode;
};
export interface AuthContextValues {
  signIn: (username: string, password: string) => Promise<number>;
  signUp: (username: string, password: string) => Promise<any>;
  signOut: () => void;
  isAuthenticated: boolean;
}
const getState = (): any => {
  const token = localStorage.getItem('token');
  if (token) {
    const userDataFromToken = jwtDecode(token);
    console.log('UserFromToken', userDataFromToken);
    return userDataFromToken;
  }
};
const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
  const [state, setState] = useState(getState());
  const navigate = useNavigate();
  const signIn = async (
    username: string,
    password: string
  ): Promise<number> => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/signin`,
        { username, password }
      );
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
        setState(getState());
        navigate('/');
        return 200;
      } else {
        return 500;
      }
    } catch (error: any) {
      console.log(error);
      return error.response.status;
    }
  };
  const signUp = async (username: string, password: string): Promise<any> => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/signup`,
        {
          username,
          password,
        }
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      return error.response.data;
    }
  };
  const signOut = () => {
    localStorage.removeItem('token');
  };
  const isAuthenticated = Boolean(localStorage.getItem('token'));
  return (
    <AuthContext.Provider value={{ signIn, signUp, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthProvider, useAuth };
