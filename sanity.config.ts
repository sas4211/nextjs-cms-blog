import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './sanity/schema'
import {apiVersion} from './sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId: '2jygd996',
  dataset: 'production',
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    visionTool({defaultApiVersion: apiVersion}),
    structureTool(),
    ],
})


