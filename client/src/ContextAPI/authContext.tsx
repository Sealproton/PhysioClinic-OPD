import { useContext, createContext } from 'react';
const AuthContext = createContext<ContextValues | undefined>(undefined);
type AuthProviderProp = {
  children: React.ReactNode;
};
interface ContextValues {
  signUp: () => {};
}

const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
  const signUp = () => {
    return { message: 'test', hello: 'tes' };
  };
  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthProvider, useAuth };
