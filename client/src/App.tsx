import AuthenticationApp from './pages/AuthenticationApp';
import UnauthenticationApp from './pages/UnAuthenticationApp';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { useAuth } from './ContextAPI/authContext';
function App() {
  const { isAuthenticated } = useAuth();
  return (
    <ChakraProvider>
      <div className='flex w-screen min-h-screen bg-gray-100 font-[Roboto]'>
        {isAuthenticated ? <AuthenticationApp /> : <UnauthenticationApp />}
      </div>
    </ChakraProvider>
  );
}

export default App;
