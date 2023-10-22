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
];

const PatientsPage: React.FC = () => {
  return (
    <div className='h-screen w-full p-4 flex flex-col items-center'>
      <header className='w-full flex flex-col items-center'>
        <div className='w-full flex justify-end'>
          <h1 className='text-[0.8rem] font-bold  bg-amber-200 p-2 rounded-xl border-[1px] border-gray-400 shadow-lg'>
            Create Patients
          </h1>
        </div>
        <h1 className='mt-2 font-extrabold text-[2rem] tracking-wide drop-shadow-sm'>
          OPD Patients
        </h1>
      </header>
      <section
        id='Search Box'
        className='mt-1 flex gap-2 w-full justify-center items-center'
      >
        <label htmlFor='search' className='text-[1rem] font-semibold'>
          Search
        </label>
        <input
          id='search'
          placeholder='ex. Morgan Arthor, 66/17'
          className='w-[80%] h-[1.8rem] text-[0.8rem] bg-gray-200 rounded-md border-[0.5px] border-amber-500 pl-2'
        ></input>
      </section>
      <section
        id='PT listed Container'
        className=' w-full flex flex-col gap-2 items-center mt-3'
      >
        <h1 className='w-full text-[0.8rem] text-gray-500 text-center my-[-5px] font-semibold'>
          Total patients: {mockdata.length}
        </h1>
        <div className='w-full justify-center mb-1  px-1 grid grid-cols-[12%_28%_38%_12%_10%] border-b-[1px] border-gray-400'>
          <h1 className='text-center text-[1rem] font-semibold'>H.N</h1>
          <h1 className='text-center text-[1rem] font-semibold'>Name</h1>
          <h1 className='text-center text-[1rem] font-semibold'>Lastname</h1>
          <h1 className='text-center text-[1rem] font-semibold'>Age</h1>
          <h1 className='text-center text-[1rem] font-semibold'>Edit</h1>
        </div>

        {mockdata.map((data: patientData) => {
          return (
            <div className='w-full justify-center items-center px-1 grid grid-cols-[12%_28%_38%_12%_10%] h-[2rem] border-[1px] border-gray-500 bg-[#efeae4] rounded-md'>
              <h1 className='text-center text-[0.8rem] text-gray-700 font-semibold'>
                {data.hn}
              </h1>
              <h1 className='text-center text-[0.8rem] text-gray-700 font-semibold'>
                {data.name}
              </h1>
              <h1 className='text-center text-[0.8rem] text-gray-700 font-semibold'>
                {data.lname}
              </h1>
              <h1 className='text-center text-[0.8rem] text-gray-700 font-semibold'>
                {data.age}
              </h1>
              <h1 className='text-center text-[0.8rem]  font-semibold'>📝</h1>
            </div>
          );
        })}
        <footer className='w-full flex justify-center items-center mt-5 gap-2'>
          <FiChevronsLeft className='text-[1.8rem] text-gray-500' />
          <h1 className='text-[1rem] font-semibold text-gray-800'>Page 2</h1>
          <FiChevronsRight className='text-[1.8rem] text-gray-500' />
        </footer>
      </section>
    </div>
  );
};

export default PatientsPage;
