import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const contactSchemaBE = zfd.formData({
	name: zfd.text(z.string().min(1, 'Please enter your name')),
	email: zfd.text(
		z
			.string()
			.min(1, 'Please enter your email')
			.email('Please enter a valid email')
	),
	messageFromUser: zfd.text(z.string().min(1, 'Please leave a message')),
});

export const contactSchemaFE = z.object({
	name: z.string().min(1, 'Please enter your name').max(100),
	email: z
		.string()
		.min(1, 'Please enter your email')
		.email('Please enter a valid email'),
	messageFromUser: z.string().min(1, 'Please leave a message'),
});

export type Inputs = z.infer<typeof contactSchemaFE>;
