import { useState } from 'react';
import { FcPrevious } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { mockdata } from './PatientsPage';
interface CreatePatient {
  HN: string;
  name: string;
  lname: string;
  age: number;
  UD: string;
  address: string;
  tel: string;
  height: number;
  weight: number;
  smoke: boolean;
  alcohol: boolean;
}
const currentYear = (new Date().getFullYear() + 543) % 100;
const getLastedPtYear = Number(mockdata[mockdata.length - 1].hn.split('/')[0]);
const getLastedPtNumber =
  currentYear === getLastedPtYear
    ? Number(mockdata[mockdata.length - 1].hn.split('/')[1])
    : 0;

const CreatePatient: React.FC = () => {
  const [HN, setHN] = useState<string>(
    `${currentYear}/${getLastedPtNumber + 1}`
  );
  const [name, setName] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [age, setAge] = useState<number>(100);
  const [UD, setUD] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [smoke, setSmoke] = useState<boolean>(false);
  const [alcohol, setAlcohol] = useState<boolean>(false);
  return (
    <div className='relative w-full py-3 px-4 md:px-10 md:py-8 xl:w-3/4'>
      <section>
        <Link to='/'>
          <button className='flex p-2 items-center md:text-2xl'>
            <FcPrevious />
            Back
          </button>
        </Link>
      </section>
      <section className='w-full flex items-center justify-end gap-2'>
        <label htmlFor='hn' className='md:text-[1.6rem]'>
          🏥 H.N
        </label>
        <input
          id='hn'
          value={HN}
          className='w-[100px] pl-2 border-[1px] border-gray-500 rounded-md md:text-[1.6rem]'
        ></input>
      </section>
      <section className='w-full flex flex-col mt-6 xl:flex-row xl:mt-10 xl:items-center'>
        <div className=' flex gap-9'>
          <label htmlFor='name' className='md:text-[1.6rem] '>
            👨‍🦲 Name
          </label>
          <input
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-[60%] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem]'
          ></input>
        </div>
        <div className='flex gap-2 mt-6 xl:mt-0'>
          <label htmlFor='lname' className='md:text-[1.6rem]'>
            👨‍👩‍👦 Lastname
          </label>
          <input
            id='lname'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className='w-[60%] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem]'
          ></input>
        </div>
      </section>

      <section className='flex items-center gap-1  mt-6 md:gap-8'>
        <div className=' flex gap-1'>
          <label
            htmlFor='age'
            className='w-[50px] md:text-[1.6rem] md:w-[80px]'
          >
            👼Age
          </label>
          <input
            id='age'
            type='number'
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className='w-[45px] pl-2 border-[1px] border-gray-500 rounded-md md:text-[1.6rem] md:w-[90px]'
          ></input>
        </div>
        <div className='flex '>
          <label
            htmlFor='weight'
            className='w-[75px] md:text-[1.6rem] md:w-[120px]'
          >
            🍖Weight
          </label>
          <input
            id='weight'
            type='number'
            onChange={(e) => setWeight(Number(e.target.value))}
            value={weight as number}
            className='w-[50px] pl-2 border-[1px] border-gray-500 rounded-md md:text-[1.6rem] md:w-[90px]'
          ></input>
        </div>
        <div className=' flex '>
          <label
            htmlFor='height'
            className='w-[75px] md:text-[1.6rem] md:w-[120px]'
          >
            📏Height
          </label>
          <input
            id='height'
            type='number'
            onChange={(e) => setHeight(Number(e.target.value))}
            value={height as number}
            className='w-[50px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[90px]'
          ></input>
        </div>
      </section>
      <section className='flex flex-col mt-6'>
        <label
          htmlFor='address'
          className='w-[100px] md:text-[1.6rem] xl:w-[150px]'
        >
          🏡Address
        </label>
        <textarea
          id='address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='w-full mt-2 p-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem]'
        ></textarea>
      </section>
      <section className='flex flex-col  gap-6 mt-6'>
        <div className='flex '>
          <label
            htmlFor='tel'
            className='w-[140px] md:text-[1.6rem] md:w-[230px]'
          >
            ☎️ Phone Number
          </label>
          <input
            id='tel'
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            className='w-[200px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[350px]'
          ></input>
        </div>
        <div className=' flex '>
          <label
            htmlFor='UD'
            className='w-[150px] md:text-[1.6rem] md:w-[250px]'
          >
            🤒Personal disease
          </label>
          <textarea
            id='UD'
            value={UD}
            onChange={(e) => setUD(e.target.value)}
            className='w-[200px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[400px]'
          ></textarea>
        </div>
      </section>

      <section className=' flex gap-5 mt-6'>
        <div className='flex '>
          <label
            htmlFor='smoke'
            className='w-[90px] md:text-[1.6rem] md:w-[150px]'
          >
            🤒 Smoke
          </label>
          <select
            id='smoke'
            value={smoke === true ? 'true' : 'false'}
            onChange={(e) => setSmoke(e.target.value === 'true' ? true : false)}
            className='w-[65px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[100px]'
          >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
        <div className=' flex '>
          <label
            htmlFor='alcohol'
            className='w-[90px] md:text-[1.6rem] md:w-[150px]'
          >
            🍺 Alcohol
          </label>
          <select
            id='alcohol'
            value={alcohol === true ? 'true' : 'false'}
            onChange={(e) =>
              setAlcohol(e.target.value === 'true' ? true : false)
            }
            className='w-[65px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[100px]'
          >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
      </section>
      <div className='absolute bottom-4 right-1 w-full flex justify-end pr-3 md:bottom-10 md:right-8 xl:bottom-14 xl:right-0'>
        <button className='text-[1rem] font-bold w-[100px]  bg-amber-200 p-2 rounded-xl border-[1.2px] border-gray-400 shadow-lg md:text-[1.8rem] md:p-3 md:w-[200px] md:tracking-wide'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePatient;
