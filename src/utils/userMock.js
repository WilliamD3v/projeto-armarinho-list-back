import dotenv from "dotenv";
dotenv.config();

export const getMockUser = () => {
  return {
    _id: "66a2f5c84a01c835cce6e984",
    name: "Admin",
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD,
  };
};
