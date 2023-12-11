import payload from 'payload';
import { CollectionConfig, } from 'payload/types';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      admin: {
        description: 'A name for a this tag',
        placeholder: 'E.g Web'
      },
    },
  ],
  
}

export default Tags
