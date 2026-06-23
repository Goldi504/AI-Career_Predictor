import api from "./axios";

export const getProgress = () =>
  api.get("/progress");

export const completeSkill = (
  data
) =>
  api.post(
    "/progress/complete",
    data
  );


