import payload from 'payload';
import { CollectionConfig } from 'payload/types';


const FavouriteSection: CollectionConfig = {
  slug: 'favourite-sections',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      admin: {
        description: 'A name for this section of favourites',
        placeholder: 'E.g Design tools'
      },
    },
    {
      name: 'order',
      label: 'Order',
      type: 'number',
      required: true,
      admin: {
        description: 'Where this should appear on the screen (lowest first)',
      },
    },
    {
      name: 'items', // required
      type: 'array', // required
      label: 'Items',
      minRows: 1,
      maxRows: 25,
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
          admin: {
            description: 'A name for this item in the section',
            placeholder: 'E.g Photoshop'
          },
        },
        {
          name: 'content',
          label: 'Content',
          type: 'textarea',
          admin: {
            description: 'A brief description or explanation of this item'
          },
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }) => {
            return data?.title || `Item ${String(index).padStart(2, '0')}`
          },
        },
      },
    },
  ],
  
}

export default FavouriteSection
