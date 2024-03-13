import React from "react";
import Image from "next/image";
import img from "../../Images/1.jpg";
import img1 from "../../Images/2.jpg";
import img2 from "../../Images/3.jpg";
import img3 from "../../Images/bg.jpg";
import img4 from '../../Images/4.png'

export default function Banner() {
  return (
    <div className="md:px-12 px-4 mt-1 ">
      <div className="flex ">
        <Image src={img} className="w-[33.33%]" />
        <Image src={img1} className="w-[33.33%]" />
        <Image src={img2} className="w-[33.33%]" />
      </div>

      <div>
        <Image src={img3} className="w-[100%] " />
      </div>
      <div>
        <Image src={img4} className="w-[100%] " />
      </div>
    </div>
  );
}
