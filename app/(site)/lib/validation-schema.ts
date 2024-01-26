import * as z from "zod";

export const contactSchema = z.object({
	name: z.string().min(1, "Your name is required").max(100),
	email: z
		.string()
		.min(1, "Your email is required")
		.email("Your email address is invalid"),
	message: z.string().min(1, "A message is required"),
});

export type Inputs = z.infer<typeof contactSchema>;
