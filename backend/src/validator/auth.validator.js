import  { z } from "zod";

const signupSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  countryName: z.string().min(1, "Country name is required"),
  countryCode: z.string().min(1, "Country code is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
  gender:z.enum(["male","female"],{message:"gender is required"})
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords doesn't match",
  path: ["confirmPassword"], // Field to attach the error message
});


const loginAuthentication=z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
}).refine(data=>data.email && data.password,{
    message:"Invalid email or password",
    path:["email","password"]
})
export  {signupSchema,loginAuthentication};
