// import {
//   LayoutDashboard,
//   FileText,
//   Brain,
//   TrendingUp,
//   Route,
//   BarChart3,
//   Flame,
//   User,
//   LogOut,
// } from "lucide-react";

// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// // const navigate = useNavigate();

// // const logoutStore = useAuthStore(
// //   (state) => state.logout
// // );
// // logout section

// // const handleLogout = async () => {
// //     try {
// //       const res = await logoutUser();

// //       localStorage.removeItem("token");

// //       toast.success(res.message);

// //       navigate("/login");
// //     } catch (error) {
// //       console.log(error);
// //       toast.error("Logout Failed");
// //     }
// //   };
// const menuItems = [
//   {
//     name: "Dashboard",
//     path: "/dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     name: "Resume Analysis",
//     path: "/resume-analysis",
//     icon: FileText,
//   },
//   {
//     name: "Career Prediction",
//     path: "/career-prediction",
//     icon: Brain,
//   },
//   {
//     name: "Skill Gap",
//     path: "/skill-gap",
//     icon: TrendingUp,
//   },
//   {
//     name: "Roadmap",
//     path: "/roadmap",
//     icon: Route,
//   },
//   {
//     name: "Progress",
//     path: "/progress",
//     icon: BarChart3,
//   },
//   {
//     name: "Streak",
//     path: "/streak",
//     icon: Flame,
//   },
//   {
//   name: "Career Trends",
//   path: "/trends",
//   icon: TrendingUp,
// },
//   {
//     name: "Profile",
//     path: "/profile",
//     icon: User,
//   },
  
 
// ];

// const Sidebar = () => {
//   return (
//     <aside className="w-72 bg-slate-950 border-r border-slate-800 h-screen overflow-y-auto">

//       <div className="p-6 border-b border-slate-800">

//         <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//           CareerAI
//         </h1>

//       </div>

//       <div className="p-4 space-y-2">

//         {menuItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
//                 isActive
//                   ? "bg-indigo-600 text-white"
//                   : "text-slate-400 hover:bg-slate-800 hover:text-white"
//               }`
//             }
//           >
//             <item.icon size={20} />
//             {item.name}
//           </NavLink>
//         ))}

//       </div>

//      <div className="absolute bottom-5 left-4 right-4 ">
//        <button
//       //  onClick={handleLogout}
//       className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl transition"
//      >
//       <LogOut size={18} />
//       Logout
//     </button>
//       </div>

//     </aside>
//   );
// };

// export default Sidebar;

import {
  LayoutDashboard,
  FileText,
  Brain,
  TrendingUp,
  Route,
  BarChart3,
  Flame,
  User,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// import { logoutUser } from "../../api/authApi";
import useAuthStore from "../../store/authStore";
const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Resume Analysis",
    path: "/resume-analysis",
    icon: FileText,
  },
  {
    name: "Career Prediction",
    path: "/career-prediction",
    icon: Brain,
  },
  {
    name: "Skill Gap",
    path: "/skill-gap",
    icon: TrendingUp,
  },
  {
    name: "Roadmap",
    path: "/roadmap",
    icon: Route,
  },
  {
    name: "Progress",
    path: "/progress",
    icon: BarChart3,
  },
  {
    name: "Streak",
    path: "/streak",
    icon: Flame,
  },
  {
    name: "Career Trends",
    path: "/trends",
    icon: TrendingUp,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
];

const Sidebar = () => {

  const navigate = useNavigate();

  const logoutStore = useAuthStore(
    (state) => state.logout
  );

  const handleLogout = async () => {

    try {

      await logoutUser();

    } catch (error) {

      console.log(error);

    } finally {

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      logoutStore();

      toast.success("Logged out successfully");

      navigate("/");

    }

  };

  return (
    <aside className=" relative w-72 bg-slate-950 border-r border-slate-800 h-screen overflow-y-auto">

      <div className="p-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          CareerAI
        </h1>
      </div>

      <div className="p-4 space-y-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}

      </div>

      {/* <div className="absolute bottom-5 left-4 right-4"> */}
      <div className="absolute bottom-5 left-4 w-[240px]">

       <button
  onClick={handleLogout}
  className="
    w-full
    flex
    items-center
    justify-center
    gap-2
    bg-red-600
    hover:bg-red-700
    px-4
    py-3
    rounded-xl
    text-white
    transition
  "
>
  <LogOut size={18} />
  Logout
</button>

      </div>

    </aside>
  );
};

export default Sidebar;