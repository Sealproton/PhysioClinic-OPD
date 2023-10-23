import { Routes, Route } from 'react-router-dom';
import PatientsPage from './PatientsPage';
import CreatePatient from './PatientCreatePage';

const AuthenticationApp: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<PatientsPage />} />
      <Route path='/create' element={<CreatePatient />} />
      <Route />
    </Routes>
  );
};

export default AuthenticationApp;
