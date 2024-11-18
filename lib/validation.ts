import { z } from "zod";



const UserFormValidation = z.object({
    name: z.string()
        .max(20, "Maximum 20 Charecters allowed")
        .min(2, "Minimun 2 charecters required"),
    email: z.string()
        .email("Invalid email address"),
    phone: z.string()
        .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number'),
    userid: z.string()
})

export default UserFormValidation