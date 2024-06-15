import React from "react";
import { Link } from "react-router-dom";
import { Formik,Form,ErrorMessage,Field } from "formik";
import ValidationSchema from "./Validation/Validation";
import { useDispatch } from "react-redux";
import { UserLoginAction } from "./features/Authslice";


export default function Login() {
  const dispatch=useDispatch()

  const initialvalues = {
   username:"",
    password:""
  }
  const validationSchema=ValidationSchema

  return (
    <div className=" flex">
      
      <div className="flex justify-center flex-col sm:border-2 sm:border-slate-200 sm:w-1/2  ">
        <div className=" mt-24" >
          <img className="w-2/3 m-auto" alt="chitra" src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" ></img>
        </div>
        <Formik
          initialValues={initialvalues} 
          validationSchema={validationSchema}
          onSubmit={(data) =>dispatch(UserLoginAction(data))}
                >
        <Form className="flex justify-center flex-col mt-10 space-y-2" >
          <Field name="username" type="text" className="w-2/3 h-12 m-auto outline-gray-300 bg-gray-100 text-gray-800 p-3" placeholder="Username"></Field>
        <div className="text-red-500 text-left w-2/3 m-auto " >  <ErrorMessage  name="email" /></div>
          <Field name="password" type="text" className="w-2/3 h-12 m-auto outline-gray-300 bg-gray-100 text-gray-800 p-3" placeholder="Password"></Field>
          <div className="text-red-500 text-left w-2/3 m-auto " >  <ErrorMessage  name="password" /></div>
          <button type="submit" className="w-2/3 m-auto h-10 rounded-md text-white text-center bg-blue-400">Log in</button>
        </Form>
        </Formik>
       <div className="flex ">
        <hr className="h-0.5 mt-10 w-1/3 ml-auto bg-gray-200"></hr>
        <p className="mt-[28px]">OR</p>
        <hr className="h-0.5 mt-10 w-1/3 mr-auto bg-gray-200"></hr>
        </div>
        <div className="flex items-center m-auto my-10  justify-center space-x-1  ">
          <img className="w-8 p-1 aspect-square bg-none " alt="chitra" src="https://advantec.co.uk/app/uploads/2017/08/Facebook-logo-2.png"></img>
          <p>Log in with facebook</p>
        </div>
        <div className="flex flex-col text-center space-y-3 ">
          <p>forgot password?</p>
          <p>Don't have account ?<Link to="/register" className="text-blue-500">Sign up</Link></p>
          <p >Get the app</p>
        </div>
      </div>
    </div>
  );
}
