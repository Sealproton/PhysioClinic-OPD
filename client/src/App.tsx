import AuthenticationApp from './pages/AuthenticationApp';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { useAuth } from './ContextAPI/authContext';
function App() {
  const { isAuthenticated } = useAuth();
  return (
    <ChakraProvider>
      <div className='flex w-screen min-h-screen bg-gray-100 font-[Roboto]'>
        {isAuthenticated ? <AuthenticationApp /> : <LoginPage />}
      </div>
    </ChakraProvider>
  );
}

export default App;
