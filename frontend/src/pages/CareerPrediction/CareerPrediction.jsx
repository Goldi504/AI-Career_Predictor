// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import DashboardLayout from "../../layouts/DashboardLayout";

// import {
//   predictCareer,
//   getPredictionResult
// } from "../../api/aiApi";

// const CareerPrediction = () => {

//   const [loading,setLoading] =
//   useState(false);

//   const [career,setCareer] =
//   useState(null);

//   useEffect(()=>{

//     loadPrediction();

//   },[]);

//   const loadPrediction =
//   async()=>{

//     try{

//       const res =
//       await getPredictionResult();

//       setCareer(
//         res.data
//       );

//     }catch(error){

//       console.log(error);

//     }

//   };

//   const handlePrediction =
//   async()=>{

//     try{

//       setLoading(true);

//       const res =
//       await predictCareer();

//       toast.success(
//         res.message
//       );

//       await loadPrediction();

//     }catch(error){

//       toast.error(
//         error.response?.data?.message ||
//         "Prediction Failed"
//       );

//     }finally{

//       setLoading(false);

//     }

//   };

//   return (

//     <DashboardLayout>

//       <div className="max-w-6xl mx-auto">

//         {/* Header */}

//         <div className="mb-8">

//           <h1 className="text-4xl font-bold">
//             Career Prediction
//           </h1>

//           <p className="text-slate-400 mt-2">
//             Let AI predict your ideal career path.
//           </p>

//         </div>

//         {/* Hero Card */}

//         <div className="
//         bg-gradient-to-r
//         from-indigo-600
//         to-purple-600
//         rounded-3xl
//         p-8
//         ">

//           <h2 className="text-3xl font-bold">
//             Discover Your Future Career 🚀
//           </h2>

//           <p className="mt-3 text-indigo-100">
//             Based on your profile,
//             resume and skills.
//           </p>

//           <button

//           onClick={handlePrediction}

//           className="
//           mt-6
//           px-8
//           py-4
//           bg-white
//           text-black
//           rounded-2xl
//           font-semibold
//           "
//           >

//             {
//               loading
//               ?
//               "Analyzing..."
//               :
//               "Predict Career"
//             }

//           </button>

//         </div>

//         {/* Result */}

//         {
//           career &&
//           (
//             <div className="
//             grid
//             lg:grid-cols-2
//             gap-6
//             mt-8
//             ">

//               <div className="
//               bg-slate-900
//               border
//               border-slate-800
//               rounded-3xl
//               p-8
//               ">

//                 <h3 className="text-slate-400">
//                   Predicted Career
//                 </h3>

//                 <h2 className="
//                 text-4xl
//                 font-bold
//                 mt-4
//                 text-indigo-400
//                 ">
//                   {
//                     career.predictedCareer
//                   }
//                 </h2>

//               </div>

//               <div className="
//               bg-slate-900
//               border
//               border-slate-800
//               rounded-3xl
//               p-8
//               ">

//                 <h3 className="text-slate-400">
//                   Career Match Score
//                 </h3>

//                 <h2 className="
//                 text-4xl
//                 font-bold
//                 mt-4
//                 text-green-400
//                 ">
//                   {
//                     career.careerMatchScore
//                   }%
//                 </h2>

//               </div>

//             </div>
//           )
//         }

//       </div>

//     </DashboardLayout>

//   );
// };

// export default CareerPrediction;



import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  analyzeProfile,
  getPredictionResult,
} from "../../api/aiApi";

const CareerPrediction = () => {
  const [loading, setLoading] =
    useState(false);

  const [career, setCareer] =
    useState(null);

  useEffect(() => {
    loadPrediction();
  }, []);

  const loadPrediction =
    async () => {
      try {
        const res =
          await getPredictionResult();

        setCareer(res.data);

      } catch (error) {
        console.log(error);
      }
    };

  const handlePrediction =
    async () => {
      try {
        setLoading(true);

        const res =
          await analyzeProfile();

        toast.success(
          res.message
        );

        await loadPrediction();

      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Analysis Failed"
        );

      } finally {
        setLoading(false);
      }
    };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Career Prediction
          </h1>

          <p className="text-slate-400 mt-2">
            Let AI analyze your profile
            and predict your career.
          </p>
        </div>

        <div
          className="
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          rounded-3xl
          p-8
          "
        >
          <h2 className="text-3xl font-bold">
            Discover Your Future Career 🚀
          </h2>

          <p className="mt-3 text-indigo-100">
            Based on your profile
            skills and experience.
          </p>

          <button
            onClick={
              handlePrediction
            }
            className="
            mt-6
            px-8
            py-4
            bg-white
            text-black
            rounded-2xl
            font-semibold
            "
          >
            {loading
              ? "Analyzing..."
              : "Analyze Profile"}
          </button>
        </div>

        {career && (
          <div
            className="
            grid
            lg:grid-cols-2
            gap-6
            mt-8
            "
          >
            <div
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-8
              "
            >
              <h3 className="text-slate-400">
                Predicted Career
              </h3>

              <h2
                className="
                text-4xl
                font-bold
                mt-4
                text-indigo-400
                "
              >
                {
                  career.predictedCareer
                }
              </h2>
            </div>

            <div
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-8
              "
            >
              <h3 className="text-slate-400">
                Career Match Score
              </h3>

              <h2
                className="
                text-4xl
                font-bold
                mt-4
                text-green-400
                "
              >
                {
                  career.careerMatchScore
                }
                %
              </h2>
            </div>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default CareerPrediction;