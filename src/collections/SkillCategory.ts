import { CollectionConfig } from 'payload/types'

const SkillCategory: CollectionConfig = {
  slug: 'skillCategory',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      admin: {
        description: 'A name for a group of skills',
        placeholder: 'E.g Front end'
      },
    },
  ],
}

export default SkillCategory
