"use server";

import { contactSchema } from "../../lib/zod-schema";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const auth = process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN;

export default async function postToSanity(data: any) {
	try {
		const result = contactSchema.safeParse(data.request.json());
		if (!result.success) {
			console.log("error");
			return;
		}
		const response = await fetch(
			`https:${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`,
			{
				method: "POST",
				body: JSON.stringify({
					mutations: [
						{
							create: {
								_type: "contact",
								email: data.email,
								name: data.name,
								message: data.message,
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

		console.log(response);

		if (response.ok) {
			console.log("success");
			const data = await response.json();
		}
	} catch (error) {
		console.log("error");
	}
}
