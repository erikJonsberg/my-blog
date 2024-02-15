import { createClient, type QueryOptions, type QueryParams } from "next-sanity";
import { draftMode } from "next/headers";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
	perspective: "published",
	stega: {
		enabled: false,
		studioUrl: "/studio",
	},
});
