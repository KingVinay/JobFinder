import axios from "axios";
const backendUrl = `${process.env.REACT_APP_BACKEND_URL}/job`;

export const createJobPost = async (jobPostPayload) => {
  try {
    const reqUrl = `${backendUrl}/create`;
    const token = JSON.parse(localStorage.getItem("token"));
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.post(reqUrl, jobPostPayload);
  } catch (error) {
    return error.response.data;
  }
};

export const jobPostDetailsById = async (jobId) => {
  try {
    const reqUrl = `${backendUrl}/job-details/${jobId}`;
    const response = await axios.get(reqUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

export const updateJobPostById = async (jobPostId, updatedFormData) => {
  try {
    const reqUrl = `${backendUrl}/update/${jobPostId}`;
    const token = JSON.parse(localStorage.getItem("token"));
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(reqUrl, updatedFormData);
    return response?.data;
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

export const getAllJobs = async (filter) => {
  try {
    const reqUrl = `${backendUrl}/all?searchQuery=${
      filter?.title || ""
    }&skills=${filter?.skills || ""}`;
    const response = await axios.get(reqUrl);
    return response?.data?.jobList;
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
