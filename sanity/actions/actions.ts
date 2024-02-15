"use server";

import { contactSchema } from "@/app/(site)/lib/validation";
import { ZodError } from "zod";
import { revalidatePath } from "next/cache";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const auth = process.env.SANITY_API_WRITE_TOKEN;

export type State =
	| {
			status: "success";
			message: string;
	  }
	| {
			status: "error";
			message: string;
			errors?: Array<{
				path: string;
				message: string;
			}>;
	  }
	| null;

export async function getFormData(
	prevState: State,
	data: FormData
): Promise<State> {
	try {
		const { name, email, messageFromUser } = contactSchema.parse(data);

		await fetch(
			`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`,
			{
				method: "POST",
				body: JSON.stringify({
					mutations: [
						{
							create: {
								_type: "contact",
								name,
								email,
								messageFromUser,
							},
						},
					],
				}),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth}`,
				},
			}
		);

		revalidatePath("/contact");

		return {
			status: "success",
			message: `Form submitted successfully!`,
		};
	} catch (e) {
		if (e instanceof ZodError) {
			return {
				status: "error",
				message: "Invalid form data.",
				errors: e.issues.map((issue) => ({
					path: issue.path.join("."),
					message: `Server validation: ${issue.message}`,
				})),
			};
		}
		return {
			status: "error",
			message: "Something went wrong. Please try again.",
		};
	}
}
