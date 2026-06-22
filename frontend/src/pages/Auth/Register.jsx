import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { registerUser } from "../../api/authApi";
import useAuthStore from "../../store/authStore";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const submitHandler = async (data) => {
  try {

    const res =
      await registerUser(data);

    toast.success(
      "Registration Successful. Please Login."
    );

    navigate("/login");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Registration Failed"
    );

  }
};
  // const submitHandler = async (data) => {
  //   try {
  //     const res = await registerUser(data);

  //     login(
  //       res.data.accessToken,
  //       res.data.user
  //     );

  //     toast.success(res.message);

  //     navigate("/dashboard");
  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message ||
  //         "Registration Failed"
  //     );
  //   }
  // };
// const submitHandler = async (data) => {
//   try {
//     const res = await registerUser(data);

//     console.log("REGISTER RESPONSE:", res);

//     toast.success("Success");
//   } catch (error) {
//     console.log("REGISTER ERROR:", error);

//     toast.error(
//       error.response?.data?.message ||
//       "Registration Failed"
//     );
//   }
// };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">

      <div className="w-full max-w-md">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Create Account
            </h1>

            <p className="text-slate-300 mt-2">
              Start your AI Career Journey
            </p>
          </div>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-5"
          >

            <div>
              <div className="relative">
                <User className="absolute left-4 top-4 text-slate-400" size={18} />

                <input
                  {...register("fullName", {
                    required: true,
                  })}
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <User className="absolute left-4 top-4 text-slate-400" size={18} />

                <input
                  {...register("username", {
                    required: true,
                  })}
                  placeholder="Username"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-slate-400" size={18} />

                <input
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-4 text-slate-400" size={18} />

                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
                />
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] transition-all py-4 rounded-xl flex items-center justify-center gap-2 font-semibold"
            >
              Register
              <ArrowRight size={18} />
            </button>

          </form>

          <p className="text-center text-slate-300 mt-6">

            Already have an account?

            <Link
              to="/login"
              className="text-indigo-400 ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;