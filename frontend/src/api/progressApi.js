import api from "./axios";

// export const getProgress = async () => {
//   const response = await api.get("/progress");
//   return response.data;
// };

export const getProgress = () =>
  api.get("/progress");

export const completeSkill = (
  data
) =>
  api.post(
    "/progress/complete",
    data
  );

// export const completeSkill = async (skill) => {
//   const response = await api.patch(
//     "/progress/complete-skill",
//     {
//       skill,
//     }
//   );

//   return response.data;
// };

// import axiosInstance from "./axios";

// export const completeTopic =
//   async (skill, topic) => {

//     const res =
//       await axiosInstance.post(
//         "/progress/complete-topic",
//         {
//           skill,
//           topic
//         }
//       );

//     return res.data;
//   };

// export const getTopicProgress =
//   async () => {

//     const res =
//       await axiosInstance.get(
//         "/progress/topic-progress"
//       );

//     return res.data;
//   };