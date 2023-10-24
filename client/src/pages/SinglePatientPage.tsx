import { useParams } from 'react-router-dom';
import { useState } from 'react';

const SinglePatientPage: React.FC = () => {
  const { id } = useParams();
  const [ptID, setPtID] = useState<number>(Number(id) / 658243);
  return <div>id = {Number(id) / 658243}</div>;
};

export default SinglePatientPage;
