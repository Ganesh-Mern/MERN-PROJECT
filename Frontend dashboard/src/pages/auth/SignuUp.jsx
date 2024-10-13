// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const SignUp = () => {
    const countryOptions = [
        { name: 'United States', code: '+1' },
        { name: 'United Kingdom', code: '+44' },
        { name: 'India', code: '+91' },
        { name: 'Canada', code: '+11' },
        { name: 'Australia', code: '+61' },
        // Add more countries here
      ];
  const [formData, setFormData] = useState({
    fullName: '',
    countryName: '',
    countryCode: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleCountryChange = (e) => {
    const selectedCountry = countryOptions.find(
      (country) => country.name === e.target.value
    );
    setFormData({
      ...formData,
      countryName: selectedCountry.name,
      countryCode: selectedCountry.code,
    });
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("formdata ",formData);
    
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Country Name</label>
            <select
              name="countryName"
              value={formData.countryName}
              onChange={handleCountryChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Country</option>
              {countryOptions.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Country Code</label>
            <input
              type="text"
              name="countryCode"
              value={formData.countryCode}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
