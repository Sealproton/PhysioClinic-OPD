import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
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
const mockdata: patientData[] = [
  {
    pt_id: 32,
    created_at: '2023-10-20T23:40:21.803Z',
    hn: '66/1',
    name: 'John3',
    lname: 'Terry2',
    age: 25,
    ud: 'cancer,dm2',
    address: '200/900 test test USA2',
    tel: '099999999292',
    height: 1882,
    weight: 882,
    smoke: false,
    alcohol: false,
  },
  {
    pt_id: 33,
    created_at: '2023-10-20T23:47:16.480Z',
    hn: '66/1',
    name: 'John',
    lname: 'Terry',
    age: 25,
    ud: 'cancer,dm',
    address: '200/900 test test USA',
    tel: '0999999999',
    height: 188,
    weight: 88,
    smoke: true,
    alcohol: true,
  },
  {
    pt_id: 32,
    created_at: '2023-10-20T23:40:21.803Z',
    hn: '66/1',
    name: 'John3',
    lname: 'Terry2',
    age: 25,
    ud: 'cancer,dm2',
    address: '200/900 test test USA2',
    tel: '099999999292',
    height: 1882,
    weight: 882,
    smoke: false,
    alcohol: false,
  },
  {
    pt_id: 33,
    created_at: '2023-10-20T23:47:16.480Z',
    hn: '66/1',
    name: 'John',
    lname: 'Terry',
    age: 25,
    ud: 'cancer,dm',
    address: '200/900 test test USA',
    tel: '0999999999',
    height: 188,
    weight: 88,
    smoke: true,
    alcohol: true,
  },
  {
    pt_id: 32,
    created_at: '2023-10-20T23:40:21.803Z',
    hn: '66/1',
    name: 'John3',
    lname: 'Terry2',
    age: 25,
    ud: 'cancer,dm2',
    address: '200/900 test test USA2',
    tel: '099999999292',
    height: 1882,
    weight: 882,
    smoke: false,
    alcohol: false,
  },
  {
    pt_id: 33,
    created_at: '2023-10-20T23:47:16.480Z',
    hn: '66/1',
    name: 'John',
    lname: 'Terry',
    age: 25,
    ud: 'cancer,dm',
    address: '200/900 test test USA',
    tel: '0999999999',
    height: 188,
    weight: 88,
    smoke: true,
    alcohol: true,
  },
  {
    pt_id: 32,
    created_at: '2023-10-20T23:40:21.803Z',
    hn: '66/1',
    name: 'John3',
    lname: 'Terry2',
    age: 25,
    ud: 'cancer,dm2',
    address: '200/900 test test USA2',
    tel: '099999999292',
    height: 1882,
    weight: 882,
    smoke: false,
    alcohol: false,
  },
  {
    pt_id: 33,
    created_at: '2023-10-20T23:47:16.480Z',
    hn: '66/1',
    name: 'John',
    lname: 'Terry',
    age: 25,
    ud: 'cancer,dm',
    address: '200/900 test test USA',
    tel: '0999999999',
    height: 188,
    weight: 88,
    smoke: true,
    alcohol: true,
  },
  {
    pt_id: 32,
    created_at: '2023-10-20T23:40:21.803Z',
    hn: '66/1',
    name: 'John3',
    lname: 'Terry2',
    age: 25,
    ud: 'cancer,dm2',
    address: '200/900 test test USA2',
    tel: '099999999292',
    height: 1882,
    weight: 882,
    smoke: false,
    alcohol: false,
  },
  {
    pt_id: 33,
    created_at: '2023-10-20T23:47:16.480Z',
    hn: '66/1',
    name: 'John',
    lname: 'Terry',
    age: 25,
    ud: 'cancer,dm',
    address: '200/900 test test USA',
    tel: '0999999999',
    height: 188,
    weight: 88,
    smoke: true,
    alcohol: true,
  },
  {
    pt_id: 32,
    created_at: '2023-10-20T23:40:21.803Z',
    hn: '66/1',
    name: 'John3',
    lname: 'Terry2',
    age: 25,
    ud: 'cancer,dm2',
    address: '200/900 test test USA2',
    tel: '099999999292',
    height: 1882,
    weight: 882,
    smoke: false,
    alcohol: false,
  },
  {
    pt_id: 33,
    created_at: '2023-10-20T23:47:16.480Z',
    hn: '66/1',
    name: 'John',
    lname: 'Terry',
    age: 25,
    ud: 'cancer,dm',
    address: '200/900 test test USA',
    tel: '0999999999',
    height: 188,
    weight: 88,
    smoke: true,
    alcohol: true,
  },
  {
    pt_id: 32,
    created_at: '2023-10-20T23:40:21.803Z',
    hn: '66/1',
    name: 'John3',
    lname: 'Terry2',
    age: 25,
    ud: 'cancer,dm2',
    address: '200/900 test test USA2',
    tel: '099999999292',
    height: 1882,
    weight: 882,
    smoke: false,
    alcohol: false,
  },
  {
    pt_id: 33,
    created_at: '2023-10-20T23:47:16.480Z',
    hn: '66/1',
    name: 'John',
    lname: 'Terry',
    age: 25,
    ud: 'cancer,dm',
    address: '200/900 test test USA',
    tel: '0999999999',
    height: 188,
    weight: 88,
    smoke: true,
    alcohol: true,
  },
  {
    pt_id: 32,
    created_at: '2023-10-20T23:40:21.803Z',
    hn: '66/1',
    name: 'John3',
    lname: 'Terry2',
    age: 25,
    ud: 'cancer,dm2',
    address: '200/900 test test USA2',
    tel: '099999999292',
    height: 1882,
    weight: 882,
    smoke: false,
    alcohol: false,
  },
];

const PatientsPage: React.FC = () => {
  return (
    <div className='w-full p-4 flex flex-col items-center md:p-8 md:px-10 lg:px-28 xl:px-40'>
      <header className='w-full flex flex-col items-center'>
        <div className='w-full flex justify-end'>
          <h1 className='text-[0.8rem] font-bold  bg-amber-200 p-2 rounded-xl border-[1px] border-gray-400 shadow-lg md:text-[1.2rem] md:p-3'>
            Create Patients
          </h1>
        </div>
        <h1 className='mt-2 font-extrabold text-[2rem] tracking-wide drop-shadow-sm md:text-[3rem] lg:text-[3.5rem]'>
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
        ></input>
      </section>
      <section
        id='PT listed Container'
        className=' w-full flex flex-col gap-2 items-center mt-3 md:gap-4 lg:gap-4 xl:w-[90%]'
      >
        <h1 className='w-full text-[0.8rem] text-gray-500 text-center my-[-5px] font-semibold md:text-[1rem] md:my-[-2px]'>
          Total patients: {mockdata.length}
        </h1>
        <div className='w-full justify-center mb-1  px-1 grid grid-cols-[12%_28%_38%_12%_10%] border-b-[1px] border-gray-400 md:mb-2 '>
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
            Edit
          </h1>
        </div>

        {mockdata.map((data: patientData) => {
          return (
            <div className='w-full justify-center items-center px-1 grid grid-cols-[12%_28%_38%_12%_10%] h-[32px] border-[1px] border-gray-500 bg-[#efeae4] rounded-md md:h-[50px]'>
              <h1 className='text-center text-[0.8rem] text-gray-700 font-semibold md:text-[1.2rem]'>
                {data.hn}
              </h1>
              <h1 className='text-center text-[0.8rem] text-gray-700 font-semibold md:text-[1.2rem]'>
                {data.name}
              </h1>
              <h1 className='text-center text-[0.8rem] text-gray-700 font-semibold md:text-[1.2rem]'>
                {data.lname}
              </h1>
              <h1 className='text-center text-[0.8rem] text-gray-700 font-semibold md:text-[1.2rem]'>
                {data.age}
              </h1>
              <h1 className='text-center text-[0.8rem]  font-semibold md:text-[1.2rem]'>
                📝
              </h1>
            </div>
          );
        })}
        <footer className='w-full flex justify-center items-center mt-3 gap-2 md:mt-8'>
          <FiChevronsLeft className='text-[1.8rem] text-gray-500 md:text-[2rem]' />
          <h1 className='text-[1rem] font-semibold text-gray-800 md:text-[1.5rem]'>
            Page 2
          </h1>
          <FiChevronsRight className='text-[1.8rem] text-gray-500 md:text-[2rem]' />
        </footer>
      </section>
    </div>
  );
};

export default PatientsPage;
