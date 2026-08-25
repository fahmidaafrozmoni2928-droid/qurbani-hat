'use client'


import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const registerPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }} = useForm();

    const handleRegister = async(data) => {
    const {email, name, photo, password} = data;

console.log(data);

const {data: res, error} = await authClient.signUp.email({
    name,
    email,
    password,
    image: photo,
   // callbackURL: "/",
})
 console.log(res, error);

 if(error){
    alert(error.message)
 }
 if(res){
    alert("SignUp Successfull")
     router.push("/");
 }
    }

    const handleGoogleRegister = async()=> {
         const data = await authClient.signIn.social({
    provider: "google",
  });
    }
    return(
        <div className="bg-green-100 w-full mt-5 py-5">
        <div className="container mx-auto  flex justify-center items-center bg-green-100 py-6">
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
  <input  type="text" className="input" placeholder="Enter Your Photo URL"  />
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

           <div className="flex justify-center items-center text-gray-500">
    OR
</div>
<div>
    <button onClick={handleGoogleRegister} className="btn bg-white text-black mt-4 w-full"><FcGoogle /> Continue with Google</button>
</div>
<div className="flex justify-center items-center">
 <p className="text-gray-500">Already have an account?<Link href={"/login"} className="text-blue-500">Login</Link></p>
 </div> 


        </div>
        </div>
        </div>
    )
}
export default registerPage;




