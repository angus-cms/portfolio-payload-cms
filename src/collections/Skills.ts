import { CollectionConfig } from 'payload/types'
import { admins } from '../access/admins'

const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    update: admins,
    create: admins,
    delete: admins,
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
      name: 'show_on_homepage', // required
      type: 'checkbox', // required
      label: 'Show on homepage',
      defaultValue: true,
      admin: {
        description: 'Should this skill be shown on the homepage?',
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      label: 'Skill Category',
      type: 'relationship',
      maxDepth: 0,
      relationTo: ['skill-categories'],
      required: false,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Light mode',
          fields: [
            {
              name: 'icon',
              label: 'Icon',
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
              name: 'icon_dark_mode',
              label: 'Icon for dark mode',
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
