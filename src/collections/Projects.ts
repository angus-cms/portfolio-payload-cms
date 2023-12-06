import { CollectionConfig } from 'payload/types'
import { admins } from '../access/admins'
import { adminsOrPublished } from '../access/adminsOrPublished'

const Projects: CollectionConfig = {
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
      name: 'coming_soon', // required
      type: 'checkbox', // required
      label: 'Coming soon',
      defaultValue: false,
      admin: {
        description: 'Is this project coming soon?',
        position: 'sidebar',
      },
    },
    {
      name: 'date_created',
      label: 'Created at',
      type: 'date',
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
        description: 'A short description of the project for card display',
      },
    },
    {
      name: 'medium_description',
      label: 'Medium description',
      type: 'textarea',
      admin: {
        description: 'A medium description of the project at the top of the project page',
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
          name: 'cover_image',
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
    {
      name: 'links',
      label: 'Links for project',
      type: 'group',
      interfaceName: 'Links',
      admin: {
        position: "sidebar"
      },
      fields: [
        {
          name: 'git_link',
          label: 'Github Link',
          type: 'text', 
        },
        {
          name: 'web_link',
          label: 'Website Link',
          type: 'text', 
        },
      ]
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: ['tags'],
      hasMany: true,
      admin: {
        description: 'Select tags for this project',
        position: 'sidebar'
      }
    },
    {
      name: 'stack',
      type: 'relationship',
      relationTo: ['skills'],
      hasMany: true,
      admin: {
        description: 'Select the skills used to develop this project'
      }
    },
  ],
}

export default Projects
