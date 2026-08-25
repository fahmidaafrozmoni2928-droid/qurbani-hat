"use client"

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";



const BookingModal = () => {
      const router = useRouter();

      const handleBooking = () => {
  const bookingSuccess = true;

    if(bookingSuccess){
         toast.success("Booking Successful!");
        router.push("/all-animals");
    }
 
};
    return(
        <div>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Booking Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div>
        <h2 className="flex justify-center items-center font-bold text-3xl">Booking Form</h2>
    </div>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
  <legend className="fieldset-legend"></legend>

  <label className="label"> Name</label>
  <input type="text" className="input" placeholder="Your Name" />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

   <label className="label"> Phone</label>
  <input type="text" className="input" placeholder="Phone" />

 <label className="label"> Address</label>
  <input type="text" className="input" placeholder="Address" />


  

  <button onClick={handleBooking} className="btn btn-neutral mt-4">Booking Now</button>
</fieldset>
    <div className="modal-action">
      {/* <form method="dialog">
    
        <button className="btn">Close</button>
      </form> */}
    </div>
  </div>
</dialog>
        </div>
    )
}
export default BookingModal;