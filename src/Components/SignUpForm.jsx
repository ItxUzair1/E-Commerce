import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Retrieve existing users from localStorage or initialize an empty array if none exist
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists
    const emailExists = existingUsers.some(user => user.email === data.email);

    if (emailExists) {
      alert('An account with this email already exists');
    } else {
      // Create a new user object
      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      // Add the new user to the array of existing users
      existingUsers.push(newUser);

      // Save the updated user array back to localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert('Signup successful');

      // Optionally reset the form
      // reset();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4 sm:p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input 
            type="text" 
            placeholder="Enter your Name" 
            id="name" 
            {...register('name')} 
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : ''}`} 
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email" 
            placeholder="Enter your Email" 
            id="email" 
            {...register('email')} 
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-500' : ''}`} 
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input 
            type="password" 
            placeholder="Enter your Password" 
            id="password" 
            {...register('password')} 
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? 'border-red-500' : ''}`} 
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
          <input 
            type="password" 
            placeholder="Enter Password Again" 
            id="confirmPassword" 
            {...register('confirmPassword')} 
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.confirmPassword ? 'border-red-500' : ''}`} 
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Submit
        </button>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Already have an account? <Link to="/signin" className='text-blue-500'>Sign In</Link></p>
        </div>
      </form>
    </div>
  );
}
