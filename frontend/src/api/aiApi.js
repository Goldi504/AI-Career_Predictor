import api from "./axios";

// export const predictCareer =
// async()=>{

//     const response =
//     await api.post(
//         "/ai/predict-career"
//     );

//     return response.data;
// };

export const analyzeProfile =
  async () => {
    const res =
      await api.post(
        "/ai/analyze-profile"
      );

    return res.data;
  };

export const getPredictionResult =
async()=>{

    const response =
    await api.get(
        "/ai/result"
    );

    return response.data;
};

export const getSkillGap = async () => {
  const response = await api.get(
    "/ai/skill-gap"
  );

  return response.data;
};

export const getRoadmap = async () => {
  const response = await api.get("/ai/roadmap");
  return response.data;
};