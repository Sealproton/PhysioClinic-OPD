import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { FcPrevious } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import PatientHistory from '../components/PtHistory';
import TreatmentPage from '../components/TxPage';
import axios from 'axios';
const SinglePatientPage: React.FC = () => {
  const { id } = useParams();
  const [ptID, setPtID] = useState<number>(Number(id) / 658243);
  const {
    data: patientData,
    isError: ptErr,
    isLoading: ptLoad,
  } = useQuery({
    queryKey: ['PT', ptID],
    queryFn: async () => {
      const patientData = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/patients/${ptID}`
      );
      return patientData.data;
    },
  });
  const {
    data: txList,
    isError: txErr,
    isLoading: txLoad,
  } = useQuery({
    queryKey: ['Tx', ptID],
    queryFn: async () => {
      const treatment = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/treatments/${ptID}`
      );
      return treatment.data;
    },
  });
  if (ptLoad || txLoad) {
    return <div>Loading</div>;
  }
  if (ptErr || txErr) {
    return <div>error</div>;
  }
  // console.log(patientData);
  // console.log(txList);
  return (
    <div className='flex flex-col w-full min-h-full xl:px-6'>
      <div className='w-fit mt-2 mb-2 xl:ml-3 xl:mt-5'>
        <Link to='/'>
          <button className='flex w-fit text-[0.8rem] p-2 items-center md:text-2xl '>
            <FcPrevious />
            Back
          </button>
        </Link>
      </div>
      <Tabs align='center' w='100%' colorScheme='green' fontFamily='Roboto'>
        <TabList w='100%'>
          <Tab w='20%' fontSize={{ base: '12px', md: '25px', lg: '28px' }}>
            Patient
          </Tab>
          <Tab w='40%' fontSize={{ base: '12px', md: '25px', lg: '28px' }}>
            Create Treatment
          </Tab>
          <Tab w='40%' fontSize={{ base: '12px', md: '25px', lg: '28px' }}>
            Treatments History
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel w='100%'>
            <PatientHistory {...patientData} />
          </TabPanel>
          <TabPanel>
            <TreatmentPage pt_id={patientData.pt_id} />
          </TabPanel>
          <TabPanel>
            <TreatmentPage pt_id={patientData.pt_id} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default SinglePatientPage;
