import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  getStreak,
  updateStreak,
} from "../../api/streakApi";

import {
  Flame,
  Trophy,
  CalendarDays,
  Award,
} from "lucide-react";

const Streak = () => {

  const [streakData, setStreakData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadStreak();
  }, []);

  const loadStreak = async () => {
    try {
      const res =
        await getStreak();

      setStreakData(res.data);

    } catch (error) {
      toast.error(
        "Failed to load streak"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate =
    async () => {
      try {

        const res =
          await updateStreak();

        toast.success(
          res.message
        );

        loadStreak();

      } catch (error) {
        toast.error(
          "Failed to update streak"
        );
      }
    };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          Loading...
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
            Daily Streak
          </h1>

          <p className="text-slate-400 mt-2">
            Stay consistent and keep learning.
          </p>

        </div>

        {/* Hero */}

        <div
          className="
          bg-gradient-to-r
          from-orange-500
          via-red-500
          to-pink-500
          rounded-3xl
          p-8
          mb-8
          "
        >

          <h2 className="text-3xl font-bold">
            Keep Your Streak Alive 🔥
          </h2>

          <p className="mt-3 text-white/80">
            Complete tasks every day and
            maintain your learning momentum.
          </p>

          <button
            onClick={handleUpdate}
            className="
            mt-6
            px-8
            py-3
            bg-white
            text-black
            rounded-2xl
            font-semibold
            hover:scale-105
            transition
            "
          >
            Mark Today's Activity
          </button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <Flame
              className="text-orange-400"
              size={40}
            />

            <h3 className="text-slate-400 mt-4">
              Current Streak
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {streakData?.current || 0}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <Trophy
              className="text-yellow-400"
              size={40}
            />

            <h3 className="text-slate-400 mt-4">
              Longest Streak
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {streakData?.longest || 0}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <CalendarDays
              className="text-indigo-400"
              size={40}
            />

            <h3 className="text-slate-400 mt-4">
              Last Activity
            </h3>

            <h2 className="text-lg font-semibold mt-2">
              {streakData?.lastActivity
                ? new Date(
                    streakData.lastActivity
                  ).toLocaleDateString()
                : "No Activity"}
            </h2>

          </div>

        </div>

        {/* Achievement Section */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Achievement Badges
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-slate-800 rounded-2xl p-6 text-center">

              <Award
                className="mx-auto text-green-400"
                size={40}
              />

              <h3 className="mt-3 font-semibold">
                3 Days
              </h3>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">

              <Award
                className="mx-auto text-blue-400"
                size={40}
              />

              <h3 className="mt-3 font-semibold">
                7 Days
              </h3>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">

              <Award
                className="mx-auto text-purple-400"
                size={40}
              />

              <h3 className="mt-3 font-semibold">
                15 Days
              </h3>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">

              <Award
                className="mx-auto text-yellow-400"
                size={40}
              />

              <h3 className="mt-3 font-semibold">
                30 Days
              </h3>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Streak;