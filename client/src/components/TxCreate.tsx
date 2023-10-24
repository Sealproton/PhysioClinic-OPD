import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useToast } from '@chakra-ui/react';
interface createTxData {
  bp: string;
  hr: number;
  cc: string;
  pi: string;
  ph: string;
  pe: string;
  tx: string;
  result: string;
  tx_name: string;
}
interface TreatmentProp {
  pt_id: number;
}
const CreateTreatment: React.FC<TreatmentProp> = ({ pt_id }) => {
  const toast = useToast();
  const [bp, setBp] = useState<string>('');
  const [hr, setHr] = useState<number | null>(null);
  const [cc, setCc] = useState<string>('');
  const [pi, setPi] = useState<string>('');
  const [ph, setPh] = useState<string>('');
  const [pe, setPe] = useState<string>('');
  const [tx, setTx] = useState<string[]>([]);
  const [txInput, setTxInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [tx_name, setTx_name] = useState<string>('');

  const { mutate: createTx } = useMutation({
    mutationFn: (treatment: createTxData): any => {
      return axios.post(
        `${import.meta.env.VITE_SERVER_URL}/treatments/create/${pt_id}`,
        treatment
      );
    },
    onSuccess: () => {
      Swal.fire('Edited!', 'Treatment created.', 'success');
      window.location.reload();
    },
    onError: (error) => {
      Swal.fire('Error!', 'Create treatment fail.', 'error');
      console.log(error);
    },
  });
  const handleCreate = () => {
    const formTxCreate: createTxData = {
      bp,
      hr: hr ? hr : 0,
      cc,
      pi,
      ph,
      pe,
      tx: tx.join('#=#'),
      result,
      tx_name,
    };
    console.log(formTxCreate);
    if (formTxCreate.tx_name === '') {
      return toast({
        title: 'Physiotherapist cannot be null',
        description: 'Please edit physiotherapist name',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    Swal.fire({
      title: 'Are you sure?',
      text: 'YWould you like to create treatment!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        createTx(formTxCreate);
      }
    });
  };
  return (
    <div className='flex flex-col items-start w-full md:w-[80%]'>
      <header className='w-full flex justify-center mt-2 mb-2 '>
        <h1 className='text-[1.2rem] font-semibold xl:text-[2rem]'>
          Create Treatment
        </h1>
      </header>
      <section className='w-full flex gap-2 mt-5 md:mt-8'>
        <div className='flex w-1/2 gap-2 items-center '>
          <label
            htmlFor='bp'
            className='text-[0.8rem] font-semibold md:text-[1.2rem]'
          >
            BP
          </label>
          <input
            id='bp'
            onChange={(e) => setBp(e.target.value)}
            className='w-[50%] pl-2 border-[1px] text-[0.8rem] border-gray-500  rounded-md md:text-[1.2rem]'
          ></input>
          <p className='text-[0.8rem] md:text-[1.2rem]'>mmHg</p>
        </div>
        <div className='flex w-1/2 gap-3 items-center'>
          <label
            htmlFor='hr'
            className='text-[0.8rem] font-semibold md:text-[1.2rem]'
          >
            HR
          </label>
          <input
            id='hr'
            type='number'
            onChange={(e) => setHr(Number(e.target.value))}
            className='w-[50%] pl-2 border-[1px] text-[0.8rem] border-gray-500  rounded-md md:text-[1.2rem]'
          ></input>
          <p className='text-[0.8rem] md:text-[1.2rem]'>bpm</p>
        </div>
      </section>
      <section className='flex flex-col w-full'>
        <div className='w-full flex items-start mt-3 md:mt-6 xl:mt-8'>
          <label
            htmlFor='cc'
            className='text-[0.8rem] font-semibold w-[10%] text-start md:text-[1.2rem]'
          >
            CC
          </label>
          <textarea
            id='cc'
            onChange={(e) => setCc(e.target.value)}
            className='w-[90%] pl-2 border-[1px] text-[0.8rem] border-gray-500  rounded-md md:text-[1.2rem]'
          ></textarea>
        </div>
        <div className='w-full flex items-start mt-3 md:mt-6 xl:mt-8'>
          <label
            htmlFor='pi'
            className='text-[0.8rem] font-semibold w-[10%] text-start md:text-[1.2rem]'
          >
            PI
          </label>
          <textarea
            id='pi'
            onChange={(e) => setPi(e.target.value)}
            className='w-[90%] pl-2 border-[1px] text-[0.8rem] border-gray-500  rounded-md md:text-[1.2rem]'
          ></textarea>
        </div>
        <div className='w-full flex items-start mt-3 md:mt-6 xl:mt-8'>
          <label
            htmlFor='ph'
            className='text-[0.8rem] font-semibold w-[10%] text-start md:text-[1.2rem]'
          >
            PH
          </label>
          <textarea
            id='ph'
            onChange={(e) => setPh(e.target.value)}
            className='w-[90%] pl-2 border-[1px] text-[0.8rem] border-gray-500  rounded-md md:text-[1.2rem]'
          ></textarea>
        </div>
        <div className='w-full flex items-start mt-3 md:mt-6 xl:mt-8'>
          <label
            htmlFor='pe'
            className='text-[0.8rem] font-semibold w-[10%] text-start md:text-[1.2rem]'
          >
            PE
          </label>
          <textarea
            id='pe'
            onChange={(e) => setPe(e.target.value)}
            className='w-[90%] pl-2 border-[1px] text-[0.8rem] border-gray-500  rounded-md md:text-[1.2rem]'
          ></textarea>
        </div>
        <div className='w-full flex items-start mt-3 md:mt-6 xl:mt-8'>
          <label
            htmlFor='tx'
            className='text-[0.8rem] font-semibold w-[20%] text-start md:text-[1.2rem] xl:w-[10%]'
          >
            Treatment
          </label>
          <div className='w-[80%] flex flex-col xl:w-[90%]'>
            {tx?.map((e, index) => {
              return (
                <p
                  key={index}
                  className='flex justify-between text-[0.8rem] w-full text-start pl-2 pr-3 md:text-[1.2rem] mb-2 xl:mb-4'
                >
                  {e}{' '}
                  <span
                    className='text-[0.6rem] opacity-25  cursor-pointer md:text-[0.8rem]'
                    onClick={() => {
                      let newTxList = tx.filter((treatment) => treatment != e);
                      setTx(newTxList);
                    }}
                  >
                    ❌
                  </span>
                </p>
              );
            })}
            <div className='w-full flex gap-2'>
              <input
                id='tx'
                value={txInput}
                onChange={(e) => setTxInput(e.target.value)}
                className='w-[95%] border-[0.5px] border-gray-300 rounded-md text-[0.8rem] pl-2 md:text-[1.2rem]'
              ></input>
              <button
                onClick={() => {
                  setTx([...tx, txInput]);
                  setTxInput('');
                }}
                className='text-[0.6rem] w-[10%] p-1 rounded-md bg-green-200 h-fit md:text-[0.8rem]'
              >
                add
              </button>
            </div>
          </div>
        </div>
        <div className='w-full flex items-start mt-3 md:mt-6 xl:mt-8'>
          <label
            htmlFor='result'
            className='text-[0.8rem] font-semibold w-[15%] text-start md:text-[1.2rem] xl:w-[10%]'
          >
            Result
          </label>
          <textarea
            id='result'
            onChange={(e) => setResult(e.target.value)}
            className='w-[85%] pl-2 border-[1px] text-[0.8rem] border-gray-500  rounded-md md:text-[1.2rem] xl:w-[90%]'
          ></textarea>
        </div>
        <div className='w-full flex items-start mt-3 md:mt-6 xl:mt-8'>
          <label
            htmlFor='tx_name'
            className='text-[0.8rem]  font-semibold  w-[30%] text-start md:text-[1.2rem] xl:w-[15%]'
          >
            Physiotherapist
          </label>
          <input
            id='tx_name'
            onChange={(e) => setTx_name(e.target.value)}
            className='w-[40%] pl-2 border-[1px] text-[0.8rem] border-gray-500  rounded-md md:text-[1.2rem] '
          ></input>
        </div>
      </section>
      <section className='w-full flex justify-end mt-12'>
        <button
          onClick={handleCreate}
          className='p-1 bg-amber-200 rounded-xl text-[0.8rem] hover:bg-amber-300 md:text-[1rem] md:px-3 xl:text-[1.2rem]'
        >
          Creat Treatment
        </button>
      </section>
    </div>
  );
};

export default CreateTreatment;
