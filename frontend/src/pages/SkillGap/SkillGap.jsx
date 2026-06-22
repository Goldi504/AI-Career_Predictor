import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import {getSkillGap,} from "../../api/aiApi";

const SkillGap = () => {

  const [loading, setLoading] =
    useState(true);

  const [skillGap, setSkillGap] =
    useState(null);

  useEffect(() => {
    fetchSkillGap();
  }, []);

  const fetchSkillGap =
    async () => {
      try {
        const res =
          await getSkillGap();
              console.log("Skill Gap:", res);


        setSkillGap(res.data);
      } catch (error) {
            console.log(error.response?.data);

        toast.error(
          "Failed to load skill gap"
        );
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-20">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Skill Gap Analysis
          </h1>

          <p className="text-slate-400 mt-2">
            Identify missing skills and
            improve your career readiness.
          </p>

        </div>

        {/* Summary Card */}

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
            Career Readiness
          </h2>

          <p className="mt-2 text-indigo-100">
            Based on your profile and
            career prediction.
          </p>

          <div className="mt-6">

            <div className="w-full bg-white/20 rounded-full h-4">

              <div
                className="
                bg-green-400
                h-4
                rounded-full
                "
                style={{
                  width: `${skillGap?.matchScore || 60}%`,
                }}
              />

            </div>

            <p className="mt-2 font-semibold">
              {skillGap?.matchScore || 60}%
              Ready
            </p>

          </div>

        </div>

        {/* Skills Section */}

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Current Skills */}

          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-8
          "
          >

            <h3 className="text-2xl font-semibold mb-6">
              Current Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {skillGap?.currentSkills?.map(
                (skill, index) => (
                  <span
                    key={index}
                    className="
                    px-4 py-2
                    rounded-full
                    bg-green-500/20
                    text-green-400
                    "
                  >
                    {skill}
                  </span>
                )
              )}

            </div>

          </div>

          {/* Missing Skills */}

          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-8
          "
          >

            <h3 className="text-2xl font-semibold mb-6">
              Missing Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {skillGap?.missingSkills?.map(
                (skill, index) => (
                  <span
                    key={index}
                    className="
                    px-4 py-2
                    rounded-full
                    bg-red-500/20
                    text-red-400
                    "
                  >
                    {skill}
                  </span>
                )
              )}

            </div>

          </div>

        </div>

        {/* Recommendations */}

        <div
          className="
          mt-8
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-8
        "
        >

          <h3 className="text-2xl font-semibold mb-6">
            Recommended Learning Path
          </h3>

          <ul className="space-y-4">

            {skillGap?.missingSkills?.map(
              (skill, index) => (
                <li
                  key={index}
                  className="
                  bg-slate-800
                  rounded-xl
                  p-4
                  "
                >
                  Learn {skill}
                </li>
              )
            )}

          </ul>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default SkillGap;