import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Displayed in the tab',
        placeholder: 'E.g About - Angus',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      admin: {
        description: 'Displayed on the page itself',
        placeholder: 'E.g Welcome to the about page',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
  ],
}

export default Pages
