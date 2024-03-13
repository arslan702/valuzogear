import React from "react";
import { IoIosFlash } from "react-icons/io";
import Image from "next/image";
import img1 from "../../Images/bags.webp";
import img2 from "../../Images/Acces.jpeg";
import img3 from "../../Images/beauty.jpeg";
import img4 from "../../Images/12.jpeg";
import img5 from "../../Images/13.jpg";
import img6 from "../../Images/14.jpeg";
import img7 from "../../Images/bag2.jpeg";
import img8 from "../../Images/Acces2.jpeg";




export default function Sale() {
  return (
    <div className="md:px-12">
      <div
        className="md:p-5 p-5 "
        style={{ background: "linear-gradient(#FB9CB5, white)" }}
      >
        <p className="text-[26px] md:text-left sm:text-center text-center ">
          <b>Flash Sale</b>
        </p>

        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 py-2 gap-x-2 cursor-pointer ">
          <div>
            <div className="md:w-[100%] sm:w-[100%] w-[100%] mx-auto h-[250px] border-[5px] border-white mb-3 mt-1 relative  ">
              <Image src={img1} className="h-[100%] w-[100%] " />
              <Image src={img7} className="h-[100%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 " />

              <div className="h-[60px] w-[50px] bg-[#FACF19] absolute top-0 left-0 pt-2 font-bolder ">
                <div className="flex flex-col justify-between items-center ">
                  <b>
                    <IoIosFlash className=" text-[20px] " />
                  </b>
                  <p>-50%</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 my-1  ">
              <b>
                <p className="text-[#fa6338] text-[16px] md:pl-0 sm:pl-0  ">$4.50</p>
              </b>
              <del className="text-[#959595] text-[12px] pt-1 ">$10.00</del>
            </div>
          </div>

          <div>
            <div className=" w-[100%] mx-auto h-[250px] border-[5px] border-white mb-3 mt-1 relative  ">
              <Image src={img2} className="h-[100%] w-[100%] " />
              <Image src={img8} className="h-[100%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 " />
              <div className="h-[60px] w-[50px] bg-[#FACF19] absolute top-0 left-0 pt-2 font-bolder ">
                <div className="flex flex-col justify-between items-center ">
                  <b>
                    <IoIosFlash className=" text-[20px] " />
                  </b>
                  <p>-40%</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 my-1  ">
              <b>
                <p className="text-[#fa6338] text-[16px] md:pl-0 sm:pl-0  ">$5.50</p>
              </b>
              <del className="text-[#959595] text-[12px] pt-1 ">$12.00</del>
            </div>
          </div>

          <div>
            <div className=" w-[100%] mx-auto h-[250px] border-[5px] border-white mb-3 mt-1 relative  ">
              <Image src={img3} className="h-[100%] w-[100%] " />
              <div className="h-[60px] w-[50px] bg-[#FACF19] absolute top-0 left-0 pt-2 font-bolder ">
                <div className="flex flex-col justify-between items-center ">
                  <b>
                    <IoIosFlash className=" text-[20px] " />
                  </b>
                  <p>-60%</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 my-1  ">
              <b>
                <p className="text-[#fa6338] text-[16px] md:pl-0 sm:pl-0  ">$7.50</p>
              </b>
              <del className="text-[#959595] text-[12px] pt-1 ">$16.00</del>
            </div>
          </div>

          <div>
            <div className=" w-[100%] mx-auto h-[250px] border-[5px] mb-3 border-white mt-1 relative  ">
              <Image src={img4} className="h-[100%] w-[100%] " />
              <div className="h-[60px] w-[50px] bg-[#FACF19] absolute top-0 left-0 pt-2 font-bolder ">
                <div className="flex flex-col justify-between items-center ">
                  <b>
                    <IoIosFlash className=" text-[20px] " />
                  </b>
                  <p>-30%</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 my-1  ">
              <b>
                <p className="text-[#fa6338] text-[16px] md:pl-0 sm:pl-0  ">$3.50</p>
              </b>
              <del className="text-[#959595] text-[12px] pt-1 ">$7.00</del>
            </div>
          </div>

          <div>
            <div className=" w-[100%] mx-auto h-[250px] mb-3 border-[5px] border-white mt-1 relative  ">
              <Image src={img5} className="h-[100%] w-[100%] " />
              <div className="h-[60px] w-[50px] bg-[#FACF19] absolute top-0 left-0 pt-2 font-bolder ">
                <div className="flex flex-col justify-between items-center ">
                  <b>
                    <IoIosFlash className=" text-[20px] " />
                  </b>
                  <p>-10%</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 my-1  ">
              <b>
                <p className="text-[#fa6338] text-[16px] md:pl-0 sm:pl-0  ">$3.50</p>
              </b>
              <del className="text-[#959595] text-[12px] pt-1 ">$6.00</del>
            </div>
          </div>

          <div>
            <div className=" w-[100%] mx-auto h-[250px] mb-3 border-[5px] border-white mt-1 relative  ">
              <Image src={img6} className="h-[100%] w-[100%] " />
              <div className="h-[60px] w-[50px] bg-[#FACF19] absolute top-0 left-0 pt-2 font-bolder ">
                <div className="flex flex-col justify-between items-center ">
                  <b>
                    <IoIosFlash className=" text-[20px] " />
                  </b>
                  <p>-50%</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 my-1  ">
              <b>
                <p className="text-[#fa6338] text-[16px] md:pl-0 sm:pl-0  ">$2.50</p>
              </b>
              <del className="text-[#959595] text-[12px] pt-1 ">$4.00</del>
            </div>
          </div>

         
        </div>

      </div>
    </div>
  );
}
