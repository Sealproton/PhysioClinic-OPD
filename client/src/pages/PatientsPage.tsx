import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import Swal from 'sweetalert2';

interface patientData {
  pt_id: number;
  created_at: string;
  hn: string;
  name: string;
  lname: string;
  age: number;
  ud: string;
  address: string;
  tel: string;
  height: number;
  weight: number;
  smoke: boolean;
  alcohol: boolean;
}
const PatientsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const {
    data: ptData,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['PT'],
    queryFn: async () => {
      const data = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/patients?query=${searchTerm}?${page}`
      );
      return data.data;
    },
  });
  const handleSearch = debounce((e) => {
    setSearchTerm(e.target.value);
    const refetcher = debounce(() => {
      refetch();
    }, 200);
    refetcher();
  }, 500);
  return (
    <div className='w-full p-4 flex flex-col items-center md:p-8 md:px-10 lg:px-28 xl:px-40'>
      <header className='w-full flex flex-col items-center'>
        <div className='w-full flex justify-between'>
          <button
            className='text-[0.5rem] text-red-500 font-bold h-[20px] bg-gray-100 px-1 rounded-xl  md:text-[0.8rem] md:h-[35px] md:p-2 hover:text-gray-600'
            onClick={() => {
              Swal.fire({
                title: 'Are you sure?',
                text: 'Your account will be signed out!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, sign out!',
              }).then((result) => {
                if (result.isConfirmed) {
                  window.localStorage.removeItem('token');
                  window.location.reload();
                }
              });
            }}
          >
            Sign out
          </button>
          <Link to='/create'>
            <h1 className='text-[1rem] font-bold p-2 rounded-xl  md:text-[1.4rem] md:p-3 hover:text-gray-600'>
              Create Patients
            </h1>
          </Link>
        </div>
        <h1 className='mt-2 font-extrabold text-[2rem] tracking-wide drop-shadow-sm md:text-[3rem] lg:text-[3.5rem] lx:mt-0'>
          OPD Patients
        </h1>
      </header>
      <section
        id='Search Box'
        className='mt-1 flex gap-2 w-full justify-center items-center md:mt-2'
      >
        <label
          htmlFor='search'
          className='text-[1rem] font-semibold md:text-[1.2rem]'
        >
          Search
        </label>
        <input
          id='search'
          placeholder='ex. Morgan Arthor, 66/17'
          className='w-[80%] h-[1.8rem] text-[0.8rem] bg-gray-200 rounded-md border-[0.5px] border-amber-500 pl-2 md:h-[2.5rem] md:text-[1.2rem]'
          onChange={(e) => handleSearch(e)}
        ></input>
      </section>

      {isLoading && (
        <div className=' mt-44'>
          <CircularProgress isIndeterminate color='green.300' w={9} h={9} />
        </div>
      )}
      {isError && (
        <div className=' mt-44'>
          <h1
            className='text-gray-400 text-[1.2rem] cursor-pointer'
            onClick={() => refetch()}
          >
            Something wrong Tap here to retry
          </h1>
        </div>
      )}
      <section
        id='PT listed Container'
        className={`w-full flex min-h-[80%] flex-col gap-2 items-center mt-3 md:gap-4 lg:gap-4 xl:w-[90%] ${
          isError && 'hidden'
        } ${isLoading && 'hidden'}`}
      >
        <h1 className='w-full text-[0.8rem] text-gray-500 text-center my-[-5px] font-semibold md:text-[1rem] md:my-[-2px]'>
          Total patients: {ptData?.count}
        </h1>
        <div className='w-full justify-center mb-1  px-1 grid grid-cols-[12%_26%_36%_12%_14%] border-b-[1px] border-gray-400 md:mb-2 '>
          <h1 className='text-center text-[1rem] font-semibold md:text-[1.4rem]'>
            H.N
          </h1>
          <h1 className='text-center text-[1rem] font-semibold md:text-[1.4rem]'>
            Name
          </h1>
          <h1 className='text-center text-[1rem] font-semibold md:text-[1.4rem]'>
            Lastname
          </h1>
          <h1 className='text-center text-[1rem] font-semibold md:text-[1.4rem]'>
            Age
          </h1>
          <h1 className='text-center text-[1rem] font-semibold md:text-[1.4rem]'>
            Doc
          </h1>
        </div>

        {ptData?.data.map((data: patientData, index: number) => {
          return (
            <div
              key={index}
              className='w-full justify-center items-center px-1 grid grid-cols-[12%_26%_36%_12%_14%] h-[32px] border-[1px] border-gray-500 bg-[#efeae4] rounded-md md:h-[50px] xl:h-[60px]'
            >
              <h1 className='text-center text-[0.6rem] text-gray-700 font-semibold md:text-[1.2rem]'>
                {data.hn}
              </h1>
              <h1 className='text-center text-[0.6rem] text-gray-700 font-semibold md:text-[1.2rem]'>
                {data.name}
              </h1>
              <h1 className='text-center text-[0.6rem] text-gray-700 font-semibold md:text-[1.2rem]'>
                {data.lname}
              </h1>
              <h1 className='text-center text-[0.6rem] text-gray-700 font-semibold md:text-[1.2rem]'>
                {data.age}
              </h1>
              <Link to={`/${data.pt_id * 658243}`}>
                <h1 className='text-center text-[1.2rem]  font-semibold md:text-[1.8rem] cursor-pointer'>
                  📝
                </h1>
              </Link>
            </div>
          );
        })}
        <footer
          className={`${
            Number(ptData?.count) < 11 && 'hidden'
          } w-full flex justify-center items-center mt-5 gap-2 md:mt-8`}
        >
          <FiChevronsLeft
            className={`${
              page === 1 ? ' text-gray-300 ' : 'text-gray-500'
            } text-[1.8rem]  md:text-[2rem] cursor-pointer`}
            onClick={() => {
              page === 1 ? setPage(1) : setPage(page - 1);
              const refetcher = debounce(() => {
                refetch();
              }, 200);
              refetcher();
            }}
          />
          <h1 className='text-[1rem] font-semibold text-gray-800 md:text-[1.5rem]'>
            Page {page}
          </h1>
          <FiChevronsRight
            className={`${
              page > Number(ptData?.count) % 10
                ? ' text-gray-300 '
                : 'text-gray-500'
            } text-[1.8rem] text-gray-500 md:text-[2rem] cursor-pointer`}
            onClick={() => {
              page > Number(ptData?.count) % 10
                ? setPage(page)
                : setPage(page + 1);
              const refetcher = debounce(() => {
                refetch();
              }, 200);
              refetcher();
            }}
          />
        </footer>
      </section>
    </div>
  );
};

export default PatientsPage;
