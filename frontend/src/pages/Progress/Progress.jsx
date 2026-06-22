import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";
import { getProgress } from "../../api/progressApi";

import {
  CheckCircle2,
  Trophy,
  Target,
} from "lucide-react";

const Progress = () => {
  const [loading, setLoading] =
    useState(true);

  const [progressData, setProgressData] =
    useState([]);

  const [stats, setStats] =
    useState({
      progress: 0,
      totalTopics: 0,
      completedTopics: 0,
    });

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const res =
        await getProgress();

      console.log(
        "PROGRESS RESPONSE =>",
        res.data
      );

      const progressInfo =
        res.data?.data;

      setStats({
        progress:
          progressInfo?.progress || 0,

        totalTopics:
          progressInfo?.totalTopics || 0,

        completedTopics:
          progressInfo?.completedTopics || 0,
      });

      setProgressData(
        progressInfo?.data || []
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to load progress"
      );

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          Loading Progress...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Learning Progress
          </h1>

          <p className="text-slate-400 mt-2">
            Track completed roadmap topics.
          </p>

        </div>

        {/* Hero */}

        <div
          className="
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          rounded-3xl
          p-8
          mb-8
          "
        >

          <h2 className="text-3xl font-bold">
            Progress Tracker 🚀
          </h2>

          <p className="mt-2 text-indigo-100">
            Complete roadmap topics and improve your skills.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

            <Target className="text-indigo-400" />

            <h3 className="mt-4 text-slate-400">
              Total Topics
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {stats.totalTopics}
            </h2>

          </div>

          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

            <CheckCircle2 className="text-green-400" />

            <h3 className="mt-4 text-slate-400">
              Completed
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {stats.completedTopics}
            </h2>

          </div>

          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

            <Trophy className="text-yellow-400" />

            <h3 className="mt-4 text-slate-400">
              Progress
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {stats.progress}%
            </h2>

          </div>

        </div>

        {/* Progress Bar */}

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 mb-8">

          <h3 className="font-semibold mb-4">
            Overall Completion
          </h3>

          <div className="w-full h-4 bg-slate-800 rounded-full">

            <div
              className="
              h-4
              bg-gradient-to-r
              from-green-500
              to-emerald-400
              rounded-full
              "
              style={{
                width: `${stats.progress}%`,
              }}
            />

          </div>

        </div>

        {/* Completed Topics */}

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Completed Topics
          </h2>

          {
            progressData.length === 0 ? (

              <div className="text-center py-10 text-slate-400">
                No topics completed yet 🚀
              </div>

            ) : (

              <div className="space-y-4">

                {progressData.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="
                      flex
                      flex-col
                      md:flex-row
                      justify-between
                      items-center
                      gap-4
                      bg-slate-800
                      rounded-2xl
                      p-5
                      "
                    >

                      <div>

                        <h3 className="font-semibold text-lg">
                          {item.topic}
                        </h3>

                        <p className="text-slate-400 text-sm">
                          {item.skill}
                        </p>

                      </div>

                      <span className="text-green-400 font-semibold">
                        ✅ Completed
                      </span>

                    </div>

                  )
                )}

              </div>

            )
          }

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Progress;