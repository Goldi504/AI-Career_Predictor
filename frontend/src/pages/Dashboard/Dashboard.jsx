// import DashboardLayout from "../../layouts/DashboardLayout";

// const Dashboard = () => {
//   return (
//     <DashboardLayout>

//       {/* Welcome Section */}

//       <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 mb-8">

//         <h1 className="text-4xl font-bold">
//           Welcome to CareerAI 🚀
//         </h1>

//         <p className="mt-3 text-indigo-100">
//           Analyze your skills, predict your career,
//           and follow a personalized roadmap.
//         </p>

//       </div>

//       {/* Stats */}

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

//         <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
//           <h3 className="text-slate-400">
//             Career Match
//           </h3>

//           <h2 className="text-4xl font-bold mt-3">
//             92%
//           </h2>
//         </div>

//         <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
//           <h3 className="text-slate-400">
//             Skills
//           </h3>

//           <h2 className="text-4xl font-bold mt-3">
//             12
//           </h2>
//         </div>

//         <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
//           <h3 className="text-slate-400">
//             Missing Skills
//           </h3>

//           <h2 className="text-4xl font-bold mt-3">
//             4
//           </h2>
//         </div>

//         <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
//           <h3 className="text-slate-400">
//             Progress
//           </h3>

//           <h2 className="text-4xl font-bold mt-3">
//             68%
//           </h2>
//         </div>

//       </div>

//       {/* Bottom Section */}

//       <div className="grid lg:grid-cols-2 gap-6 mt-8">

//         <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

//           <h3 className="text-xl font-semibold mb-4">
//             Predicted Career
//           </h3>

//           <div className="bg-indigo-600/20 border border-indigo-500 rounded-2xl p-5">
//             <h2 className="text-3xl font-bold">
//               AI Engineer
//             </h2>
//           </div>

//         </div>

//         <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

//           <h3 className="text-xl font-semibold mb-4">
//             Missing Skills
//           </h3>

//           <div className="flex flex-wrap gap-3">

//             <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full">
//               Docker
//             </span>

//             <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full">
//               AWS
//             </span>

//             <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full">
//               Kubernetes
//             </span>

//           </div>

//         </div>

//       </div>

//     </DashboardLayout>
//   );
// };

// export default Dashboard;


import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  User,
  Target,
  Brain,
  TrendingUp,
  BookOpen,
} from "lucide-react";

import { getDashboardAnalytics } from "../../api/dashboardApi";
import { getProfile } from "../../api/userApi";

const Dashboard = () => {
  const [analytics, setAnalytics] =
    useState(null);

  const [profile, setProfile] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData =
    async () => {
      try {
        const [
          analyticsRes,
          profileRes,
        ] = await Promise.all([
          getDashboardAnalytics(),
          getProfile(),
        ]);

        setAnalytics(
          analyticsRes.data
        );

        setProfile(
          profileRes.data
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load dashboard"
        );
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          Loading Dashboard...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Welcome */}

      <div
        className="
        bg-gradient-to-r
        from-indigo-600
        via-purple-600
        to-pink-600
        rounded-3xl
        p-8
        mb-8
        "
      >
        <h1 className="text-4xl font-bold">
          Welcome{" "}
          {profile?.fullName ||
            "User"}{" "}
          🚀
        </h1>

        <p className="mt-3 text-indigo-100">
          Your AI Career Journey
          starts here.
        </p>
      </div>

      {/* Profile Card */}

      <div
        className="
        bg-slate-900
        rounded-3xl
        border
        border-slate-800
        p-6
        mb-8
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
            w-16
            h-16
            rounded-full
            bg-indigo-600
            flex
            items-center
            justify-center
            "
          >
            <User size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              {profile?.fullName}
            </h2>

            <p className="text-slate-400">
              {profile?.email}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-slate-300">
            {profile?.bio ||
              "No bio added yet"}
          </p>
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <Target className="text-indigo-400 mb-3" />

          <h3 className="text-slate-400">
            Career Match
          </h3>

          <h2 className="text-4xl font-bold mt-2">
            {
              analytics?.careerMatchScore
            }
            %
          </h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <Brain className="text-cyan-400 mb-3" />

          <h3 className="text-slate-400">
            Skills
          </h3>

          <h2 className="text-4xl font-bold mt-2">
            {
              analytics?.skillsCount
            }
          </h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <BookOpen className="text-red-400 mb-3" />

          <h3 className="text-slate-400">
            Missing Skills
          </h3>

          <h2 className="text-4xl font-bold mt-2">
            {
              analytics?.missingSkillsCount
            }
          </h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <TrendingUp className="text-green-400 mb-3" />

          <h3 className="text-slate-400">
            Progress
          </h3>

          <h2 className="text-4xl font-bold mt-2">
            {analytics?.progress}%
          </h2>
        </div>
      </div>

      {/* Career */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <div
          className="
          bg-slate-900
          rounded-3xl
          border
          border-slate-800
          p-6
          "
        >
          <h3 className="text-xl font-semibold mb-4">
            Predicted Career
          </h3>

          <div
            className="
            bg-indigo-500/20
            border
            border-indigo-500
            rounded-2xl
            p-5
            "
          >
            <h2 className="text-3xl font-bold">
              {
                analytics?.career ||
                "Not Generated"
              }
            </h2>
          </div>
        </div>

        <div
          className="
          bg-slate-900
          rounded-3xl
          border
          border-slate-800
          p-6
          "
        >
          <h3 className="text-xl font-semibold mb-4">
            Skills
          </h3>

          <div className="flex flex-wrap gap-3">

            {profile?.skills?.map(
              (
                skill,
                index
              ) => (
                <span
                  key={index}
                  className="
                  bg-green-500/20
                  text-green-400
                  px-4
                  py-2
                  rounded-full
                  "
                >
                  {skill}
                </span>
              )
            )}

          </div>
        </div>

      </div>

      {/* Education */}

      <div
        className="
        bg-slate-900
        rounded-3xl
        border
        border-slate-800
        p-6
        mt-8
        "
      >
        <h3 className="text-xl font-semibold mb-4">
          Education
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          <div>
            <p className="text-slate-400">
              Degree
            </p>

            <p>
              {
                profile?.education
                  ?.degree
              }
            </p>
          </div>

          <div>
            <p className="text-slate-400">
              College
            </p>

            <p>
              {
                profile?.education
                  ?.college
              }
            </p>
          </div>

          <div>
            <p className="text-slate-400">
              Graduation
            </p>

            <p>
              {
                profile?.education
                  ?.graduationYear
              }
            </p>
          </div>

        </div>
      </div>

    </DashboardLayout>
  );
};

export default Dashboard;