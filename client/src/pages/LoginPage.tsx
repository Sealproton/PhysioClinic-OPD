import { useState } from 'react';
import Logo from '../assets/img/Logo.png';
import { Button } from '@chakra-ui/react';
import { useAuth } from '../ContextAPI/authContext';
import { useToast } from '@chakra-ui/react';
import { AuthContextValues } from '../ContextAPI/authContext';
import { FcUnlock, FcManager } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const LoginPage: React.FC = () => {
  const { signIn } = useAuth() as AuthContextValues;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const result = await signIn(username, password);
      if (result === 400 || result === 404 || result === 401) {
        toast({
          title: 'Incorrect username or password.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else if (result === 500) {
        toast({
          title: 'Something wrong.',
          description: 'Please try again later',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Logging in success',
          description: `Welcome ❤️️`,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: 'Something wrong',
        description: 'Please try again later',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col items-center bg-[#efeae4] w-[80%] px-5 py-5 rounded-xl shadow-2xl md:w-[50%] xl:flex-row xl:w-[60%] xl:h-[70%]'>
        <div className='xl:w-[50%] xl:h-full xl:flex xl:justify-center xl:items-center'>
          <img
            src={Logo}
            title='physio logo'
            className='rounded-full h-[150px] w-[150px] shadow-xl  mb-3 md:w-[180px] md:h-[180px] xl:w-[250px] xl:h-[250px]'
          />
        </div>

        <div className='w-full  xl:flex xl:flex-col xl:justify-center xl:w-[50%] xl:h-full xl:border-l-2 xl:border-gray-300 xl:px-10 '>
          <h1 className='flex justify-start  w-full font-bold text-[2rem] text-gray-700 mt-5 xl:mb-6'>
            Sign in
          </h1>
          <div className='w-full flex '>
            <p className='text-gray-500 text-[0.8rem]'>New user?</p>
            <Link
              to='/signup'
              className='ml-1 font-semibold text-blue-500 text-[0.8rem] hover:underline cursor-pointer'
            >
              Create Acoount
            </Link>
          </div>
          <form className='flex gap-1 flex-col w-full mt-3'>
            <label htmlFor='username' className='flex items-center'>
              Username <FcManager />
            </label>
            <input
              id='username'
              type='text'
              value={username}
              className='mt-1 rounded-md pl-2 h-[30px] text-[1rem] focus:outline-none focus:border-[1px] focus:border-gray-600'
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label
              htmlFor='password'
              className='mt-1 gap-1 flex items-center  xl:mt-3'
            >
              Password <FcUnlock />
            </label>
            <input
              id='password'
              type='text'
              value={password}
              className='mt-1 rounded-md pl-2 h-[30px] text-[1rem] focus:outline-none focus:border-[1px] focus:border-gray-600'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </form>
          <div className='w-full flex justify-end mt-5 xl:mt-8'>
            {isLoading ? (
              <Button
                isLoading
                loadingText='Loading'
                colorScheme='blue'
                w='40%'
              >
                Submit
              </Button>
            ) : (
              <Button
                colorScheme='blue'
                w='40%'
                fontWeight='bold'
                fontSize='xl'
                onClick={handleSubmit}
              >
                Log in
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
