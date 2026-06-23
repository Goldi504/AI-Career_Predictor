// import {
// //  GithubIcon,
// // Linkedin,
//   Mail,
//   Heart,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="mt-12 border-t border-slate-800 bg-slate-950">

//       <div className="max-w-7xl mx-auto px-6 py-8">

//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">

//           {/* Left */}

//           <div>
//             <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//               CareerAI
//             </h2>

//             <p className="text-slate-400 mt-2 text-sm">
//               AI Powered Career Guidance & Learning Platform
//             </p>
//           </div>

//           {/* Center */}

//           <div className="flex gap-6 text-slate-400">

//             <a
//               href="#"
//               className="hover:text-indigo-400 transition"
//             >
//               Dashboard
//             </a>

//             <a
//               href="#"
//               className="hover:text-indigo-400 transition"
//             >
//               Roadmap
//             </a>

//             <a
//               href="#"
//               className="hover:text-indigo-400 transition"
//             >
//               Progress
//             </a>

//             <a
//               href="#"
//               className="hover:text-indigo-400 transition"
//             >
//               Profile
//             </a>

//           </div>

//           {/* Right */}

//           <div className="flex gap-4">

//             {/* <a
//               href="https://github.com"
//               target="_blank"
//               rel="noreferrer"
//               className="p-3 rounded-xl bg-slate-900 hover:bg-indigo-600 transition"
//             >
//               <GithubIcon size={20} />
//             </a> */}

//             {/* <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               className="p-3 rounded-xl bg-slate-900 hover:bg-indigo-600 transition"
//             >
//               <Linkedin size={18} />
//             </a> */}

//             <a
//               href="mailto:test@gmail.com"
//               className="p-3 rounded-xl bg-slate-900 hover:bg-indigo-600 transition"
//             >
//               <Mail size={18} />
//             </a>

//           </div>

//         </div>

//         {/* Bottom */}

//         <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

//           <p className="text-slate-500 text-sm">
//             © 2026 CareerAI. All Rights Reserved.
//           </p>

//           <p className="flex items-center gap-2 text-slate-500 text-sm">

//             Made with
//             <Heart
//               size={14}
//               className="text-red-500"
//               fill="currentColor"
//             />
//             by Goldi Kumari

//           </p>

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-[#020b2d]">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-violet-500">
              CareerAI
            </h2>

            <p className="text-slate-400 mt-2 max-w-md">
              AI Powered Career Guidance & Learning Platform.
              Discover your ideal career path, track your progress,
              and learn the skills required to achieve your goals.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a
              href="/dashboard"
              className="hover:text-violet-400 transition"
            >
              Dashboard
            </a>

            <a
              href="/roadmap"
              className="hover:text-violet-400 transition"
            >
              Roadmap
            </a>

            <a
              href="/progress"
              className="hover:text-violet-400 transition"
            >
              Progress
            </a>

            <a
              href="/profile"
              className="hover:text-violet-400 transition"
            >
              Profile
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            {/* GitHub */}
            {/* <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300"
            >
              <GitHub size={22} className="text-white" />
            </a>

            {/* LinkedIn */}
            {/* <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300"
            >
              <Linkedin size={22} className="text-white" />
            </a>

            {/* Email */}
            {/*<a
              href="mailto:yourmail@gmail.com"
              className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300"
            >
              <Mail size={22} className="text-white" />
            </a> */}
            <div className="flex items-center gap-4">

  <a
    href="https://github.com/your-github-username"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center"
  >
    <FaGithub size={22} className="text-white" />
  </a>

  <a
    href="https://linkedin.com/in/your-linkedin-username"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
  >
    <FaLinkedin size={22} className="text-white" />
  </a>

  <a
    href="mailto:yourmail@gmail.com"
    className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center"
  >
    <FaEnvelope size={22} className="text-white" />
  </a>

</div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">

          <p>
            © {new Date().getFullYear()} CareerAI. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with
            <Heart size={16} className="text-red-500 fill-red-500" />
            by Goldi Kumari
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;