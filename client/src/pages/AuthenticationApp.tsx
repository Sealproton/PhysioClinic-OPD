import { Routes, Route } from 'react-router-dom';
import PatientsPage from './PatientsPage';
import SignupPage from './SignUpPage';

const AuthenticationApp: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<PatientsPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route />
    </Routes>
  );
};

export default AuthenticationApp;
