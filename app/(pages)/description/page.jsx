"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../../../Images/tops.png";
import img2 from "../../../Images/skirts.jpg";
import img3 from "../../../Images/bag2.jpeg";
import img4 from "../../../Images/bags.webp";
import Header from "@/Components/Header/Header";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Gallery from "@/Components/Gallery";

const Page = () => {
  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(null);
  const [showTooltipXS, setShowTooltipXS] = useState(false);
  const [showTooltipS, setShowTooltipS] = useState(false);
  const [showTooltipM, setShowTooltipM] = useState(false);
  const [showTooltipL, setShowTooltipL] = useState(false);
  const [showTooltipXL, setShowTooltipXL] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedImage(smallimages[0]);
  }, []);

  // Array of small images
  const smallimages = [img1, img2, img3, img4];

  // Function to handle cpck on small image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header />
      <br />
      <div className="md:px-44 flex space-x-2 mb-3 text-gray-400">
        <p className="hover:text-black cursor-pointer text-[13px]">Home /</p>
        <p className="hover:text-black cursor-pointer text-[13px]">
          Women Apperal /
        </p>
        <p className="hover:text-black cursor-pointer text-[13px]">
          Women Clothing /
        </p>
        <p className="hover:text-black cursor-pointer text-[13px]">
          Women Tops /
        </p>
        <p className="hover:text-black cursor-pointer text-[13px]">
          Women T-Shirts /
        </p>
      </div>
      <div className="md:px-40 grid md:grid-cols-2 grid-cols-1  ">
        <div className=" md:flex  ">
          {/* Left column with small images */}
          <div className="px-3 flex md:flex-col md:gap-0 gap-3    ">
            {smallimages.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer mb-4"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </div>
          {/* Right column to display selected image */}
          <div className="w-full px-2  ">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Full Size Image"
                layout="responsive"
              />
            )}
          </div>
        </div>
        {/* Image details */}

        <div className="md:px-10 px-2 pt-2 ">
          <p className="md:text-[14px] text-[11px] ">
            SHEIN EZwear 4pcs/Set Women's Short Tight T-Shirt, Short <br />{" "}
            Sleeves, Casual Round Neck Summer Outfits
          </p>
          <div className="flex space-x-3">
            <p className="text-[#767676] text-[12px] mt-1">
              SKU: sz2312131184442587
            </p>
            <span className="flex space-x-1 pt-1 text-[#FACF19]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <br />
          </div>
          <p className="text-[24px] font-extrabold">$19.00</p>
          <br />
          <div className="w-full h-[1px] bg-slate-200"></div>
          <br />
          <div>
            <span className="flex space-x-2">
              <p>
                <b>Color:</b>
              </p>
              <p className="text-gray-600">Multicolor</p>
            </span>

            <div className="cursor-pointer flex flex-wrap flex-grow">
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#F9CFE4] border-[1px] border-white hover:border-gray-300"></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#EFE8DA] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#EF76A4] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#4F4F53] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#C0D7E6] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#1945A3] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#BA1A1E] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#FF822C] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#E1C4D2] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#DAC45C] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#ADC4B7] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#D17783] border-[1px] border-white hover:border-gray-300  "></div>
              <div className="h-8 w-8 rounded-full p-3 mt-4 mr-4 bg-[#B59682] border-[1px] border-white hover:border-gray-300  "></div>
            </div>
            <br />
            <div>
              <p>
                <b>Size:</b>
              </p>
              <div className="pt-3 flex  flex-wrap gap-3 ">
                <div className="relative">
                  <button
                    className="h-10 w-20 rounded-[48px] border-[#e5e5e5] border-[1px] hover:border-black"
                    onMouseEnter={() => setShowTooltipXS(true)}
                    onMouseLeave={() => setShowTooltipXS(false)}
                  >
                    XS
                  </button>
                  {showTooltipXS && (
                    <div className="absolute top-[-100px] w-60 left-10 bg-white shadow-xl text-black p-2 rounded-md text-xs opacity-100 transition-all duration-1000">
                      <b>
                        <p>Product Measurement</p>
                      </b>
                      <p className="py-1">
                        Shoulder: 35.00 cm , Length: 44.90 cm
                      </p>
                      <p>Sleeve Length: 12.50 cm , Chest: 72.50 cm</p>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="h-10 w-20 rounded-[48px] border-[#e5e5e5] border-[1px] hover:border-black"
                    onMouseEnter={() => setShowTooltipS(true)}
                    onMouseLeave={() => setShowTooltipS(false)}
                  >
                    S
                  </button>
                  {showTooltipS && (
                    <div className="absolute w-60 top-[-100px] left-30 bg-white shadow-xl text-black p-2 rounded-md text-xs opacity-100 transition-all duration-1000">
                      <b>
                        <p>Product Measurement</p>
                      </b>
                      <p className="py-1">
                        Shoulder: 40.00 cm , Length: 48.90 cm
                      </p>
                      <p>Sleeve Length: 18.50 cm , Chest: 78.50 cm</p>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="h-10 w-20 rounded-[48px] border-[#e5e5e5] border-[1px] hover:border-black"
                    onMouseEnter={() => setShowTooltipM(true)}
                    onMouseLeave={() => setShowTooltipM(false)}
                  >
                    M
                  </button>
                  {showTooltipM && (
                    <div className="absolute w-60 top-[-100px] left-10 bg-sto shadow-xl text-black p-2 rounded-md text-xs opacity-100 transition-all duration-1000">
                      <b>
                        <p>Product Measurement</p>
                      </b>
                      <p className="py-1">
                        Shoulder: 45.00 cm , Length: 54.90 cm
                      </p>
                      <p>Sleeve Length: 22.50 cm , Chest: 82.50 cm</p>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="h-10 w-20 rounded-[48px] border-[#e5e5e5] border-[1px] hover:border-black"
                    onMouseEnter={() => setShowTooltipL(true)}
                    onMouseLeave={() => setShowTooltipL(false)}
                  >
                    L
                  </button>
                  {showTooltipL && (
                    <div className="absolute w-60 top-[-100px] left-10 bg-white shadow-xl text-black p-2 rounded-md text-xs opacity-100 transition-all duration-1000">
                      <b>
                        <p>Product Measurement</p>
                      </b>
                      <p className="py-1">
                        Shoulder: 45.00 cm , Length: 54.90 cm
                      </p>
                      <p>Sleeve Length: 22.50 cm , Chest: 82.50 cm</p>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="h-10 w-20 rounded-[48px] border-[#e5e5e5] border-[1px] hover:border-black"
                    onMouseEnter={() => setShowTooltipXL(true)}
                    onMouseLeave={() => setShowTooltipXL(false)}
                  >
                    XL
                  </button>
                  {showTooltipXL && (
                    <div className="absolute w-60 top-[-100px] left-1 bg-white shadow-xl text-black p-2 rounded-md text-xs opacity-100 transition-all duration-1000">
                      <b>
                        <p>Product Measurement</p>
                      </b>
                      <p className="py-1">
                        Shoulder: 45.00 cm , Length: 54.90 cm
                      </p>
                      <p>Sleeve Length: 22.50 cm , Chest: 82.50 cm</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <br />
            <button className="bg-black w-full text-white py-4 rounded-md text-2xl transition-all duration-300 hover:bg-gray-800 ">
              ADD TO CART{" "}
            </button>
            <br />
            <br />
            <div className="bg-[#F7F8FA] p-4 ">
              <div className="flex gap-3">
                <MdOutlineLocalShipping className="mt-1 text-[20px] " />
                <span>
                  <p>
                    <b>Free Shipping</b>{" "}
                  </p>
                  <p className="text-[#767676]text-[12px]  ">
                    Free Shipping on oder over 130$
                  </p>
                  <p className="text-[#767676] text-[12px] ">
                    Estimated to be depver in 20 days
                  </p>
                </span>
              </div>
              <div className="flex gap-3 mt-3 ">
                <MdOutlineAssignmentReturn className="mt-1 text-[20px] " />
                <span>
                  <p>
                    <b>Return popcy </b>{" "}
                  </p>
                  <p className="text-[#767676] text-[12px] ">
                    Our Guarantee Return or exchange within 30 days from the
                    depvered date.
                  </p>
                  <p className="text-[#767676] text-[12px]  ">
                    1. Items received within 30 days from the depvered date.{" "}
                    <br />
                    2. Items received unused, undamaged and in original package.{" "}
                    <br />
                    3. Return shipping fee is paid by buyer.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <br />

                          {/* Description details  */}
          <div className="px-2">
            <div className="flex justify-between  ">
              <b>
                {" "}
                <p>Description</p>
              </b>
              <b onClick={toggleAccordion}>
                <p className="cursor-pointer text-[20px] ">
                  {isOpen ? "-" : "+"}
                </p>
              </b>
            </div>
            <div className="grid grid-cols-2 ">
              <div className="text-[#222] text-[12px] leading-6 ">
                <p>Color: </p>
                <p>Style: </p>
                <p>Pattern Type: </p>
                <p>Details: </p>
                <p>Neckpne:</p>
                <p>Sleeve Length: </p>
                <p>Length: </p>
                <p>Temperature: </p>
                <p>Sleeve Type: </p>
              </div>
              <div className="text-[#222] text-[12px] leading-6 ">
                <p>Color: </p>
                <p>Style: </p>
                <p>Pattern Type: </p>
                <p>Details: </p>
                <p>Neckpne:</p>
                <p>Sleeve Length: </p>
                <p>Length: </p>
                <p>Temperature: </p>
                <p>Sleeve Type: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery/>
    </>
  );
};

export default Page;
