import React from "react";
import { useNavigate } from "react-router-dom";


export const Loginn = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="pt-[100px] flex gap-5 px-11">
        <h1>Home</h1>
        <h1>Account</h1>
      </div>

        <div className="text-center">
            <h1 className="text-2xl font-semibold">Create Account</h1>
            <p>Your Personal Details</p>
        </div>
      <div className="flex justify-center items-center p-7">
        
        <div>
            <p className="pb-2">First Name:</p>
            <input type="text" placeholder="Email"  className="border border-gray-300 p-1 w-[1000px] h-12"/> <br />
            <p className="pb-2">Last Name:</p>
            <input type="text" placeholder="Password"  className="border border-gray-300 p-1 w-[1000px] h-12 pb-2"/> <br />
            <p className="pb-2">Email:</p>
            <input type="text" placeholder="Password"  className="border border-gray-300 p-1 w-[1000px] h-12 pb-2"/> <br />
            <p className="pb-2">Password:</p>
            <input type="text" placeholder="Password"  className="border border-gray-300 p-1 w-[1000px] h-12 pb-2"/> <br />
            <p className="pb-4">Forgot your password?</p>
            <div className="flex gap-4">
                <button className="bg-black text-white p-3">👤 Create</button>
               <button className="border border-gray-400 text-black p-3" onClick={()=>{navigate("/")}}>Return to Store</button>
          </div>
        </div>

      </div>
    </>
  );
};
