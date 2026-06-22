// import {useForm,} from "react-hook-form";

// import {loginUser,} from "../../api/authApi";

// import {useNavigate,} from "react-router-dom";

// import toast from "react-hot-toast";

// import useAuthStore from "../../store/authStore";

// const Login = () => {
//   const navigate =
//     useNavigate();

//   const login =
//     useAuthStore(
//       (state) => state.login
//     );

//   const {
//     register,
//     handleSubmit,
//   } = useForm();

//   const submitHandler =
//     async (data) => {
//       try {
//         const res =
//           await loginUser(data);

//         login(
//           res.data.user,
//           res.data.accessToken
//         );

//         toast.success(
//           res.message
//         );

//         navigate(
//           "/dashboard"
//         );

//       } catch (error) {
//         toast.error(
//           error.response?.data
//             ?.message ||
//             "Login failed"
//         );
//       }
//     };

//   return (
//     <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">

//       <div className="w-full max-w-md bg-slate-900 rounded-3xl p-8">

//         <h1 className="text-4xl font-bold mb-2">
//           CareerAI
//         </h1>

//         <p className="text-slate-400 mb-8">
//           Welcome Back
//         </p>

//         <form
//           onSubmit={handleSubmit(
//             submitHandler
//           )}
//           className="space-y-4"
//         >

//           <input
//             type="email"
//             placeholder="Email"
//             {...register(
//               "email"
//             )}
//             className="w-full p-4 rounded-xl bg-slate-800"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             {...register(
//               "password"
//             )}
//             className="w-full p-4 rounded-xl bg-slate-800"
//           />

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 p-4 rounded-xl"
//           >
//             Login
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default Login;

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { loginUser } from "../../api/authApi";
import useAuthStore from "../../store/authStore";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const { register, handleSubmit } = useForm();

  // const submitHandler = async (data) => {
  //   try {
  //     const res = await loginUser(data);

  //     login(res.data.accessToken, res.data.user);

  //     toast.success(res.message);

  //     navigate("/profile");
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "Login Failed");
  //   }
  // };
  const submitHandler = async (
  data
) => {
  try {

    const res =
      await loginUser(data);

    login(
      res.data.accessToken,
      res.data.user
    );

    toast.success(
      res.message
    );

    navigate("/profile");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Login Failed"
    );

  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">Welcome Back</h1>

            <p className="text-slate-300 mt-2">Login to continue</p>
          </div>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
            <div className="relative">
              <Mail
                className="absolute left-4 top-4 text-slate-400"
                size={18}
              />

              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-4 top-4 text-slate-400"
                size={18}
              />

              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] transition-all py-4 rounded-xl flex items-center justify-center gap-2 font-semibold">
              Login
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-slate-300 mt-6">
            Don't have an account?
            <Link to="/register" className="text-indigo-400 ml-2">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
