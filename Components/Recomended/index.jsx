import React from "react";
import Image from "next/image";
import img1 from "../../Images/tops.png";
import img2 from "../../Images/skirts.jpg";
import img3 from "../../Images/bag2.jpeg";
import img4 from "../../Images/bags.webp";
import img5 from "../../Images/jeans.jpg";
import img6 from "../../Images/Acces.jpeg";
import img7 from "../../Images/tops2.jpeg";
import img8 from "../../Images/skirt2.jpeg";
import img9 from "../../Images/Acces2.jpeg";
import img10 from "../../Images/jeans2.jpeg";
import img11 from "../../Images/jew.jpeg";
import img12 from "../../Images/jew2.jpeg";

export default function Recomended() {
  return (
    <div className="md:px-12 my-2 md:p-5 p-5">
      <div className="md:flex justify-center text-center space-x-10 ">
        <p className="text-[16px]">
          <b className="text-xl">Recomended</b>
        </p>
      </div>

      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 py-4  gap-x-3 cursor-pointer ">
        {/* <div className="" >
          <div className="md:w-[100%] sm:w-[100%] w-[100%]  mx-auto h-[315px] bg-white mt-1  mb-16 relative inline-block shadow-md hover:opacity-100 ">
            <Image src={img1} className="h-[100%] w-[100%]  " />
            <Image
              src={img7}
              className="h-[100%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 "
            />
            <button class="absolute bottom-2 left-1/2 transform -translate-x-1/2  bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
              Add to Cart
            </button>
            <p className="mt-2 text-[13px] ">Women tops</p>
            <div className="flex space-x-2 my-1  text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0  ">$4.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">
                -5%
              </p>
            </div>
          </div>
        </div> */}

<div className="md:w-[100%] sm:w-[100%] w-[100%] mx-auto h-[315px] bg-white mt-1 mb-16 relative inline-block shadow-md hover:opacity-100">
  <div className="relative h-full">
    <Image src={img1} className="h-full w-full" />
    <Image src={img7} className="h-full w-full absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
    <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-200 text-white px-4 py-2 rounded-md shadow-md opacity-0 transition-opacity duration-300 hover:opacity-100">
      Add to Cart
    </button>
  </div>
  <p className="mt-2 text-[13px]">Women tops</p>
  <div className="flex space-x-2 my-1 text-[#fa6338]">
    <b>
      <p className="text-[16px] md:pl-0 sm:pl-0">$4.50</p>
    </b>
    <p className="text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338]">-5%</p>
  </div>
</div>


        <div>
          <div className="md:w-[100%] sm:w-[100%] w-[100%]  mx-auto h-[315px] bg-white mb-16  mt-1 relative shadow-md ">
            <Image src={img2} className="h-[100%] w-[100%] " />
            <Image
              src={img8}
              className="h-[100%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 "
            />

            <p className="mt-2 text-[13px] ">Women Skirts</p>
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0  ">$4.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">
                -5%
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="md:w-[100%] sm:w-[100%] w-[100%]  mx-auto h-[315px] bg-white mb-16  mt-1 relative shadow-md ">
            <Image src={img6} className="h-[100%] w-[100%] " />
            <Image
              src={img9}
              className="h-[100%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 "
            />

            <p className="mt-2 text-[13px] ">Women tops</p>
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0  ">$4.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">
                -5%
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="md:w-[100%] sm:w-[100%] w-[100%]  mx-auto h-[315px] bg-white mb-16  mt-1 relative shadow-md ">
            <Image src={img3} className="h-[100%] w-[100%] " />
            <Image
              src={img4}
              className="h-[100%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 "
            />

            <p className="mt-2 text-[13px] ">Women tops</p>
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0 ">$4.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">
                -5%
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="md:w-[100%] sm:w-[100%] w-[100%]  mx-auto h-[315px] bg-white mb-16  mt-1 relative shadow-md ">
            <Image src={img11} className="h-[100%] w-[100%] " />
            <Image
              src={img12}
              className="h-[100%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 "
            />
            <button class="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
              Add to Cart
            </button>

            <p className="mt-2 text-[13px] ">Women tops</p>
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0  ">$4.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">
                -5%
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="md:w-[100%] sm:w-[100%] w-[100%]  mx-auto h-[315px] bg-white mb-16 mt-1 relative shadow-md ">
            <Image src={img5} className="h-[100%] w-[100%] " />
            <Image
              src={img10}
              className="h-[100%] w-[100%] absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100 "
            />

            <p className="mt-2 text-[13px] ">Women tops</p>
            <div className="flex space-x-2 my-1 text-[#fa6338]  ">
              <b>
                <p className=" text-[16px] md:pl-0 sm:pl-0 ">$4.50</p>
              </b>
              <p className=" text-[13px] pt-1 border-[1px] h-4 pb-[1px] mt-1 flex justify-center items-center border-[#fa6338] ">
                -5%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
