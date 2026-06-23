import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getProfile, updateProfile } from "../../api/userApi";


const Profile = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();


  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();

      const user = res.data;
      console.log("Profile loaded");

      reset({
        fullName: user.fullName || "",

        bio: user.bio || "",

        degree: user.education?.degree || "",

        college: user.education?.college || "",

        graduationYear: user.education?.graduationYear || "",

        skills: user.skills?.join(", ") || "",

        interests: user.interests?.join(", ") || "",

        profession: user.profession || "",

        experienceLevel: user.experienceLevel || "Beginner",

        yearsOfExperience: user.yearsOfExperience || 0,
      });
    } catch (error) {
      console.log(error);

      toast.error("Failed to load profile");
    }
  };

  const submitHandler = async (data) => {
    try {
      const payload = {
        bio: data.bio,

        profession: data.profession,

        education: {
          degree: data.degree,
          college: data.college,
          graduationYear: Number(data.graduationYear),
        },

        skills:
          data.skills
            ?.split(",")
            .map((item) => item.trim())
            .filter(Boolean) || [],

        interests:
          data.interests
            ?.split(",")
            .map((item) => item.trim())
            .filter(Boolean) || [],

        experienceLevel: data.experienceLevel,

        yearsOfExperience: Number(data.yearsOfExperience),
      };
console.log(payload);
      const res = await updateProfile(payload);

      toast.success(res.message);
      navigate("/dashboard");

      fetchProfile();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold">Profile Setup</h1>

          <p className="text-slate-400 mt-2">
            Complete your profile to improve AI recommendations.
          </p>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-8">
          {/* Basic Info */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                placeholder="Full Name"
                {...register("fullName")}
                disabled
                className="bg-slate-800 p-4 rounded-xl opacity-70"
              />

              <textarea
                placeholder="Bio"
                {...register("bio")}
                className="bg-slate-800 p-4 rounded-xl min-h-[120px] md:col-span-2"
              />
            </div>
          </div>

          {/* Career Goal */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Career Goal</h2>

            {/* <select
              {...register(
                "profession"
              )}
              className="bg-slate-800 p-4 rounded-xl w-full"
            >

              <option value="">
                Select Profession
              </option>

              <option>
                Full Stack Developer
              </option>

              <option>
                Frontend Developer
              </option>

              <option>
                Backend Developer
              </option>

              <option>
                MERN Stack Developer
              </option>

              <option>
                AI/ML Engineer
              </option>

              <option>
                Data Analyst
              </option>

              <option>
                DevOps Engineer
              </option>

              <option>
                Cloud Engineer
              </option>

              <option>
                Cyber Security Engineer
              </option>

            </select> */}

            <input
              type="text"
              placeholder="Enter your target profession (e.g. MERN Stack Developer)"
              {...register("profession", {
                required: true,
              })}
              className="bg-slate-800 p-4 rounded-xl w-full"
            />
          </div>

          {/* Education */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>

            <div className="grid md:grid-cols-3 gap-5">
              <input
                placeholder="Degree"
                {...register("degree")}
                className="bg-slate-800 p-4 rounded-xl"
              />

              <input
                placeholder="College"
                {...register("college")}
                className="bg-slate-800 p-4 rounded-xl"
              />

              <input
                type="number"
                placeholder="Graduation Year"
                {...register("graduationYear")}
                className="bg-slate-800 p-4 rounded-xl"
              />
            </div>
          </div>

          {/* Skills */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>

            <textarea
              placeholder="HTML, CSS, JavaScript, React"
              {...register("skills")}
              className="bg-slate-800 p-4 rounded-xl min-h-[120px] w-full"
            />
          </div>

          {/* Interests */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Interests</h2>

            <textarea
              placeholder="AI, Web Development, Cloud Computing"
              {...register("interests")}
              className="bg-slate-800 p-4 rounded-xl min-h-[120px] w-full"
            />
          </div>

          {/* Experience */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <select
                {...register("experienceLevel")}
                className="bg-slate-800 p-4 rounded-xl"
              >
                <option>Beginner</option>

                <option>Intermediate</option>

                <option>Advanced</option>
              </select>

              <input
                type="number"
                placeholder="Years of Experience"
                {...register("yearsOfExperience")}
                className="bg-slate-800 p-4 rounded-xl"
              />
            </div>
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            font-semibold
            hover:scale-[1.01]
            transition
            "
          >
            Save Profile
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
