import { zfd } from "zod-form-data";
import { z } from "zod";

export const contactSchema = zfd.formData({
	name: zfd.text(z.string().min(1, "Please enter your name")),
	email: zfd.text(
		z
			.string()
			.min(1, "Please enter your email")
			.email("Please enter a valid email")
	),
	messageFromUser: zfd.text(z.string().min(1, "Please leave a message")),
});
1;
