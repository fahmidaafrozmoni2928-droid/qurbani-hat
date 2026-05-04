'use client'
import { useForm } from "react-hook-form"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";




const loginPage = () => {
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
   
    }
    return(
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
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
    <br></br>
            <p>Don't have an account? <Link href={"/register"} className="text-red-500">Register</Link></p>
        </div>
        </div>
    )
}
export default loginPage;

