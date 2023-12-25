import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/media/general',
    staticDir: path.resolve(__dirname, '../../media/general'),
    imageSizes: [
      {
        name: 'icon',
        width: 50,
        height: 50,
        position: 'centre',
      },
    ],

    adminThumbnail: 'icon',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
