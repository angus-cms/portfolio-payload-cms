import { CollectionConfig } from 'payload/types'
import { admins } from '../access/admins'
import { adminsOrPublished } from '../access/adminsOrPublished'

const Project: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'date_created',
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
    {
      name: 'images',
      label: 'Project Images',
      type: 'group',
      interfaceName: 'Images',
      fields: [
        {
          name: 'coverImage',
          label: 'Cover image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: "images",
          type: "array",
          label: "Other Images",
          minRows: 0,
          maxRows: 5,
          labels: {
            singular: "Image",
            plural: "Images",
          },
          fields: [
            {
                name: 'image',
                type: 'upload',
                relationTo: 'media',
                required: true,
            },
          ],
          admin: {
            components: {
              RowLabel: ({ data, index }) => {
                return data?.title || `Image ${String(index).padStart(2, "0")}`;
              },
            },
          },
        },
      ],
    },
  ],
}

export default Project
