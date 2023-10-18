import { useState } from 'react';
import Logo from '../assets/img/Logo.png';
import { Button } from '@chakra-ui/react';
import { useAuth } from '../ContextAPI/authContext';
import { useToast } from '@chakra-ui/react';
import { AuthContextValues } from '../ContextAPI/authContext';
import { FcUnlock, FcManager } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const { signUp, signIn } = useAuth() as AuthContextValues;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const result = await signUp(username, password);
      console.log(result);
      if (result.message === 'user exist') {
        toast({
          title: 'Please try other username',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else if (result.message === 'incorrect password') {
        toast({
          title: 'Please input your password',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else if (result.message === 'incorrect username') {
        toast({
          title: 'Please input your username',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Sign up seccess in success',
          description: `Welcome ❤️️`,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        await signIn(username, password);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: 'Something wrong',
        description: 'Please try again later',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col items-center bg-[#efeae4]  w-[80%] px-5 py-5 rounded-xl shadow-2xl'>
        <img
          src={Logo}
          title='physio logo'
          className='rounded-full h-[120px] w-[120px] shadow-xl '
        />
        <h1 className='flex justify-start  w-full font-bold text-[2rem] text-gray-700 mt-5'>
          Sign Up
        </h1>
        <form className='flex gap-1 flex-col w-full mt-3'>
          <label htmlFor='username' className='flex items-center'>
            Username <FcManager />
          </label>
          <input
            id='username'
            type='text'
            value={username}
            className='mt-1 rounded-md pl-2 h-[30px] text-[16px] focus:outline-none focus:border-[1px] focus:border-gray-600'
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor='password' className='mt-1 gap-1 flex items-center'>
            Password <FcUnlock />
          </label>
          <input
            id='password'
            type='text'
            value={password}
            className='mt-1 rounded-md pl-2 h-[30px] text-[16px] focus:outline-none focus:border-[1px] focus:border-gray-600'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </form>
        <div className='w-full flex justify-between items-center mt-5'>
          <Link to='/' className='text-gray-500 text-[0.8rem]'>
            Already have account?
          </Link>
          {isLoading ? (
            <Button isLoading loadingText='Loading' colorScheme='blue' w='40%'>
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
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
