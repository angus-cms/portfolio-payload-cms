import { CollectionConfig } from 'payload/types'

const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      admin: {
        description: 'Name of this skill',
      },
    },
    {
      name: 'category',
      label: 'Skill Category',
      type: 'relationship',
      relationTo: ['skill-categories'],
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Light mode',
          fields: [
            {
              name: 'logo',
              label: 'Logo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          label: 'Dark mode',
          fields: [
            {
              name: 'logo_dark_mode',
              label: 'Logo for dark mode',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'A logo that will be visible on a darker background',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default Skills
