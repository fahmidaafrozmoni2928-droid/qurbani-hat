'use client'


import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";


const registerPage = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const handleRegister = async(data) => {
    const {email, name, photo, password} = data; 
   
console.log(data);

const {data: res, error} = await authClient.signUp.email({
    name, 
    email, 
    password,
    image: photo,
    callbackURL: "/",
})
 console.log(res, error);

 if(error){
    alert(error.message)
 }
 if(res){
    alert("SignUp Successfull")
 }
    }
    return(
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
        <div className="p-4 rounded-lg bg-white">
            <h2 className="font-bold text-3xl text-center">Register</h2>

            <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Your Name</legend>
  <input  type="text" className="input" placeholder="Enter Your Name" {...register("name", {required:"Name is required"})} />
  {errors.name && <span className="text-red-500">{errors.name.message}</span>}
</fieldset>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  <input  type="text" className="input" placeholder="Enter Your Photo URL" {...register("photo", {required:"Photo URL is required"})} />
  {errors.photo && <span className="text-red-500">{errors.photo.message}</span>} 
</fieldset>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input  type="email" className="input" placeholder="Type here email" {...register("email", {required:"Email is required"})} />
  {errors.email && <span className="text-red-500">{errors.email.message}</span>} 
</fieldset>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input" placeholder="Type here password" {...register("password", {required:"Password is required"})} />
  {errors.password && <span className="text-red-500">{errors.password.message}</span>}
</fieldset>

<br></br>

<button className="btn btn-neutral w-full">Register</button>
            </form>
    
        
        </div>
        </div>
    )
}
export default registerPage;




