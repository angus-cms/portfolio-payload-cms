import { CollectionConfig } from 'payload/types'

const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
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
  ],
}

export default Skills
