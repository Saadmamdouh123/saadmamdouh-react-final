import { MdAccountCircle } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import React from "react";
import { Imagess } from "../constant";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()
  return (
    <>
      <nav className="flex justify-around items-center p-5 shadow-lg fixed w-[100%] z-50 h-[100px] bg-white">
        <div>
          <img className="w-28 cursor-pointer" onClick={()=>{navigate("/")}} src={Imagess.banner27} alt="" />
        </div>
        <ul className="flex gap-10 font-normal">
          <li className="text-red-800 hover:border-b-2 border-red-700" onClick={()=>{navigate("/")}}>Home</li>
          <li className=" hover:border-b-2 border-red-700" onClick={()=>{navigate("/shop")}}>Shop</li>
          <li className="hover:border-b-2 border-red-700" onClick={()=>{navigate("/blog")}}>Blog</li>
          <li className="hover:border-b-2 border-red-700">Sales</li>
          <li className="hover:border-b-2 border-red-700">Feature</li>
          <li className=" hover:border-b-2 border-red-700" onClick={()=>{navigate("/about")}}>About</li>
          <li className="hover:border-b-2 border-red-700" onClick={()=>{navigate("/contact")}}>Contact</li>
        </ul>

        <div className="flex gap-6 relative">
          <button><MdAccountCircle className="text-2xl" onClick={()=>{navigate("/login")}} /></button>
          <div className="bg-red-700 w-4 h-4 text-white text-[8px] flex justify-center items-center rounded-full absolute bottom-[10px] left-[65px]">0</div>
          <button><IoWalletOutline className="text-2xl" /></button>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
