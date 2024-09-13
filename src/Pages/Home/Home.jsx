import Carousel from "./Carousel";
import { Imagess } from "../../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const banners = [Imagess.banner26, Imagess.banner22, Imagess.banner24];

  const getRandomBanners = () => {
    const randomBanner = Math.floor(Math.random() * banners.length);
    return banners[randomBanner];
  };

  const [Banner, setBunner] = useState("");

  useEffect(() => {
    setBunner(getRandomBanners());
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="pt-[100px]">
        <Carousel />
      </div>

      <div className="flex p-8 justify-center">
        <div className="w-[50vw] flex flex-col gap-6 justify-center items-center">
          <div className="relative">
            <img src={Imagess.banner1} className="w-[20vw] h-[60vh]" alt="" />
            <button className="absolute right-12 left-24 bottom-6 bg-white text-black w-28 h-10 shadow-md rounded-lg hover:bg-red-400 hover:text-white">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <img src={Imagess.ndarder} className="w-[20vw] h-[40vh]" alt="" />
            <button className="absolute right-12 left-24 bottom-6 bg-white text-black w-28 h-10 shadow-md rounded-lg hover:bg-red-400 hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-[50vw] flex flex-col gap-6 justify-center items-center">
          <div className="relative overflow-hidden">
            <img
              src={Imagess.Magana}
              className="w-[20vw] h-[40vh] hover:scale-110 transition-transform duration-500 ease-in-out"
              alt=""
            />
            <button className="absolute right-12 left-24 bottom-6 bg-white text-black w-28 h-10 shadow-md rounded-lg hover:bg-red-400 hover:text-white">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <img src={Imagess.Djin} className="w-[20vw] h-[60vh]" alt="" />
            <button className="absolute right-12 left-24 bottom-6 bg-white text-black w-28 h-10 shadow-md rounded-lg hover:bg-red-400 hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-[50vw] flex flex-col gap-6 justify-center items-center">
          <div className="relative">
            <img src={Imagess.banner1} className="w-[20vw] h-[60vh]" alt="" />
            <button className="absolute right-12 left-24 bottom-6 bg-white text-black w-28 h-10 shadow-md rounded-lg hover:bg-red-400 hover:text-white">
              Shop Now
            </button>
          </div>
          <div className="relative shadow-xl rounded-lg">
            <img src={Imagess.ndarder} className="w-[20vw] h-[40vh]" alt="" />
            <button className="absolute right-12 left-24 bottom-6 bg-white text-black w-28 h-10 shadow-md rounded-lg hover:bg-red-400 hover:text-white">
              Shop Now
            </button>
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

      <div className="flex justify-center items-center p-6">
        <div className="p-9 relative">
          <img src={Imagess.banner3} alt="" />
          <div className="absolute top-[200px] left-[250px] text-center">
            <h1 className="text-4xl font-medium text-white shadow-sm">
              The Beauty
            </h1>
            <h1 className="text-6xl font-medium text-white shadow-sm">
              LOOK BOOK
            </h1>
            <Link className="text-lg">View Collection</Link>
          </div>
        </div>
        <div className="relative">
          <img src={Banner} className="w-[600px] h-[530px] shadow-md" alt="" />
          <div className="absolute top-[300px] left-[170px]">
            <h1 className="text-center text-black text-xl">
              Boxy2 T-Shirt with Roll Sleeve
            </h1>
            <p className="text-center text-black font-medium text-xl py-2">
              20.00$
            </p>
            <div className="flex gap-6 justify-center items-center absolute left-[0px] w-[100%]">
              <div className=" border-2 border-gray-400 rounded-lg text-center p-2">
                <h1>-2800</h1>
                <h1 className="text-lg font-medium">Days</h1>
              </div>
              <div className="border-2 border-gray-400 rounded-lg w-16 text-center p-2">
                <h1>-2800</h1>
                <h1 className="text-lg font-medium">Days</h1>
              </div>
              <div className="border-2 border-gray-400 rounded-lg w-16 text-center p-2">
                <h1>-2800</h1>
                <h1 className="text-lg font-medium">Days</h1>
              </div>
              <div className="border-2 border-gray-400 rounded-lg w-16 text-center p-2">
                <h1>-2800</h1>
                <h1 className="text-lg font-medium">Days</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h1 className="text-center text-2xl font-semibold">Our Blog</h1>
        <div className="flex gap-7 p-6 justify-around">
          <div>
            <img src={Imagess.banner6} className="w-[400px]" alt="" />
            <h1 className="py-2 font-medium">
              Black Friday Guide: Best Sales & Discount Codes
            </h1>
            <p className="py-2">by fashe-theme Admin on Dec 28,2017</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Etiam sed turpis sed lorem dignissim.
            </p>
          </div>
          <div>
            <img src={Imagess.banner7} className="w-[400px]" alt="" />
            <h1 className="py-2 font-medium">
              Black Friday Guide: Best Sales & Discount Codes
            </h1>
            <p className="py-2">by fashe-theme Admin on Dec 28,2017</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Etiam sed turpis sed lorem dignissim.
            </p>
          </div>
          <div>
            <img src={Imagess.banner8} className="w-[400px]" alt="" />
            <h1 className="py-2 font-medium">
              Black Friday Guide: Best Sales & Discount Codes
            </h1>
            <p className="py-2">by fashe-theme Admin on Dec 28,2017</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Etiam sed turpis sed lorem dignissim.
            </p>
          </div>
        </div>
      </section>

      <section className="p-9">
        <h1 className="text-center py-4 text-2xl font-semibold">
          @ FOLLOW US ON INSTAGRAM
        </h1>
        <div className="flex justify-around items-center p-8">
          <div className="text-center">
            <h1 className="text-xl font-semibold py-1">
              Free Delivery Worldwide
            </h1>
            <p className="text-gray-500">
              Mirum est notare quam littera gothica
            </p>
          </div>
          <div className="text-center border-r-2 border-gray-300 border-l-2 border-gray-300 p-6 py-6">
            <h1 className="text-xl font-semibold py-1">30 Days Return</h1>
            <p className="text-gray-500">
              Simply return it within 30 days for an exchange.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold py-1">Store Opening</h1>
            <p className="text-gray-500">Shop open from Monday to Sunday</p>
          </div>
        </div>
      </section>

    </>
  );
}
export default Home;
