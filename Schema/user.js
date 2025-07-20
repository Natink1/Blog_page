import * as z from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.email().min(6),
});
