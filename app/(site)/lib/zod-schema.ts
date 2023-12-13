import * as z from "zod";

export const contactSchema = z.object({
	name: z.string().min(1, "Username is required").max(100),
	email: z.string().email("Invalid email").min(1, "Email is required"),
	message: z.string().min(1, "Message is required"),
});

export type Contact = z.infer<typeof contactSchema>;
