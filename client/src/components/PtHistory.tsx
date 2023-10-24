import { useState } from 'react';
import Swal from 'sweetalert2';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export interface PatientHistoryProps {
  address: string;
  age: number;
  alcohol: boolean;
  created_at: string;
  height: number;
  hn: string;
  lname: string;
  name: string;
  pt_id: number;
  smoke: boolean;
  tel: string;
  ud: string;
  user_id: number;
  weight: number;
}
interface editPatient {
  pt_id: number;
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
const PatientHistory: React.FC<PatientHistoryProps> = (ptData) => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>(ptData.name);
  const [lname, setLname] = useState<string>(ptData.lname);
  const [age, setAge] = useState<number>(ptData.age);
  const [UD, setUD] = useState<string>(ptData.ud);
  const [address, setAddress] = useState<string>(ptData.address);
  const [tel, setTel] = useState<string>(ptData.tel);
  const [height, setHeight] = useState<number>(ptData.height);
  const [weight, setWeight] = useState<number>(ptData.weight);
  const [smoke, setSmoke] = useState<boolean>(ptData.smoke);
  const [alcohol, setAlcohol] = useState<boolean>(ptData.alcohol);
  const [edit, setEdit] = useState<boolean>(false);
  const { mutate: editPtData } = useMutation({
    mutationFn: (patient: editPatient): any => {
      return axios.put(
        `${import.meta.env.VITE_SERVER_URL}/patients/update/${ptData.pt_id}`,
        patient
      );
    },
    onSuccess: () => {
      Swal.fire('Edited!', 'Patient data has been edied.', 'success');
      setEdit(false);
    },
    onError: (error) => {
      Swal.fire('Error!', 'Edit patient fail.', 'error');
      setEdit(false);
    },
  });
  const { mutate: deletePt } = useMutation({
    mutationFn: (): any => {
      return axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/patients/delete/${ptData.pt_id}`
      );
    },
    onSuccess: () => {
      Swal.fire('Deleted!', 'Patient has neet deleted.', 'success');
      navigate('/');
    },
    onError: (error) => {
      Swal.fire('Error!', 'Delete patient fail.', 'error');
      console.log(error);
    },
  });

  const handleCancle = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your's edited data will be removed!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };
  const handleConfirm = () => {
    const formPatient: editPatient = {
      pt_id: Number(ptData.pt_id),
      name: name,
      lname: lname,
      age: Number(age),
      UD: UD,
      address: address,
      tel: tel,
      height: Number(height),
      weight: Number(weight),
      smoke: smoke,
      alcohol: alcohol,
    };
    console.log(formPatient);
    Swal.fire({
      title: 'Are you sure?',
      text: "Your patient's data will be edited!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        editPtData(formPatient);
      }
    });
  };
  const handleDelete = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your patient will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        deletePt();
      }
    });
  };
  const getDayMonthYear = () => {
    const dateString = ptData.created_at;
    const date = new Date(dateString);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };
  return (
    <div className=' w-full py-3 md:px-8 md:py-8 xl:w-3/4'>
      <section className='w-full flex items-center justify-end gap-2 xl:mt-2'>
        <label htmlFor='hn' className='md:text-[1.6rem]'>
          🏥 H.N
        </label>
        <input
          id='hn'
          value={ptData.hn}
          disabled
          className='w-[100px] pl-2 border-[1px] border-gray-500 rounded-md md:text-[1.6rem]'
        ></input>
      </section>
      <section className='w-full font-semibold flex items-center justify-end gap-2 xl:mt-2'>
        <h1>First visited at: {getDayMonthYear()}</h1>
      </section>
      <section className='w-full flex flex-col mt-6 xl:flex-row xl:mt-12 xl:items-center '>
        <div className=' flex gap-9'>
          <label htmlFor='name' className='md:text-[1.6rem] '>
            👨‍🦲 Name
          </label>
          <input
            disabled={!edit}
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
            disabled={!edit}
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className='w-[60%] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem]'
          ></input>
        </div>
      </section>
      <section className='flex items-center gap-1  mt-6 md:gap-8  xl:mt-12'>
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
            disabled={!edit}
            value={age as number}
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
            disabled={!edit}
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
            disabled={!edit}
            onChange={(e) => setHeight(Number(e.target.value))}
            value={height as number}
            className='w-[50px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[90px]'
          ></input>
        </div>
      </section>
      <section className='flex flex-col mt-6  xl:mt-12'>
        <label
          htmlFor='address'
          className='w-[100px] md:text-[1.6rem] xl:w-[150px] '
        >
          🏡Address
        </label>
        <textarea
          id='address'
          value={address}
          disabled={!edit}
          onChange={(e) => setAddress(e.target.value)}
          className='w-full mt-2 p-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem]'
        ></textarea>
      </section>
      <section className='flex flex-col  gap-6 mt-6  xl:mt-12'>
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
            disabled={!edit}
            maxLength={10}
            onChange={(e) => setTel(e.target.value)}
            className='w-[200px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[350px]'
          ></input>
        </div>
        <div className=' flex  xl:mt-12'>
          <label
            htmlFor='UD'
            className='w-[150px] md:text-[1.6rem] md:w-[250px]'
          >
            🤒Personal disease
          </label>
          <textarea
            id='UD'
            value={UD}
            disabled={!edit}
            onChange={(e) => setUD(e.target.value)}
            className='w-[200px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[400px]'
          ></textarea>
        </div>
      </section>
      <section className=' flex gap-5 mt-6  xl:mt-12'>
        <div className='flex '>
          <label
            htmlFor='smoke'
            className='w-[90px] md:text-[1.6rem] md:w-[150px]'
          >
            🤒 Smoke
          </label>
          <select
            id='smoke'
            disabled={!edit}
            value={smoke === true ? 'true' : 'false'}
            onChange={(e) => setSmoke(e.target.value === 'true' ? true : false)}
            className='z-50  w-[65px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[100px] cursor-pointer'
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
            disabled={!edit}
            onChange={(e) =>
              setAlcohol(e.target.value === 'true' ? true : false)
            }
            className=' z-50 w-[65px] pl-2 border-[1px] border-gray-500  rounded-md md:text-[1.6rem] md:w-[100px] cursor-pointer'
          >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
      </section>
      <div className='w-full flex gap-2 justify-end mt-9 md:mt-14 xl:mt-16'>
        <button
          onClick={handleCancle}
          className={`${
            !edit && 'hidden'
          } bg-gray-200 text-gray-800 text-[0.8rem] p-1 px-2 rounded-md border-[1px] hover:bg-gray-300 border-gray-300 md:text-[1.2rem] xl:text-[1.2rem]`}
        >
          Cancle
        </button>
        <button
          onClick={handleDelete}
          className={`${
            !edit && 'hidden'
          } bg-red-300 text-red-800 text-[0.8rem] p-1 px-2 rounded-md border-[1px] hover:bg-gray-400 border-gray-300 md:text-[1.2rem] xl:text-[1.2rem]`}
        >
          Delete Profile
        </button>
        <button
          onClick={handleConfirm}
          className={`${
            !edit && 'hidden'
          } bg-green-300 text-gray-800 text-[0.8rem] p-1 px-2 rounded-md border-[1px] hover:bg-green-300 border-gray-300 md:text-[1.2rem] xl:text-[1.2rem]`}
        >
          Confirm Editing
        </button>
        <button
          onClick={() => setEdit(true)}
          className={`${
            edit && 'hidden'
          } bg-gray-300 text-gray-800 text-[0.8rem] p-1 px-2 rounded-md border-[1px] hover:bg-gray-400 border-gray-300 md:text-[1.2rem] xl:text-[1.2rem]`}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default PatientHistory;
