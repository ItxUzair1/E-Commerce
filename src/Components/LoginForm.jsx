import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from './Context/LoginContext'; // Adjust the path to your LoginContext file

// Define the validation schema using yup
const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const { isLogged,setLogin } = useLogin(); // Use the context hook here

  const onSubmit = (data) => {
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user with matching email and password
    const user = users.find(user => user.email === data.email && user.password === data.password);

    if (user) {
      alert('Login Successful');
      setLogin(!isLogged); // Update the login status
      navigate('/'); // Redirect to home or another page
      console.log(isLogged);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-8 border-2 border-gray-300 rounded-xl shadow-lg bg-white w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign In</h2>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register('email')}
            className={`w-full h-12 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'} transition duration-300`}
            aria-describedby="email-error"
          />
          {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register('password')}
            className={`w-full h-12 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'} transition duration-300`}
            aria-describedby="password-error"
          />
          {errors.password && <p id="password-error" className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Sign In
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Don't have an account? <Link to="/register" className="text-blue-500">Sign Up</Link></p>
        </div>
      </form>
    </div>
  );
}
