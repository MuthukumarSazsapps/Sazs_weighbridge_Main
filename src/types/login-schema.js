import { message } from "../config/message";
import { z } from 'zod';


export const loginSchema = z.object({
    name: z.string().min(1,{message:message.nameIsRequired}),
    password: z.string().min(1,{message:message.passwordIsRequired}),
    rememberMe: z.boolean().optional(),
  });
  
  export const loginDefaultValues = {
    name: '',
    password: '',
    rememberMe: true,
  };