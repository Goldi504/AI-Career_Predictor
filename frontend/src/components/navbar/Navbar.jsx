// import { Bell, Search } from "lucide-react";
// import { Menu} from "lucide-react";
// import {Moon,Sun} from "lucide-react";
// import { useTheme } from "../../context/ThemeContext";

// const { theme, toggleTheme } = useTheme();
// const Navbar = ({ setSidebarOpen }) => {
//  const { theme, toggleTheme } =
//     useTheme();
//   return (
//     <nav className="h-20 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-6">

//       <div>

//         <h2 className="text-2xl font-bold">
//           Dashboard
//         </h2>

//         <p className="text-slate-400 text-sm">
//           Welcome back 👋
//         </p>

//       </div>

//       <div className="flex items-center gap-4">

//         <div className="hidden md:flex items-center bg-slate-900 rounded-xl px-4 py-2">

//           <Search size={18} className="text-slate-400" />

//           <input
//             placeholder="Search..."
//             className="bg-transparent outline-none ml-2"
//           />

//         </div>

//         <button className="bg-slate-900 p-3 rounded-xl">
//           <Bell size={18} />
//         </button>

//         <img
//           src="https://i.pravatar.cc/150?img=5"
//           alt="profile"
//           className="w-12 h-12 rounded-full border-2 border-indigo-500"
//         />

//       </div>
//       <button
//       onClick={() => setSidebarOpen(true)}
//       className="lg:hidden p-2 rounded-xl bg-slate-900"
//       >
//        <Menu size={20} />
//      </button>

//      <div className="flex items-center gap-2">

//     <button
//       onClick={toggleTheme}
//       className="
//       p-3
//       rounded-xl
//       bg-slate-900
//       hover:bg-slate-800
//       transition
//       "
//     >
//       {
//         theme === "dark"
//           ? <Sun size={18} />
//           : <Moon size={18} />
//       }
//     </button>

//     <div className="hidden md:block text-sm text-slate-400">

//       {
//         theme === "dark"
//           ? "☀️ Light"
//           : "🌙 Dark"
//       }

//     </div>

//   </div>

//   {/* Notification */}

//   <button className="bg-slate-900 p-3 rounded-xl">
//     <Bell size={18} />
//   </button>

//   {/* Profile */}

//   <img
//     src="https://i.pravatar.cc/150?img=5"
//     alt="profile"
//     className="w-12 h-12 rounded-full"
//   />



//     </nav>
//   );
// };

// export default Navbar;

import {
  Bell,
  Search,
  Menu,
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const Navbar = ({ setSidebarOpen }) => {

  const { theme, toggleTheme } =
    useTheme();

  return (

    <nav className="h-20 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-6">

      {/* Left Side */}

      <div className="flex items-center gap-3">

        <button
          onClick={() =>
            setSidebarOpen(true)
          }
          className="
          lg:hidden
          p-2
          rounded-xl
          bg-slate-900
          "
        >
          <Menu size={20} />
        </button>

        <div>

          <h2 className="text-2xl font-bold">
            Dashboard
          </h2>

          <p className="text-slate-400 text-sm">
            Welcome back 👋
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-4">

        <div className="hidden md:flex items-center bg-slate-900 rounded-xl px-4 py-2">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none ml-2"
          />

        </div>

        {/* Theme Toggle */}

        <div className="flex items-center gap-2">

          <button
            onClick={toggleTheme}
            className="
            p-3
            rounded-xl
            bg-slate-900
            hover:bg-slate-800
            transition
            "
          >
            {
              theme === "dark"
                ? <Sun size={18} />
                : <Moon size={18} />
            }
          </button>

          <span className="hidden md:block text-sm text-slate-400">

            {
              theme === "dark"
                ? "☀️ Light"
                : "🌙 Dark"
            }

          </span>

        </div>

        {/* Notification */}

        <button className="bg-slate-900 p-3 rounded-xl">

          <Bell size={18} />

        </button>

        {/* Profile */}

        <img
          src="https://i.pravatar.cc/150?img=5"
          alt="profile"
          className="
          w-12
          h-12
          rounded-full
          border-2
          border-indigo-500
          "
        />

      </div>

    </nav>

  );
};

export default Navbar;