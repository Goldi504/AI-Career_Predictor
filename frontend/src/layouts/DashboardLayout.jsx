// // import { useState } from "react";
// // import Navbar from "../components/navbar/Navbar";
// // import Sidebar from "../components/sidebar/Sidebar";

// // const DashboardLayout = ({ children }) => {
// //   const [sidebarOpen, setSidebarOpen] =
// //     useState(false);

// //   return (
// //     <div className="flex">

// //       <div className="hidden lg:block">
// //         <Sidebar />
// //       </div>

// //       <div className="flex-1">

// //         <Navbar
// //           toggleSidebar={() =>
// //             setSidebarOpen(!sidebarOpen)
// //           }
// //         />

// //         <main className="p-6">
// //           {children}
// //         </main>

// //       </div>
// //     </div>
// //   );
// // };

// export default DashboardLayout;
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // <div className="flex bg-slate-950 text-white min-h-screen">
  <div className="flex min-h-screen bg-[var(--bg)] text-[var(--text)] transition-all">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {/* Mobile Sidebar */}
      {sidebarOpen && (

        <div
          className="
          fixed
          inset-0
          z-50
          bg-black/50
          lg:hidden
          "
          onClick={() =>
            setSidebarOpen(false)
          }
        >

          <div
            className="
            w-72
            h-full
            bg-slate-950
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <Sidebar />

          </div>

        </div>

      )}


      {/* Main Section */}
      <div className="flex flex-col flex-1 min-h-screen">

        <Navbar  setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </div>

    </div>
  );
};

export default DashboardLayout;