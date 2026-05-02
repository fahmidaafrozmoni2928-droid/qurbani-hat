import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimalCard = ({animal}) => {
    return(
        <div>
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image src={animal.image} alt={animal.name} width={400} height={300}>  </Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-3xl"> {animal.name} </h2>
    <div className="flex justify-between">
        <p>Type: {animal.type} </p>
        <p>Breed: {animal.breed} </p>
    </div>
    <p className="font-bold text-green-800 text-xl">Price: ${animal.price} </p>
    <p className="text-gray-700"> {animal.description} </p>
    <div className="card-actions justify-between">
        <Link href={"/home"}>
        <button className="btn bg-emerald-500 text-white rounded-lg">View Details</button>
        </Link>
      <button className="btn bg-emerald-500 text-white rounded-lg">Buy Now</button>
    </div>
  </div>
</div> 
        </div>
    )
}
export default AnimalCard;