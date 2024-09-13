import { Imagess } from "../../constant";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

function Carousel() {
    return(
        <>
          
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='relative'>
                <img src={Imagess.Carousel1} alt="ccc"/>
                <div className='absolute top-[8rem] flex flex-col gap-5 left-[600px] text-center text-3xl text-white'>
                <h5 className='text-xl'>women collection 2018</h5>
                <h1  className='text-6xl font-bold'>New Arrivals</h1>
                <div className="flex justify-center items-center">
                    <button className='text-black text-xl bg-white w-32 h-12 rounded-full'>shop now</button>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img src={Imagess.Carousel2} alt="ccc"/> 
                <div className='absolute top-[8rem] flex flex-col gap-5 left-[600px] text-center text-3xl text-white'>
                <h5 className='text-xl'>women collection 2018</h5>
                <h1  className='text-6xl font-bold'>New Arrivals</h1>
                <div className="flex justify-center items-center">
                    <button className='text-black text-xl bg-white w-32 h-12 rounded-full'>shop now</button>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img src={Imagess.Carousel3} alt="ccc"/>
                <div className='absolute top-[8rem] flex flex-col gap-5 left-[600px] text-center text-3xl text-white'>
                <h5 className='text-xl'>women collection 2018</h5>
                <h1  className='text-6xl font-bold'>New Arrivals</h1>
                <div className="flex justify-center items-center">
                    <button className='text-black text-xl bg-white w-32 h-12 rounded-full'>shop now</button>
                </div>
            </div>
            </SwiperSlide>

      </Swiper>
        </>
    )
}
export default Carousel;