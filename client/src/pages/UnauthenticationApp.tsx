import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignUpPage';
const UnauthenticationApp: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route />
    </Routes>
  );
};

export default UnauthenticationApp;
