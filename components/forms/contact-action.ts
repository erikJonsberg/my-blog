"use server";

import { ZodError } from "zod";
import { contactSchema, Inputs } from "../../lib/validation-schema";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const auth = process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN;

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

export async function contactAction(
	prevState: State,
	data: Inputs
): Promise<State> {
	try {
		const { name, email, message } = contactSchema.parse(data);

		const response = await fetch(
			`https:${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`,
			{
				method: "POST",
				body: JSON.stringify({
					mutations: [
						{
							create: {
								_type: "contact",
								email,
								name,
								message,
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

		if (!response.ok) {
			throw new Error("Network response was not ok");
		} else {
			return { status: "success", message: "Thank you for your message!" };
		}
	} catch (error) {
		if (error instanceof ZodError) {
			return {
				status: "error",
				message: "Invalid form data.",
				errors: error.issues.map((issue) => ({
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
