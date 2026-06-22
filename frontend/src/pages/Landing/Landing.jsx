import { Link } from "react-router-dom";
import {
  Brain,
  FileText,
  TrendingUp,
  Route,
  ArrowRight,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-16 py-6">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          CareerAI
        </h1>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <div className="inline-block bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full mb-6">
              AI Powered Career Guidance
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">

              Discover Your
              <span className="block text-indigo-500">
                Perfect Career Path
              </span>

            </h1>

            <p className="text-slate-400 text-lg mt-6 leading-relaxed">

              Upload your resume, analyze your skills,
              identify skill gaps, get career predictions,
              and receive a personalized roadmap powered by AI.

            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-700 px-7 py-4 rounded-2xl flex items-center gap-2 transition"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="border border-slate-700 hover:bg-slate-800 px-7 py-4 rounded-2xl transition"
              >
                Login
              </Link>

            </div>

          </div>

          {/* Hero Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="space-y-6">

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">
                  Predicted Career
                </p>
                <h2 className="text-2xl font-bold mt-2">
                  AI Engineer
                </h2>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">
                  Career Match Score
                </p>
                <h2 className="text-2xl font-bold mt-2">
                  92%
                </h2>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-slate-400">
                  Missing Skills
                </p>
                <h2 className="text-2xl font-bold mt-2">
                  Docker, AWS
                </h2>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <FileText className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold">
              Resume Analysis
            </h3>
            <p className="text-slate-400 mt-3">
              Extract skills and identify improvement areas.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <Brain className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold">
              Career Prediction
            </h3>
            <p className="text-slate-400 mt-3">
              AI predicts the best career path for you.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <TrendingUp className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold">
              Skill Gap Analysis
            </h3>
            <p className="text-slate-400 mt-3">
              Discover missing skills required in industry.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <Route className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold">
              Roadmap Generator
            </h3>
            <p className="text-slate-400 mt-3">
              Personalized roadmap to achieve your goals.
            </p>
          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-indigo-500">
              10K+
            </h2>
            <p className="text-slate-400 mt-2">
              Students
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-indigo-500">
              95%
            </h2>
            <p className="text-slate-400 mt-2">
              Prediction Accuracy
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-indigo-500">
              500+
            </h2>
            <p className="text-slate-400 mt-2">
              Career Paths
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">

        <h2 className="text-4xl font-bold">
          Ready To Build Your Future?
        </h2>

        <p className="text-slate-400 mt-4">
          Start your AI-powered career journey today.
        </p>

        <Link
          to="/register"
          className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-2xl transition"
        >
          Start Now
        </Link>

      </section>

    </div>
  );
};

export default Landing;