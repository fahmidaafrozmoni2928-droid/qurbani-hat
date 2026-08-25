'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from '@/assets/qurbani.jpg'
import { authClient } from "@/lib/auth-client";

const Navber = () => {
 const { 
        data: session, 
       
    } = authClient.useSession() 
    const user = session?.user

   // console.log(session)

    const handleSignOut = async() => {
await authClient.signOut();
    }

   
    return(
        <div className="bg-green-700 text-white w-full shadow-sm">
          <div className=" navbar max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    <li>
        <Link href={"/"} className="bg-black">Home</Link>
       
    </li>
    <li>
    <Link href={"/all-animals"} className="bg-black">All Animals</Link>
    </li>
    
      </ul>
    </div>
    <Image src={logo} alt="qurbani" height={80} width={80}></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
     
      <li>
        <Link href={"/all-animals"}>All Animals</Link>
      </li>
 <li>
        <Link href={"/my-profile"}>Profile</Link>
      </li>
       
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    <ul className="flex items-center gap-4">
    {
      user ? <>
    
   <li>
    {
      user?.image ? (
        <div className="avatar">
  <div className="w-10 rounded-full">
       <Image alt="image" width={25} height={25} src={user?.image}></Image>
       </div>
</div>
      ) : (
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-12 rounded-full">
             <span className="text-xl flex items-center justify-center">
          {
            user?.name?.charAt(0).toUpperCase()
          }
             </span>
          </div>
        </div>
      )
    }
    
   </li>
 <li> <Link href={'/logout'}><button onClick={handleSignOut} className="btn rounded-xl bg-red-400 text-white">Logout</button></Link></li>

      </>  : <>
      <li> <Link href={'/login'}><button className="btn rounded-xl bg-white text-green-700">Login</button></Link></li>
   <li> <Link href={'/register'}><button className="btn rounded-xl bg-white text-green-700"> Register</button></Link></li>
      </>
    }

   
   
  </ul>
  </div>
</div>
        </div>
    )
}
export default Navber;