import { CollectionConfig } from 'payload/types'
import { admins } from '../access/admins'

const Employment: CollectionConfig = {
  slug: 'employment',
  admin: {
    useAsTitle: 'employer',
  },
  access: {
    read: () => true,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'employer',
      label: 'Employer name',
      type: 'text',
      required: true,
      admin: {
        description: 'The name of the employer',
        placeholder: 'e.g Google'
      },
    },
    {
      name: 'job_title',
      label: 'Job title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'e.g Software engineer'
      },
    },
    {
      type: 'row', 
      fields: [
        {
          name: 'start_date',
          label: 'Date started',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'd MMM yyy',
            },
            width: '50%',
            description: 'The date you started working here',
          },
        },
        {
          name: 'end_date',
          label: 'Date finished',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'd MMM yyy',
            },
            width: '50%',
            description: 'The date you finished working here (if applicable)',
          },
        },
      ],
    },
    {
      name: 'icon',
      label: 'Icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default Employment
