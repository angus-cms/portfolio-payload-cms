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
  defaultSort: '-start_date',
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
          validate: (val, { siblingData }) => {
            // Check if end_date is provided. If not, skip the comparison.
            if (!val) {
              return true;
            }

            const startDate = new Date(siblingData.start_date);
            const endDateObj = new Date(val);

            // Check if the provided end_date is actually after the start_date.
            if (endDateObj <= startDate) {
              return 'The end date must be after the start date';
            }
            
            return true;
          },
        },
      ],
    },
    {
      name: 'icon',
      label: 'Icon',
      type: 'upload',
      relationTo: 'icons',
      required: true,
    },
  ],
}

export default Employment
