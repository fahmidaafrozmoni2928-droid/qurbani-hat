"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const updateProfilePage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await authClient.updateUser({
      name,
      image,
    });

   

    toast.success("Profile Updated Successfully!");
    router.push("/my-profile");
  };

  return (
    <div  className="pt-20">

      <h2 className="font-bold text-2xl flex justify-center items-center pb-5">Update Your Profile</h2>
<form onSubmit={handleUpdate} className="bg-green-100 border-base-300 rounded-box w-xs border p-4 mx-auto">
         <fieldset className="fieldset ">
      
 
<input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
  </fieldset>


  <fieldset className="fieldset">
    
 
   <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

  </fieldset>
 
 <button className="btn" type="submit">
        Save
      </button>

  

  

</form>
   
    </div>
  );
}
export default updateProfilePage;
