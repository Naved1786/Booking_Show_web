import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toast';
import { signup } from '../services/user-service';
const SignUpPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "about",
  });
console.log(data)
const [error, setError] = useState({
  errors: {},
  isError: false,
});

const submitForm = (event) => {
  event.preventDefault();
  if (error.isError) {
    toast.error("form Data is invalid !!");
    setError({...error,isError:false})
    return;
  }
  
  signup(data)
    .then((resp) => {
      console.log(data);
      toast.success("User register Successfully");
      setData({
        name: "",
        email: "",
        password: "",
        about: "about",
      });
    })
    .catch((error) => {
      console.log(error)
      console.log("Error log");
     
      setError({
        errors:error,
        isError:true
      })
      
      
    });
};
//   useEffect(()=>{
//     console.log(data)
//   },[data])
const handleChange = (event, field) => {
  setData({ ...data, [field]: event.target.value });
}
  return (
    <div className="flex h-screen pt-20">
      <div className="w-1/2 bg-gradient-to-br from-red-500 to-orange-500 flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-center mb-6">To keep connected with us please login with your personal info</p>
        <Link to="/LoginPage">
        <button className="px-8 py-2 border-2 border-white rounded-full text-lg hover:bg-white hover:text-red-500 transition duration-300">
          SIGN IN
        </button>
        </Link>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-4xl font-bold mb-4">Create Account</h1>
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">
            <i className="fab fa-google"></i>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
        <p className="text-gray-500 mb-4">or use your email for registration</p>
        <form className="flex flex-col space-y-4 w-3/4" onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e)=> handleChange(e,"name")}
            value={data.name}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e)=> handleChange(e,"email")}
            value={data.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e)=> handleChange(e,"password")}
            value={data.password}
          />
          <button className="px-8 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition duration-300">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
