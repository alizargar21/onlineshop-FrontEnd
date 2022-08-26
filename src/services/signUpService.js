import http from "./httpServices";

const signupUser =  (data) => {
  return http.post("/user/register", data);
};

export default signupUser;
