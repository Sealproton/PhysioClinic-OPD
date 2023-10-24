import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

interface TreatmentProp {
  pt_id: number;
}
interface TreatmentData {
  tx_id: number;
  created_at: string;
  pt_id: number;
  bp: string;
  hr: number;
  cc: string;
  pi: string;
  pe: string;
  ph: string;
  tx: string;
  result: string;
  tx_name: string;
}
const TreatmentPage: React.FC<TreatmentProp> = ({ pt_id }) => {
  const {
    data: txData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['Tx', pt_id],
    queryFn: async () => {
      const treatmentsData = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/treatments/${pt_id}`
      );
      return treatmentsData.data;
    },
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const getDayMonthYear = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };
  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='text-[1.2rem] text-center mb-3 h-[40px] border-b-2 w-full md:text-[1.5rem] xl:text-[2rem] xl:h-[60px]'>
        Treatments History
      </h1>
      <div className='mt-2 flex w-full  mb-2 xl:mt-4'>
        <h1 className='text-[0.6rem] font-semibold w-[30%] md:text-[1.2rem]'>
          Date
        </h1>
        <h1 className='text-[0.6rem] font-semibold w-[30%] md:text-[1.2rem]'>
          Chief complain
        </h1>
        <h1 className='text-[0.6rem] font-semibold w-[30%] pr-4 md:text-[1.2rem]'>
          PT
        </h1>
        <div className='w-[10%]'></div>
      </div>
      <Accordion allowToggle w='100%'>
        {txData.map((tx: TreatmentData) => {
          return (
            <AccordionItem w='100%'>
              <AccordionButton w='100%'>
                <div className='flex w-full items-center'>
                  <h1 className='text-[0.6rem]  w-[30%] md:text-[1.2rem]'>
                    {getDayMonthYear(tx.created_at)}
                  </h1>
                  <h1 className='text-[0.6rem]  w-[30%] md:text-[1.2rem]'>
                    {tx.cc}
                  </h1>
                  <h1 className='text-[0.6rem]  w-[30%] md:text-[1.2rem]'>
                    {tx.tx_name}
                  </h1>
                  <div className='w-[10%]'>
                    <AccordionIcon />
                  </div>
                </div>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <div className='flex flex-col w-full '>
                  <div className='flex w-full gap-5 mb-2 mt-2'>
                    <h1 className='text-[0.6rem] w-[50%] md:text-[0.8rem] xl:text-[1.2rem]'>
                      <span className='font-bold'>💓Blood pressure:</span>
                      {tx.bp}
                    </h1>
                    <h1 className='text-[0.6rem]  w-[50%] md:text-[0.8rem] xl:text-[1.2rem]'>
                      <span className='font-bold'>❤️️HR:</span> {tx.hr}
                    </h1>
                  </div>
                  <div className='flex flex-col items-start gap-2 w-full'>
                    <div className='flex mt-2 w-full'>
                      <h1 className='text-[0.6rem] w-[20%] font-bold md:text-[0.8rem] xl:text-[1.2rem]'>
                        👨‍🦽PI:
                      </h1>
                      <p className='text-[0.6rem] w-[80%] text-start md:text-[0.8rem] xl:text-[1.2rem]'>
                        {tx.pi}
                      </p>
                    </div>
                    <div className='flex mt-2  w-full'>
                      <h1 className='text-[0.6rem] w-[20%] font-bold md:text-[0.8rem] xl:text-[1.2rem]'>
                        💊PH:
                      </h1>
                      <p className='text-[0.6rem] w-[80%] text-start md:text-[0.8rem] xl:text-[1.2rem]'>
                        {tx.ph}
                      </p>
                    </div>
                    <div className='flex mt-2  w-full'>
                      <h1 className='text-[0.6rem] w-[20%] font-bold md:text-[0.8rem] xl:text-[1.2rem]'>
                        🤸‍♀️PE:
                      </h1>
                      <p className='text-[0.6rem] w-[80%] text-start md:text-[0.8rem] xl:text-[1.2rem]'>
                        {tx.pe}
                      </p>
                    </div>
                    <div className='flex mt-2  w-full'>
                      <h1 className='text-[0.6rem] w-[20%] font-bold md:text-[0.8rem] xl:text-[1.2rem]'>
                        🦴Tx:
                      </h1>
                      <p className='text-[0.6rem] w-[80%] text-start md:text-[0.8rem] xl:text-[1.2rem]'>
                        {tx.tx}
                      </p>
                    </div>
                    <div className='flex mt-2  w-full'>
                      <h1 className='text-[0.6rem] w-[20%] font-bold md:text-[0.8rem] xl:text-[1.2rem]'>
                        ✌️Result:
                      </h1>
                      <p className='text-[0.6rem] w-[80%] text-start md:text-[0.8rem] xl:text-[1.2rem]'>
                        {tx.result}
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default TreatmentPage;
