import React, { useState } from "react";
import { Imagess } from "../../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";


export const ProductDetail = () => {
    const navigate = useNavigate()
    const [Value,setValue] = useState(Number)

    function Add() {
        setValue( prev => prev + 1 )
    }

    function Decrement() {
        setValue( prev => prev - 1 )
    }

  return (
    <>
      <div className="pt-[100px] flex gap-5 px-11">
        <h1 onClick={()=>{navigate("/")}} className="hover:text-red-700">Home</h1>
        <h1>Account</h1>
      </div>
      <div className="pt-[100px] flex justify-center gap-4 px-40 p-8">
        <div className="p-4">
          <img src={Imagess.Thirdgirl} className="h-[80vh]" alt="" />
        </div>
        <div>
          <div className="p-4">
            <h1 className="text-2xl pb-2">
              Boxy T-Shirt with Roll Sleeve Detail
            </h1>
            <h1 className="text-2xl pb-2">$20.00</h1>
            <p className="text-sm text-gray-500 font-light">
              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at
              ipsum blandit <br /> ornare vel sed velit. Proin gravida arcu...
            </p>
          </div>
          <div className="flex gap-3 p-4">
            <button className="bg-red-500 text-white rounded-lg p-3">S</button>
            <button className="border border-red-400 rounded-lg p-3">M</button>
            <button className="border border-red-400 rounded-lg p-3">L</button>
            <button className="border border-red-400 rounded-lg p-3">XL</button>
          </div>
          <div className="flex gap-6 p-4 items-center">
            <div className="flex gap-2">
              <button className="bg-gray-200 text-black rounded-lg p-3" onClick={Add}>
                +
              </button>
              <button className="border border-gray-300 rounded-lg p-3">
                {Value}
              </button>
              <button className="bg-gray-200 text-black rounded-lg p-3" onClick={Decrement}>
                -
              </button>
            </div>
            <div>
              <button className="bg-black text-white p-4 rounded-lg">
                ADD TO CART
              </button>
            </div>
          </div>
          <hr />
          <div className="p-4">
            <h1 className="text-lg font-semibold">Description</h1>
            <p className="text-sm font-light text-gray-500">
              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at
              ipsum <br /> blandit ornare vel sed velit. Proin gravida arcu
              nisl, a dignissim mauris <br /> placerat Fusce ornare mi vel risus
              porttitor dignissim.
            </p>
          </div>
          <hr />
          <div className="flex justify-between p-4">
            <h1 className="text-lg font-semibold">Additional Information</h1>
            <h1>+</h1>
          </div>
          <hr />
          <div className="flex justify-between p-4">
            <h1 className="text-lg font-semibold">Reviews</h1>
            <h1>+</h1>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-6"
      >
        <SwiperSlide className="relative">
          <div className="p-6">
            <h1 className="text-center text-2xl font-medium py-4">
              Featured Product
            </h1>
            <div className="flex gap-12 justify-center">
              <div className="flex flex-col">
                <img src={Imagess.banner20} className="w-56 h-72" alt="" />
                <p>Boxy7 T-Shirt with Roll Sleeve.</p>
                <p className="text-lg font-medium">20.00$</p>
              </div>
              <div className="flex flex-col">
                <img src={Imagess.banner17} className="w-56 h-72" alt="" />
                <p>Boxy7 T-Shirt with Roll Sleeve.</p>
                <p className="text-lg font-medium">20.00$</p>
              </div>
              <div className="flex flex-col">
                <img src={Imagess.firstgirl} className="w-56 h-72" alt="" />
                <p>Boxy7 T-Shirt with Roll Sleeve.</p>
                <p className="text-lg font-medium">20.00$</p>
              </div>
              <div className="flex flex-col">
                <img src={Imagess.secondgirl} className="w-56 h-72" alt="" />
                <p>Boxy7 T-Shirt with Roll Sleeve.</p>
                <p className="text-lg font-medium">20.00$</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="p-6">
            <h1 className="text-center text-2xl font-medium py-4">
              Featured Product
            </h1>
            <div className="flex gap-12 justify-center">
              <div className="flex flex-col">
                <img src={Imagess.banner20} className="w-56 h-72" alt="" />
                <p>Boxy7 T-Shirt with Roll Sleeve.</p>
                <p className="text-lg font-medium">20.00$</p>
              </div>
              <div className="flex flex-col">
                <img src={Imagess.banner17} className="w-56 h-72" alt="" />
                <p>Boxy7 T-Shirt with Roll Sleeve.</p>
                <p className="text-lg font-medium">20.00$</p>
              </div>
              <div className="flex flex-col">
                <img src={Imagess.firstgirl} className="w-56 h-72" alt="" />
                <p>Boxy7 T-Shirt with Roll Sleeve.</p>
                <p className="text-lg font-medium">20.00$</p>
              </div>
              <div className="flex flex-col">
                <img src={Imagess.secondgirl} className="w-56 h-72" alt="" />
                <p>Boxy7 T-Shirt with Roll Sleeve.</p>
                <p className="text-lg font-medium">20.00$</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
