import React from "react";
import { Imagess } from "../../constant";
import { useNavigate } from "react-router-dom";

export const Blog = () => {
    const navigate = useNavigate()

  return (
    <>
      <div className="pt-[100px] relative flex justify-center items-center">
        <img className="h-[30vh]" src={Imagess.banner4} alt="" />
        <div>
          <h1 className="text-5xl absolute right-[700px] z-30 text-white font-semibold">
            NEWS
          </h1>
        </div>
      </div>

      <div className="flex justify-center gap-11 p-8">
        <div className="flex flex-col gap-5">
          <div>
            <img src={Imagess.banner6} alt="" />
            <h1 className="pt-3 pb-3 text-lg font-semibold">Black Friday Guide: Best Sales & Discount Codes</h1>
            <p className="pb-4">by fashe-theme Admin | crafts, street style | 1 Comments</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate <br /> nec cursus ante. Nunc sit...</p>
          </div>
          <div>
            <img src={Imagess.banner7} alt="" />
            <h1 className="pt-3 pb-3 text-lg font-semibold">Black Friday Guide: Best Sales & Discount Codes</h1>
            <p className="pb-4">by fashe-theme Admin | crafts, street style | 1 Comments</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate <br /> nec cursus ante. Nunc sit...</p>
          </div>
          <div>
            <img src={Imagess.banner8} alt="" />
            <h1 className="pt-3 pb-3 text-lg font-semibold">Black Friday Guide: Best Sales & Discount Codes</h1>
            <p className="pb-4">by fashe-theme Admin | crafts, street style | 1 Comments</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate <br /> nec cursus ante. Nunc sit...</p>
          </div>
        </div>

        <div>
            <div>
                <input type="text" placeholder="Show all articles..."  className="border border-gray-500 rounded-lg p-1"/>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="pb-8 pt-4 text-2xl">Featured Products</h1>
                <div className="flex gap-5 justify-center items-center">
                    <div>
                        <img src={Imagess.secondgirl} className="w-28" alt="" />
                    </div>
                    <div>
                        <h1>Boxy7 T-Shirt with</h1>
                        <h1>Roll Sleeve</h1>
                        <p>$20.00</p>
                    </div>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    <div>
                        <img src={Imagess.firstgirl} className="w-28" alt="" />
                    </div>
                    <div>
                        <h1>Boxy7 T-Shirt with</h1>
                        <h1>Roll Sleeve</h1>
                        <p>$20.00</p>
                    </div>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    <div>
                        <img src={Imagess.banner16} className="w-28" alt="" />
                    </div>
                    <div>
                        <h1>Boxy7 T-Shirt with</h1>
                        <h1>Roll Sleeve</h1>
                        <p>$20.00</p>
                    </div>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    <div>
                        <img src={Imagess.banner17} className="w-28" alt="" />
                    </div>
                    <div>
                        <h1>Boxy7 T-Shirt with</h1>
                        <h1>Roll Sleeve</h1>
                        <p>$20.00</p>
                    </div>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    <div>
                        <img src={Imagess.secondgirl} className="w-28" alt="" />
                    </div>
                    <div>
                        <h1>Boxy7 T-Shirt with</h1>
                        <h1>Roll Sleeve</h1>
                        <p>$20.00</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
