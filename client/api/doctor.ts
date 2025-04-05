import apiClient from "./apiClient";

export const getAllDoctor = async () => {
  try {
    const doctors = await apiClient.get("/doctors");
    console.log(doctors);
  } catch (e) {
    console.error(e);
  }
};
