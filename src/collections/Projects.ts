import { CollectionConfig } from 'payload/types'
import { admins } from '../access/admins'
import { adminsOrPublished } from '../access/adminsOrPublished'
import payload from 'payload'
import { slateEditor } from '@payloadcms/richtext-slate'

import { Access } from 'payload/config'

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
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      admin: {
        description: 'A url safe slug',
        placeholder: 'E.g my-project',
      },
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
      editor: slateEditor({
        admin: {
          elements: [
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "link",
            "ol",
            "ul",
            "textAlign",
            "indent",
          ]
        }
      })
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
    {
      name: 'highlights',
      type: 'array',
      label: 'Highlights',
      minRows: 1,
      maxRows: 6,
      labels: {
        singular: 'Highlight',
        plural: 'Highlights',
      },
      fields: [
        {
          name: 'title',
          type: 'text'
        }
      ],
      admin: {
        description: 'List some highlights for this project'
      }
    },
  ],
  endpoints: [
    {
      path: "/slug/:slug",
      method: "get",
      handler: async (req, res, next) => {
        const data = await payload.find({
          collection: 'projects',
          where: {
            slug:{equals:req.params.slug},
            _status:{equals:'published'}
          },
          limit:1
        })
        if (data.docs.length === 0) {
          res.status(404).send({ error: "not found" });
        } else {
          res.status(200).send(data.docs[0]);
        }
      },
    },
  ],
}

export default Projects
