"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const myProfilePage = () => {

    const { data: session } = authClient.useSession();

    const user = session?.user;
    return(
        <div className="pt-15">
      {user ?( <div className="card bg-green-100 shadow-md p-6 max-w-md mx-auto">
      
      <div className="flex flex-col items-center gap-3">
        
    {user?.image ?  (  <div className="avatar">
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
              )}

                <h2 className="text-xl font-bold"> Name:
                 {user?.name}
        </h2>

        <p className="text-xl font-bold"> Email:  
              {user?.email}
        </p>


    <Link href={"/update-profile"}><button className="btn">Update Profile</button></Link>  
      </div>

     
    </div>

      ) : (  <div className="flex justify-center items-center min-h-[400px]">
        <Link href="/register">
          <button className="btn bg-emerald-500 text-white">
            Please Register
          </button>
        </Link>
      </div>

      )}

         
        </div>
    )
}
export default myProfilePage;



   