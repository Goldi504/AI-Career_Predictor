import {
//  GithubIcon,
// Linkedin,
  Mail,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}

          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              CareerAI
            </h2>

            <p className="text-slate-400 mt-2 text-sm">
              AI Powered Career Guidance & Learning Platform
            </p>
          </div>

          {/* Center */}

          <div className="flex gap-6 text-slate-400">

            <a
              href="#"
              className="hover:text-indigo-400 transition"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="hover:text-indigo-400 transition"
            >
              Roadmap
            </a>

            <a
              href="#"
              className="hover:text-indigo-400 transition"
            >
              Progress
            </a>

            <a
              href="#"
              className="hover:text-indigo-400 transition"
            >
              Profile
            </a>

          </div>

          {/* Right */}

          <div className="flex gap-4">

            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 hover:bg-indigo-600 transition"
            >
              <GithubIcon size={20} />
            </a> */}

            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 hover:bg-indigo-600 transition"
            >
              <Linkedin size={18} />
            </a> */}

            <a
              href="mailto:test@gmail.com"
              className="p-3 rounded-xl bg-slate-900 hover:bg-indigo-600 transition"
            >
              <Mail size={18} />
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-slate-500 text-sm">
            © 2026 CareerAI. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-slate-500 text-sm">

            Made with
            <Heart
              size={14}
              className="text-red-500"
              fill="currentColor"
            />
            by Goldi Kumari

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;