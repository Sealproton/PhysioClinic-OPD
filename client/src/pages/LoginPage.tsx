import { useState } from 'react';
import Logo from '../assets/img/Logo.png';
import { Button } from '@chakra-ui/react';
import { useAuth } from '../ContextAPI/authContext';
import { useToast } from '@chakra-ui/react';
import { AuthContextValues } from '../ContextAPI/authContext';
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
      if (result === 400) {
        toast({
          title: 'Incorrect username.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else if (result === 404) {
        toast({
          title: 'User not founded.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else if (result === 401) {
        toast({
          title: 'Incorrect password.',
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
          description: 'Welcome :)',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col items-center bg-[#ebc6a2]  w-[80%] px-5 py-2 h-2/3 border-[3px] border-gray-300 rounded-xl shadow-2xl'>
        <img
          src={Logo}
          title='physio logo'
          className='rounded-full h-[120px] w-[120px] shadow-xl '
        />
        <h1 className='flex justify-center items-center w-full h-[30px] gap-2 font-semibold text-[1.8rem] mt-4'>
          Welcome Back
        </h1>
        <h1 className='flex justify-center items-center w-full h-[30px] gap-2 font-semibold text-[1.2rem] text-gray-900 mt-2'>
          Please Login
        </h1>
        <form className='flex flex-col w-full mt-3'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={username}
            className='mt-1 rounded-md pl-2 h-[30px] text-[18px] focus:outline-none focus:border-[1px] focus:border-gray-600'
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor='password' className='mt-2'>
            Password
          </label>
          <input
            id='password'
            type='text'
            value={password}
            className='mt-1 rounded-md pl-2 h-[30px] text-[18px] focus:outline-none focus:border-[1px] focus:border-gray-600'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </form>
        <div className='w-full flex justify-end mt-8'>
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

export default LoginPage;
