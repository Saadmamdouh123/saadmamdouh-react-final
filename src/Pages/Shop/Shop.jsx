import { Imagess } from "../../constant";

function Shop() {
  return (
    <>
      <div className="pt-[100px] relative flex justify-center items-center">
        <img className="h-[30vh]" src={Imagess.banner4} alt="" />
        <div>
          <h1 className="text-5xl absolute right-[700px] z-30 text-white font-semibold">
            Featured
          </h1>
        </div>
      </div>

      <div className="flex justify-around p-10">
        <div className="flex flex-col gap-7">
          <div>
            <h1 className="text-2xl font-medium pb-3">Categories</h1>
            <p className="pb-1">Best Seller (8 items)</p>
            <p className="pb-1">Featured (8 items)</p>
            <p className="pb-1">Men (8 items)</p>
            <p className="pb-1">Women (8 items)</p>
          </div>
          <div>
            <h1 className="text-2xl font-medium pb-3">Color</h1>
            <div className="flex gap-1">
              <input type="checkbox" />
              <p>Black</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" />
              <p className="pb-1">Gray</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" />
              <p className="pb-1">Red</p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-medium pb-3">Price</h1>
            <div className="flex gap-1">
              <input type="checkbox" />
              <p className="pb-1">0-30</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" />
              <p className="pb-1">30-40</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-3">
            <select name="cars" id="cars" className="border border-gray-950 p-1 rounded-lg">
              <option value="volvo">Featured</option>
              <option value="saab">Best Selling</option>
              <option value="opel">Alphabitically A-Z</option>
              <option value="audi">Alphabitically Z-A</option>
              <option value="audi">Price low to high</option>
            </select>
            <select name="cars" id="cars" className="border border-gray-950 p-1 rounded-lg">
              <option value="volvo">10</option>
              <option value="saab">20</option>
              <option value="opel">30</option>
              <option value="opel">ALL</option>
            </select>
          </div>

          <div className="flex gap-4 pt-8">
            <div className="flex flex-col">
              <img src={Imagess.banner20} className="w-56 h-72" alt="" />
              <p>Boxy7 T-Shirt with Roll Sleeve.</p>
              <p className="text-lg font-medium">20.00$</p>
            </div>
            <div className="flex flex-col">
              <img src={Imagess.banner23} className="w-56 h-72" alt="" />
              <p>Boxy7 T-Shirt with Roll Sleeve.</p>
              <p className="text-lg font-medium">20.00$</p>
            </div>
          </div>
        </div>
        <div>
            <h1>Showing 1 to 2 of 2 items</h1>
        </div>
      </div>
    </>
  );
}
export default Shop;
