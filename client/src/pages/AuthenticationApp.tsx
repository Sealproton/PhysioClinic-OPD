import { Routes, Route } from 'react-router-dom';
import PatientsPage from './PatientsPage';
import CreatePatient from './PatientCreatePage';
import SinglePatientPage from './SinglePatientPage';

const AuthenticationApp: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<PatientsPage />} />
      <Route path='/create' element={<CreatePatient />} />
      <Route path='/:id' element={<SinglePatientPage />} />

      <Route />
    </Routes>
  );
};

export default AuthenticationApp;
