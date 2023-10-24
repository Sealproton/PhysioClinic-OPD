import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FcPrevious } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { CircularProgress } from '@chakra-ui/react';
import PatientHistory from '../components/PtHistory';
import TreatmentPage from '../components/TxPage';
import CreateTreatment from '../components/TxCreate';
import axios from 'axios';
const SinglePatientPage: React.FC = () => {
  const { id } = useParams();
  const ptID = Number(id) / 658243;
  const {
    data: patientData,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['PT', ptID],
    queryFn: async () => {
      const patientData = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/patients/${ptID}`
      );
      return patientData.data;
    },
  });
  if (isLoading) {
    return (
      <div className=' mt-44'>
        <CircularProgress isIndeterminate color='green.300' w={9} h={9} />
      </div>
    );
  }
  if (isError) {
    return (
      <div className=' mt-44'>
        <h1
          className='text-gray-400 text-[1.2rem] cursor-pointer'
          onClick={() => refetch()}
        >
          Something wrong Tap here to retry
        </h1>
      </div>
    );
  }

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
            <CreateTreatment pt_id={patientData.pt_id} />
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
