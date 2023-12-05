import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
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
        description: 'A slug name for this page',
        placeholder: 'E.g about',
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
