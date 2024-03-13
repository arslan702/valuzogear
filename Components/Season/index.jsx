import React from "react";
import Image from "next/image";
import img1 from "../../Images/tops.png";
import img2 from "../../Images/skirts.jpg";
import img3 from "../../Images/tshirt.jpg";
import img4 from "../../Images/bottom.jpg";
import img5 from "../../Images/jeans.jpg";
import img6 from "../../Images/Acces.jpeg";
import img7 from "../../Images/tops2.jpeg";
import img8 from "../../Images/skirt2.jpeg";



export default function Sale() {
  return (
    <div className="md:px-12 my-2 ">
      <div
        className="md:p-5 p-5 "
        style={{ background: "linear-gradient(#FA7E9E, white)" }}
      >
       <div className="md:flex justify-center text-center space-x-10 " >
       <p className="text-[16px] text-white ">
         <b><u>Seasonal Sale Markdowns</u></b> 
        </p>
        <p>Buy 6 Get 60% Off</p>
       </div>
       

        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 py-3 gap-x-2 cursor-pointer ">
          <div>
            <div className="md:w-[100%] sm:w-[100%] w-[100%]  mx-auto h-[270px] mb-3 bg-white border-[5px] border-white mt-1 relative shadow-md ">
              <Image src={img1} className="h-[85%] w-[100%] " />
              <Image src={img7} className="h-[85%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 " />

             
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0  ">$4.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">-5%</p>
            </div>
            </div>
          </div>

          <div>
            <div className="md:w-[100%] sm:w-[100%] w-[100%] mx-auto h-[270px] mb-3 bg-white border-[5px] border-white mt-1 relative shadow-md ">
              <Image src={img2} className="h-[85%] w-[100%] " />
              <Image src={img8} className="h-[85%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 " />

            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0 ">$6.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">-2%</p>
            </div>
            </div>
          </div>

          <div>
            <div className="md:w-[100%] sm:w-[100%] w-[100%] mx-auto h-[270px] mb-3 bg-white border-[5px] border-white mt-1 relative shadow-md ">
              <Image src={img3} className="h-[85%] w-[100%] " />
             
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0 ">$8.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">-7%</p>
            </div>
            </div>
          </div>

          <div>
            <div className="md:w-[100%] sm:w-[100%] w-[100%] mx-auto h-[270px] mb-3 bg-white border-[5px] border-white mt-1 relative shadow-md ">
              <Image src={img4} className="h-[85%] w-[100%] " />
             
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0 ">$9.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">-15%</p>
            </div>
            </div>
          </div>

          <div>
            <div className="md:w-[100%] sm:w-[100%] w-[100%] mx-auto h-[270px] mb-3 bg-white border-[5px] border-white mt-1 relative shadow-md ">
              <Image src={img5} className="h-[85%] w-[100%] " />
             
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0 ">$9.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">-8%</p>
            </div>
            </div>
          </div>

            <div>
            <div className="md:w-[100%] sm:w-[100%] w-[100%] mx-auto h-[270px] mb-3 bg-white border-[5px] border-white mt-1 relative shadow-md ">
              <Image src={img6} className="h-[85%] w-[100%] " />
             
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0 ">$12.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">-10%</p>
            </div>
            </div>
          </div> 
        </div>

      </div>
    </div>
  );
}
