import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  getTrends,
  getTrendStats,
} from "../../api/trendApi";

import {
  TrendingUp,
  Briefcase,
  DollarSign,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Trends = () => {
  const [trends, setTrends] =
    useState([]);

  const [stats, setStats] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {

      const trendRes =
        await getTrends();

      const statRes =
        await getTrendStats();

      setTrends(
        trendRes.data || []
      );

      setStats(
        statRes.data || []
      );

    } catch (error) {
      toast.error(
        "Failed to load trends"
      );
    } finally {
      setLoading(false);
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
            Career Trends
          </h1>

          <p className="text-slate-400 mt-2">
            Explore high-demand careers and
            market opportunities.
          </p>

        </div>

        {/* Hero */}

        <div className="bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-3xl p-8 mb-8">

          <h2 className="text-3xl font-bold">
            Future Career Insights 📈
          </h2>

          <p className="mt-3 text-white/80">
            AI-driven analysis of trending
            technologies and careers.
          </p>

        </div>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <TrendingUp
              className="text-green-400"
              size={40}
            />

            <h3 className="mt-4 text-slate-400">
              Trending Careers
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {trends.length}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <Briefcase
              className="text-indigo-400"
              size={40}
            />

            <h3 className="mt-4 text-slate-400">
              Opportunities
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              100+
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <DollarSign
              className="text-yellow-400"
              size={40}
            />

            <h3 className="mt-4 text-slate-400">
              Avg Growth
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              25%
            </h2>

          </div>

        </div>

        {/* Chart */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Career Demand Analysis
          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart data={stats}>

                <XAxis dataKey="career" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="count"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Trending Careers */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {trends.map(
            (career, index) => (
              <div
                key={index}
                className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-6
                hover:border-cyan-500
                transition
                "
              >

                <h3 className="text-2xl font-bold">
                  {career}
                </h3>

                <p className="text-slate-400 mt-3">
                  High demand career path with
                  strong future growth.
                </p>

                <div className="mt-6">

                  <span
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-500/20
                    text-cyan-400
                    "
                  >
                    Trending
                  </span>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Trends;