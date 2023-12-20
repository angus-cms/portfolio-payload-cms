import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'

import Users from './collections/Users'
import Pages from './collections/Pages'
import Projects from './collections/Projects'
import SkillCategories from './collections/SkillCategories'
import Skills from './collections/Skills'
import Employment from './collections/Employment'
import Education from './collections/Education'
import FavouriteSection from './collections/FavouriteSection'
import Tags from './collections/Tags'

import Footer from './globals/Footer'

import { Media } from './collections/Media'


const generateTitle: GenerateTitle = () => {
  return 'My Website'
}

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  cors: '*', //TODO
  collections: [Users, Pages, Media, Projects, Employment, Education, SkillCategories, Skills, FavouriteSection, Tags],
  editor: lexicalEditor({}),
  globals: [Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    seo({
      collections: ['pages', 'projects'],
      generateTitle,
      uploadsCollection: 'media',
    }),
    payloadCloud()
    ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
