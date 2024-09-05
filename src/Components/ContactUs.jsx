import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  // Define the validation schema using Yup
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    message: yup.string().required('Message is required'),
  });

  // Use useForm hook with Yup validation resolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    emailjs
      .sendForm('service_ft05br7', 'template_u5vqsk9', form.current, {
        publicKey: "ss8xVVRc4kSDvJi-R", // Use environment variable
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-8 justify-center items-center p-4 bg-gray-50">
      <div className="logo w-32 md:w-48 lg:w-64">
        <img src="src/assets/Pic2.jpg" alt="Logo" className="w-full object-contain mix-blend-darken" />
      </div>

      <div className="description text-center max-w-lg">
        <p className="text-lg md:text-xl text-gray-700">
          We'd love to hear from you! Reach out to us with any questions or concerns.
        </p>
      </div>

      <form
        className="flex flex-col gap-4 p-6 w-full max-w-md bg-white rounded-lg shadow-lg"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-3xl md:text-4xl text-center text-gray-800">Contact Us</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          {...register("name")}
          className="w-full border-2 p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border-2 p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <textarea
          placeholder="Message"
          {...register("message")}
          className="w-full border-2 p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
}
