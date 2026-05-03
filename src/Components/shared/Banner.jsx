import React from "react";
import cow from '@/assets/cow.png'
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
    return(
        <div className="">
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center space-x-5 ">
    
    <Image src={cow} alt="cow" width={800} height={600}></Image> 
    <div className="flex-col">

    
    <h1 className="text-4xl md:text-6xl font-bold text-green-700">
    Find Your Perfect Qurbani Animal 🐄
  </h1>

  <p className="mt-4 text-gray-600 max-w-xl mx-auto">
    Choose from a wide range of cows, goats & sheep near you. Safe and trusted marketplace.
  </p>

  <div className="mt-6">
    <Link href={"/all-animals"}>
    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl">
      Browse Animals
    </button>
    </Link>
  </div>
  </div>
        </div>
        </div>
    )
}
export default Banner;