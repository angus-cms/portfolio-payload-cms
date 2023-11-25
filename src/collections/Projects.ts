import { CollectionConfig } from 'payload/types'

const Project: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'createdAt',
      label: 'Created at',
      type: 'date',
      required: true,
      admin: {
        description: 'Date when the project was created',
        position: 'sidebar',
      },
    },
    {
      name: 'short_description',
      label: 'Short description',
      type: 'text',
      required: true,
      admin: {
        description: 'A short description of the project',
      },
    },
    {
      name: 'long_description',
      label: 'Long description',
      type: 'richText',
      admin: {
        description: 'A more detailed description of the project',
      },
    },
  ],
}

export default Project
