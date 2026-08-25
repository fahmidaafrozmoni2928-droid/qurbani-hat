'use client'
import { useForm } from "react-hook-form"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";


const loginPage = () => {
     const router = useRouter();
    const { register, handleSubmit, formState: { errors }} = useForm();

    const handleLogin = async(data) => {

   console.log(data);

   const { data: res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(res, error);

if(error){
    alert(error.message)
 }
 if(res){
    alert("SignIn Successfull")
     router.push("/");
 }

   
    }

    const handleGoogleLogin = async() => {
            await authClient.signIn.social({
                provider: "google"
            })
        }

    return(
        <div className="bg-green-100 w-full mt-5 py-5">
        <div className="container mx-auto  flex justify-center items-center bg-green-100 py-6">
        <div className="p-4 rounded-lg bg-white">
            <h2 className="font-bold text-3xl text-center">Login</h2>

            <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input  type="email" className="input" placeholder="Type here email" {...register("email", {required:"This field is required"})} />
  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
</fieldset>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input" placeholder="Type here password" {...register("password", {required:"This field is required"})} />
  {errors.password && <span className="text-red-500">{errors.password.message}</span>}
</fieldset>

<br></br>

<button className="btn btn-neutral w-full">Login</button>
            </form>

<div className="flex justify-center items-center text-gray-500">
    OR
</div>
<div>
    <button onClick={handleGoogleLogin} className="btn bg-white text-black mt-4 w-full"><FcGoogle /> Continue with Google</button>
</div>
<div className="flex justify-center items-center">
 <p className="text-gray-500">Don't have an account?<Link href={"/register"} className="text-blue-500">Register</Link></p>
 </div>

    
            
        </div>
        </div>
        </div>
    )
}
export default loginPage;

