import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="pt-[100px] flex gap-5 px-11">
        <h1>Home</h1>
        <h1>Account</h1>
      </div>

      <div className="flex gap-4 justify-center p-10">

        <div className="border border-gray-300 w-[30vw] h-64 p-6">
          <h1 className="text-2xl font-semibold">New Customer</h1>
          <h1 className="pb-2 text-gray-500 font-semibold">Register Account</h1>
          <p className="pb-3 text-gray-500">
            By creating an account you will be able to shop faster, <br /> be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>
          <button className="bg-black text-white p-3" onClick={()=>{navigate("/loginn")}}>Continue</button>
        </div>

        <div className="border border-gray-300 w-[30vw] p-6">
          <h1 className="text-2xl font-semibold">New Customer</h1>
          <h1 className="font-semibold text-gray-500">I am a returning customer</h1>
          <p className="pb-2">Email:</p>
          <input type="text" placeholder="Email"  className="border border-gray-300 p-1 w-[400px] h-12"/> <br />
          <p className="pb-2">Password:</p>
          <input type="text" placeholder="Password"  className="border border-gray-300 p-1 w-[400px] h-12 pb-2"/> <br />
          <p className="pb-4">Forgot your password?</p>
          <div className="flex gap-4">
                <button className="bg-black text-white p-3">Continue</button>
               <button className="border border-gray-400 text-black p-3" onClick={()=>{navigate("/")}}>Return to Store</button>
          </div>
        </div>
       
      </div>
    </>
  );
};
