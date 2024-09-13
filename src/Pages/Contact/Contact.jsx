import { Imagess } from "../../constant";

function Contact() {
  return (
    <>
      <div className="pt-[100px] relative flex justify-center items-center">
        <img className="h-[30vh]" src={Imagess.banner4} alt="" />
        <div>
          <h1 className="text-5xl absolute right-[700px] z-30 text-white font-semibold">
            CONTACT
          </h1>
        </div>
      </div>

      <div className="p-10 flex gap-12 justify-center items-center">
        <div>
            <img src={Imagess.map} className="w-[600px] h-[500px]" alt="" />
        </div>
        <div>
            <h1 className="pb-8 text-2xl font-semibold">Send us your message</h1>
            <div className="flex flex-col gap-6 mt-7">
                <input type="text" className="border border-gray-200 w-[50vw] h-14 p-4" placeholder="Name" />
                <input type="Email" className="border border-gray-200 w-[50vw] h-14 p-4" placeholder="Email" />
                <input type="Phone" className="border border-gray-200 w-[50vw] h-14 p-4" placeholder="Phone" />
                <textarea id="w3review" name="w3review" rows="4" cols="50" className="border border-gray-200 p-4" placeholder="message">

                </textarea>
            </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
