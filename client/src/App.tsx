import { useState } from 'react';
import AuthenticationApp from './pages/AuthenticationApp';
import UnauthenticationApp from './pages/UnauthenticationApp';
import './App.css';

function App() {
  const [token, setToken] = useState<boolean>(false);
  return <div>{token ? <AuthenticationApp /> : <UnauthenticationApp />}</div>;
}

export default App;
