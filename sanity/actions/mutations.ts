"use server";

import { contactSchema, Inputs } from "@/app/(site)/lib/validation-schema";
import { revalidatePath } from "next/cache";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const auth = process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN;

export async function addContact(
	prevState: {
		userMessage: string;
	},
	formData: FormData
) {
	const data = contactSchema.safeParse({
		email: formData.get("email"),
		name: formData.get("name"),
		message: formData.get("message"),
	});
	const mutations = [
		{
			create: {
				_type: "contact",
				data,
			},
		},
	];

	if (!data.success) {
		return { userMessage: "Something went wrong." };
	}
	try {
		fetch(
			`https://${projectId}.apisanity.io/v2021-06-07/data/mutate/${dataset}`,
			{
				method: "POST",
				body: JSON.stringify({ mutations }),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth}`,
				},
			}
		);
		return { userMessage: "Thank you for your message." };
	} catch (error) {
		return { userMessage: "Something went wrong." };
	}
}
