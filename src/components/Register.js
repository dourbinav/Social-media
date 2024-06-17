import React, { useEffect } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { Formik,Form,ErrorMessage,Field } from "formik";
import { validationRegisterSchema } from "./Validation/Validation";
import { useDispatch, useSelector } from "react-redux";
import { UserRegisterAction } from "./features/Authslice";

export default function Register() {
  const navigate=useNavigate()
  const {user}=useSelector((state)=>state.auth)

  const dispatch=useDispatch()

  const initialvalues={
    email:"",
    password:"",
    username:"",
    Fullname:""
  }

  useEffect(() => {
    if(user){
      navigate("/Userdetail")
    }
      }, [user,navigate]);

  return (
    <div>
      <div className="flex justify-center flex-col ">
        <div className=" mt-12">
          <img
            className="w-2/3 m-auto"
            alt="chitra"
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
          ></img>
        </div>
        <div className="w-2/3 m-auto font-bold text-gray-500 mt-1  ">
          <h2 className="p-2 text-center">
            Sign up to see photos and videos from your friends.
          </h2>
        </div>
        <div className="flex w-2/3 bg-blue-400 items-center m-auto px-2 mt-3 rounded-md justify-center  ">
          <img
            className="w-6 h-6 bg-white p-1  "
            alt="chitra"
            src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202107facebookfblogosocialsocialmedia-115710_115591.png"
          ></img>
          <button
            type="submit"
            className="  h-10 py-2 px-1  text-white text-center  font-semibold "
          >
            Log in with facebook
          </button>
        </div>
        <div className="flex my-4 items-center  ">
          <hr className="h-0.5   w-1/3 ml-auto bg-gray-200"></hr>
          <p className=" ">OR</p>
          <hr className="h-0.5  w-1/3 mr-auto bg-gray-200"></hr>
        </div>
        <Formik  initialValues={initialvalues}
        validationSchema={validationRegisterSchema}
        onSubmit={(data)=>dispatch(UserRegisterAction(data))}>
        <Form 
       
        className="flex justify-center flex-col space-y-2">
          <Field
            type="text"
            className="w-2/3 h-8 m-auto outline-gray-300 bg-gray-100 text-gray-800 p-5"
            placeholder="Mobile number or Email"
            name="email"
          ></Field>
         <div className="text-red-500 text-left w-2/3 m-auto text-xs " >  <ErrorMessage  name="email" /></div>
          <Field
            type="text"
            className="w-2/3 h-8 m-auto outline-gray-300 bg-gray-100 text-gray-800 p-5"
            placeholder="Fullname"
            name="Fullname"
          ></Field>
          <span className="text-red-500 text-left w-2/3 m-auto text-xs  " >  <ErrorMessage  name="Fullname" /></span>
          <Field
            type="text"
            className="w-2/3 h-8 m-auto outline-gray-300 bg-gray-100 text-gray-800 p-5"
            placeholder="Username"
            name="username"
          ></Field>
          <div className="text-red-500 text-left w-2/3 m-auto text-xs" >  <ErrorMessage  name="username" /></div>
          <Field
            type="text"
            className="w-2/3 h-8 m-auto outline-gray-300 bg-gray-100 text-gray-800 p-5"
            name="password"
            placeholder="Password"
          ></Field>
           <div className="text-red-500 text-left w-2/3 m-auto text-xs " >  <ErrorMessage  name="password" /></div>
        
        <div className=" text-center w-2/3 mx-auto text-[11px] flex text-gray-500 flex-col space-y-2 mt-4">
          <span>
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
          </span>
          <span>
            By signing up, you agree to our Terms , Privacy Policy and Cookies
            Policy .
          </span>
        </div>
        <div className="flex justify-center p-2" >
        <button type="submit" className="w-2/3 m-auto h-8 py-1 rounded-md text-white text-center bg-blue-400">Sign up</button>
        </div>
        </Form>
        </Formik>
        <h3 className="m-auto text-center">Have a account? <Link to="/" className="text-blue-500">Log in</Link></h3>
      </div>
    </div>
  );
}
