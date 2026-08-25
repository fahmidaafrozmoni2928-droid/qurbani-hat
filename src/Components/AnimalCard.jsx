"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimalCard = ({animal}) => {

     const { data: session } = authClient.useSession();
  
      const user = session?.user;
    return(

       <div className="bg-slate-50">
           <div className="card bg-base-100 object-cover shadow-sm">
  
  <div className="card-body">
    
    <h2 className="card-title font-bold text-3xl"> {animal.name} </h2>
    <div className="flex justify-between">
        <p>Type: {animal.type} </p>
        
    </div>
    <p className="font-bold text-green-800 text-xl">Price: ${animal.price} </p>
    <p className="text-gray-700"> {animal.description} </p>
    <div className="card-actions justify-between">
      <Link href={user? `/all-animals/${animal.id}` : "/register"}>
        <button className="btn bg-emerald-500 text-white rounded-lg">View Details</button>
        </Link>
        
     
    </div>
  </div>
</div> 
        </div>

      )} 
       
    

export default AnimalCard;