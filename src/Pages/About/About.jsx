import { Imagess } from "../../constant";

function About() {
  return (
    <>
      <div className="pt-[100px] relative flex justify-center items-center">
        <img className="h-[30vh]" src={Imagess.banner4} alt="" />
        <div>
          <h1 className="text-5xl absolute right-[700px] z-30 text-white font-semibold">
            ABOUT
          </h1>
        </div>
      </div>

      <div className="flex gap-9 justify-center items-center p-12">
        <div>
          <img src={Imagess.banner23} className="h-[50vh]" alt="" />
        </div>
        <div className="w-[50vw]">
          <h1 className="text-2xl py-5">Our Story</h1>
          <p className="text-gray-400 pb-2">
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
            orci.
          </p>
          <div className="border-l-2 border-gray-500 p-4 py-3">
            <p className="text-gray-400">
              Creativity is just connecting things. When you ask creative people
              how they did something, they feel a little guilty because they
              didn't really do it, they just saw something. It seemed obvious to
              them after a while.
            </p>
            <p>- Steve Job's</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
