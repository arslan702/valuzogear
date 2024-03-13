import React from "react";
import Image from "next/image";
import img from "../../Images/kids.webp";
import img1 from "../../Images/bags.webp";
import img2 from "../../Images/Acces.jpeg";
import img3 from "../../Images/beauty.jpeg";
import img4 from "../../Images/bottom.jpg";
import img5 from "../../Images/jeans.jpg";
import img6 from "../../Images/jew.jpeg";
import img7 from "../../Images/kids.webp";
import img8 from "../../Images/shoe.webp";
import img9 from "../../Images/skirts.jpg";
import img10 from "../../Images/tops.png";
import img11 from "../../Images/tshirt.jpg";





export default function Categories() {
  return (
    <div className="md:px-12 ">
      <div className="flex justify-center  flex-wrap my-3 ">
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Kids</p>
        </div>
        <div className=" flex  flex-col items-center mb-4 w-[170px] ">
          <Image src={img1} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Bag</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img2} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Accesory</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img3} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Beauty products</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] " >
          <Image src={img4} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Bottom</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img5} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Jeans</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img6} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Jewelary</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img7} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Kids</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img8} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Shoes</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img9} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Skirt</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img10} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">Women</p>
        </div>
        <div className=" flex justify-center flex-col items-center mb-4 w-[170px] ">
          <Image src={img11} className="rounded-[100%] h-[130px] w-[135px]  " />
          <p className="text-black font-[600] ">T-Shirt</p>
        </div>
       
        
        
         
      </div>
    </div>
  );
}
