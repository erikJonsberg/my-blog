import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import StudioNavbar from "./sanity/components/studio-navbar";
import StudioLogo from "./sanity/components/studio-logo";
import { myTheme } from "./sanity/components/theme";
import { defaultDocumentNode } from "./sanity/desk/default-document-node";

export default defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	schema,
	plugins: [
		deskTool({ defaultDocumentNode }),
		visionTool({ defaultApiVersion: apiVersion }),
		unsplashImageAsset(),
		codeInput(),
	],
	studio: {
		components: {
			navbar: StudioNavbar,
			logo: StudioLogo,
		},
	},
	theme: myTheme,
});
