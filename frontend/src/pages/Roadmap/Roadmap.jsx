// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import DashboardLayout from "../../layouts/DashboardLayout";

// import {
//   CheckCircle2,
//   BookOpen,
// } from "lucide-react";

// import { getRoadmap } from "../../api/aiApi";
// import {
//   completeSkill,
//   getProgress,
// } from "../../api/progressApi";

// const Roadmap = () => {
//   const [roadmap, setRoadmap] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [
//     completedTopics,
//     setCompletedTopics,
//   ] = useState([]);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {

//       const roadmapRes =
//         await getRoadmap();

//       console.log(
//         "ROADMAP:",
//         roadmapRes.data
//       );

//       setRoadmap(
//         roadmapRes.data?.roadmap || []
//       );

//       const progressRes =
//         await getProgress();

//       const completed =
//         progressRes.data?.data
//           ?.filter(
//             (item) =>
//               item.completed
//           )
//           ?.map(
//             (item) =>
//               item.topic
//           ) || [];

//       setCompletedTopics(
//         completed
//       );

//     } catch (error) {

//       console.error(error);

//       toast.error(
//         "Failed to load roadmap"
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleComplete =
//     async (
//       skill,
//       topic
//     ) => {
//       try {

//         await completeSkill({
//           skill,
//           topic,
//         });

//         setCompletedTopics(
//           (prev) => [
//             ...prev,
//             topic,
//           ]
//         );

//         toast.success(
//           "Topic Completed"
//         );

//       } catch (error) {

//         console.error(error);

//         toast.error(
//           "Failed to update progress"
//         );
//       }
//     };

//   if (loading) {
//     return (
//       <DashboardLayout>
//         <div className="flex justify-center items-center min-h-[60vh]">
//           Loading Roadmap...
//         </div>
//       </DashboardLayout>
//     );
//   }

//   return (
//     <DashboardLayout>
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}

//         <div className="mb-10">

//           <h1 className="text-4xl font-bold">
//             AI Learning Roadmap
//           </h1>

//           <p className="text-slate-400 mt-2">
//             Complete topics and track
//             your progress.
//           </p>

//         </div>

//         {/* Hero */}

//         <div
//           className="
//           bg-gradient-to-r
//           from-indigo-600
//           to-purple-600
//           rounded-3xl
//           p-8
//           mb-8
//           "
//         >

//           <h2 className="text-4xl font-bold">
//             Career Growth Plan 🚀
//           </h2>

//           <p className="mt-3 text-indigo-100">
//             Learn missing skills one
//             by one.
//           </p>

//         </div>

//         {roadmap.length === 0 ? (

//           <div
//             className="
//             bg-slate-900
//             rounded-3xl
//             p-10
//             text-center
//             "
//           >

//             <BookOpen
//               size={60}
//               className="
//               mx-auto
//               text-indigo-400
//               "
//             />

//             <h3 className="text-2xl font-semibold mt-4">
//               No Roadmap Found
//             </h3>

//             <p className="text-slate-400 mt-2">
//               Generate Career Prediction
//               First
//             </p>

//           </div>

//         ) : (

//           <div className="space-y-6">

//             {roadmap.map(
//               (
//                 item,
//                 index
//               ) => (

//                 <div
//                   key={index}
//                   className="
//                   bg-slate-900
//                   border
//                   border-slate-800
//                   rounded-3xl
//                   p-6
//                   "
//                 >

//                   <div className="flex items-center gap-3">

//                     <CheckCircle2
//                       className="
//                       text-indigo-400
//                       "
//                     />

//                     <h2 className="text-2xl font-bold">
//                       {item.skill}
//                     </h2>

//                   </div>

//                   <div className="mt-6 space-y-3">

//                     {item.topics?.map(
//                       (
//                         topic,
//                         topicIndex
//                       ) => (

//                         <div
//                           key={topicIndex}
//                           className="
//                           flex
//                           flex-col
//                           md:flex-row
//                           justify-between
//                           items-center
//                           gap-3
//                           bg-slate-800
//                           p-4
//                           rounded-xl
//                           "
//                         >

//                           <span className="flex-1">
//                             {topic}
//                           </span>

//                           {completedTopics.includes(
//                             topic
//                           ) ? (

//                             <span
//                               className="
//                               text-green-400
//                               font-semibold
//                               "
//                             >
//                               ✅ Completed
//                             </span>

//                           ) : (

//                             <button
//                               onClick={() =>
//                                 handleComplete(
//                                   item.skill,
//                                   topic
//                                 )
//                               }
//                               className="
//                               bg-green-600
//                               hover:bg-green-700
//                               px-4
//                               py-2
//                               rounded-lg
//                               transition
//                               "
//                             >
//                               Complete Topic
//                             </button>

//                           )}

//                         </div>

//                       )
//                     )}

//                   </div>

//                 </div>

//               )
//             )}

//           </div>

//         )}

//       </div>
//     </DashboardLayout>
//   );
// };

// export default Roadmap;

{
  /* // import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import DashboardLayout from "../../layouts/DashboardLayout";

// import { */
}
{
  /* // CheckCircle2,
// BookOpen,
// } from "lucide-react";

// import { */
}
{
  /* // getRoadmap,
// } from "../../api/aiApi";

// import {
// completeSkill,
// } from "../../api/progressApi";

// const Roadmap = () => {

// const [roadmap, setRoadmap] =
// useState([]);

// const [loading, setLoading] =
// useState(true);

// const [completedTopics, setCompletedTopics] =
// useState([]);

// useEffect(() => {
// fetchRoadmap();
// }, []);

// const fetchRoadmap = async () => {

// try {

//   const res =
//     await getRoadmap();

//   console.log(
//     "ROADMAP RESPONSE:",
//     res.data
//   );

//   setRoadmap(
//     res.data?.data?.roadmap || []
//   );

// } catch (error) {

//   console.log(error);

//   toast.error(
//     "Failed to load roadmap"
//   );

// } finally {

//   setLoading(false);
// }

// };

// const handleComplete =
// async (topic) => {

//   try {

//     await completeSkill(
//       topic
//     );

//     setCompletedTopics(
//       (prev) => [
//         ...prev,
//         topic
//       ]
//     );

//     toast.success(
//       "Topic Completed"
//     );

//   } catch (error) {

//     console.log(error);

//     toast.error(
//       "Failed to update progress"
//     );
//   }
// };

// if (loading) {

// return (
//   <DashboardLayout>
//     <div className="flex justify-center items-center min-h-[60vh]">
//       Loading Roadmap...
//     </div>
//   </DashboardLayout>
// );

// }

// return (

// <DashboardLayout>
//   console.log(
//   JSON.stringify(
//     res.data.data.roadmap,
//     null,
//     2
//   )
// );

//   <div className="max-w-7xl mx-auto">

//     <div className="mb-10">

//       <h1 className="text-4xl font-bold">
//         AI Learning Roadmap
//       </h1>

//       <p className="text-slate-400 mt-2">
//         Complete topics and track your progress.
//       </p>

//     </div>

//     <div
//       className="
//       bg-gradient-to-r
//       from-indigo-600
//       to-purple-600
//       rounded-3xl
//       p-8
//       mb-8
//       "
//     >

//       <h2 className="text-4xl font-bold">
//         Career Growth Plan 🚀
//       </h2>

//       <p className="mt-3 text-indigo-100">
//         Learn missing skills one by one.
//       </p>

//     </div>

//     {roadmap.length === 0 ? (

//       <div
//         className="
//         bg-slate-900
//         rounded-3xl
//         p-10
//         text-center
//         "
//       >

//         <BookOpen
//           size={60}
//           className="
//           mx-auto
//           text-indigo-400
//           "
//         />

//         <h3 className="text-2xl font-semibold mt-4">
//           No Roadmap Found
//         </h3>

//         <p className="text-slate-400 mt-2">
//           Generate Career Prediction First
//         </p>

//       </div>

//     ) : (

//       <div className="space-y-6">

//         {roadmap.map(
//           (item, index) => (

//             <div
//               key={index}
//               className="
//               bg-slate-900
//               border
//               border-slate-800
//               rounded-3xl
//               p-6
//               "
//             >

//               <div className="flex items-center gap-3">

//                 <CheckCircle2
//                   className="
//                   text-indigo-400
//                   "
//                 />

//                 <h2 className="text-2xl font-bold">
//                   {item.week}
//                 </h2>

//               </div>

//               <p className="mt-4 text-slate-300">
//                 {item.topic}
//               </p>

//               {completedTopics.includes(
//                 item.topic
//               ) ? (

//                 <div
//                   className="
//                   mt-4
//                   text-green-400
//                   font-medium
//                   "
//                 >
//                   ✓ Completed
//                 </div>

//               ) : (

//                 <button
//                   onClick={() =>
//                     handleComplete(
//                       item.topic
//                     )
//                   }
//                   className="
//                   mt-4
//                   bg-green-600
//                   hover:bg-green-700
//                   px-5
//                   py-2
//                   rounded-lg
//                   transition
//                   "
//                 >
//                   Complete Topic
//                 </button>

//               )}

//             </div>
//           )
//         )}

//       </div>
//     )}

//   </div>

// </DashboardLayout>

// );
// };

// export default Roadmap; */
}

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import { CheckCircle2, BookOpen } from "lucide-react";

import { getRoadmap } from "../../api/aiApi";
import { completeSkill, getProgress } from "../../api/progressApi";

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState([]);

  const [loading, setLoading] = useState(true);

  const [completedTopics, setCompletedTopics] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const roadmapRes = await getRoadmap();

      console.log("ROADMAP RESPONSE =>", roadmapRes);

      setRoadmap(roadmapRes.roadmap || []);

      const progressRes = await getProgress();

      console.log("PROGRESS RESPONSE =>", progressRes);

      // const completed =
      //   progressRes.data?.data
      //     ?.filter((item) => item.completed)
      //     ?.map((item) => item.topic) || [];


      const progressArray =
  progressRes.data?.data?.data || [];

console.log(
  "PROGRESS ARRAY =>",
  progressArray
);

const completed =
  progressArray
    .filter(
      item => item.completed
    )
    .map(
      item => item.topic
    );

setCompletedTopics(
  completed
);

      setCompletedTopics(completed);
    } catch (error) {
      console.error("ROADMAP ERROR =>", error.response?.data || error.message);

      toast.error("Failed to load roadmap");
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = async (skill, topic) => {
    try {
      await completeSkill({
        skill,
        topic,
      });

      setCompletedTopics((prev) => [...prev, topic]);

      toast.success("Topic Completed 🎉");
    } catch (error) {
      console.error(error);

      toast.error("Failed to update progress");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-[60vh] text-xl">
          Loading Roadmap...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold">AI Learning Roadmap</h1>

          <p className="text-slate-400 mt-2">
            Complete topics and track your progress.
          </p>
        </div>

        {/* Hero Banner */}

        <div
          className="
          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-fuchsia-600
          rounded-3xl
          p-8
          mb-10
          shadow-xl
          "
        >
          <h2 className="text-4xl font-bold">Career Growth Plan 🚀</h2>

          <p className="mt-3 text-indigo-100 text-lg">
            Learn missing skills step by step and become job-ready.
          </p>
        </div>

        {/* Empty State */}

        {roadmap.length === 0 ? (
          <div
            className="
            bg-slate-900
            rounded-3xl
            p-12
            text-center
            border
            border-slate-800
            "
          >
            <BookOpen
              size={70}
              className="
              mx-auto
              text-indigo-500
              "
            />

            <h2 className="text-3xl font-bold mt-6">No Roadmap Found</h2>

            <p className="text-slate-400 mt-3">
              Generate Career Prediction first.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {roadmap.map((skillBlock, index) => (
              <div
                key={index}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  shadow-lg
                  "
              >
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2
                    className="
                      text-indigo-500
                      "
                  />

                  <h2 className="text-2xl font-bold">{skillBlock.skill}</h2>
                </div>

                <div className="space-y-4">
                  {skillBlock.topics?.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="
                          flex
                          flex-col
                          md:flex-row
                          justify-between
                          md:items-center
                          gap-4
                          bg-slate-800
                          rounded-2xl
                          p-5
                          "
                    >
                      <div>
                        <p className="text-slate-400">Topic {topicIndex + 1}</p>

                        <h3 className="text-lg font-semibold">{topic}</h3>
                      </div>

                      {completedTopics.includes(topic) ? (
                        <div
                          className="
                              px-4
                              py-2
                              rounded-xl
                              bg-green-500/20
                              text-green-400
                              font-semibold
                              "
                        >
                          ✓ Completed
                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            handleComplete(skillBlock.skill, topic)
                          }
                          className="
                              px-5
                              py-3
                              rounded-xl
                              bg-gradient-to-r
                              from-green-500
                              to-emerald-500
                              hover:scale-105
                              transition
                              font-medium
                              "
                        >
                          Complete Topic
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Roadmap;
