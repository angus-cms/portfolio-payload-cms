import { CollectionConfig } from 'payload/types'

const SkillSection: CollectionConfig = {
  slug: 'skillSection',
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

export default SkillSection
