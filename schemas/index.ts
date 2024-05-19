import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email format is incorrect" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email format is incorrect" }),
  password: z
    .string()
    .min(6, { message: "Password should atleast be 6 digits long." }),
});
