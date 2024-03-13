

"use client";
import React, { useRef, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { RiCustomerServiceLine } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Header() {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemWidth = 120; // Width of each item in pixels
  const containerWidth = 700; // Width of the visible container in pixels
  const items = ["Categories", "New In", "Sale", "Women clothing", "Kids", "Men fashion", "Curve", "Sleepware", "Shoes", "Home & Kitchen", "Jewelry & Accessories", "Shoes", "Home & Kitchen", "Jewelry & Accessories", "Baby & Maternity", "Sports & Outdoors"];

  const scrollRight = () => {
    if (scrollRef.current.scrollWidth - scrollPosition <= containerWidth) return;
    const newPosition = scrollPosition + containerWidth;
    setScrollPosition(newPosition);
    scrollRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    if (scrollPosition === 0) return;
    const newPosition = scrollPosition - containerWidth;
    setScrollPosition(newPosition);
    scrollRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="shadow-sm ">
      <div className="md:flex justify-between space-x-3 cursor-pointer md:px-10">
        <div className="pl-2 mt-1 ">
          <p>
            <a href="/" className="text-[35px] -tracking-tighter">
              <b>SHEIN</b>
            </a>
          </p>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Title"
            className="px-4 py-1 pr-10 md:w-[530px] w-[100%] flex flex-1 border border-black focus:outline-none"
          />
          <svg
            className="absolute right-0 h-[33px] w-[42px] text-gray-400 bg-black p-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <IoSearch className="text-[22px] text-white" />
          </svg>
        </div>
        <div className="flex justify-around md:space-x-6 space-x-2 mt-4 text-[20px]">
          <FaRegUser />
          <RiShoppingCartLine />
          <FiHeart />
          <RiCustomerServiceLine />
          <AiOutlineGlobal />
        </div>
      </div>

      <div className="md:px-12 pb-2 flex justify-between text-[14px] font-[300] cursor-pointer pl-3 overflow-x-hidden" style={{ maxWidth: 'calc(100% - 40px)' }}>
        <div ref={scrollRef} className="flex items-center space-x-4">
          {items.map((item, index) => (
            <p key={index} className="whitespace-nowrap">{item}</p>
          ))}
        </div>

        {/* <div className="flex items-center">
          {scrollPosition > 0 && <IoIosArrowBack onClick={scrollLeft} />}
          {scrollPosition + containerWidth < scrollRef.current.scrollWidth && <IoIosArrowForward onClick={scrollRight} />}
        </div> */}
      </div>
    </div>
  );
}
