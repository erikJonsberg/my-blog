import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { codeInput } from '@sanity/code-input';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { presentationTool } from 'sanity/presentation';
import { locate } from '@/sanity/components/locate';

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	schema,
	plugins: [
		structureTool(),
		visionTool({ defaultApiVersion: apiVersion }),
		unsplashImageAsset(),
		codeInput(),
		presentationTool({
			locate,
			previewUrl: {
				draftMode: {
					enable: '/api/draft',
				},
			},
		}),
	],
});
