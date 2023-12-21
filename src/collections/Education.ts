import { CollectionConfig } from 'payload/types'
import { admins } from '../access/admins'

const Education: CollectionConfig = {
  slug: 'education',
  admin: {
    useAsTitle: 'school',
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
      type: 'row', 
      fields: [
        {
          name: 'school',
          label: 'Name of school',
          type: 'text',
          required: true,
          admin: {
            description: 'The name of the institution',
            placeholder: 'e.g Harvard',
            width: '50%',
          },
        },
        {
          name: 'level',
          label: 'Level of education',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'e.g GCSE',
            width: '25%',
          },
        },
        {
          name: 'grade',
          label: 'Grade received',
          type: 'text',
          admin: {
            width: '25%',
          },
        },
      ],
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
            description: 'The date you started at this institution',
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
            description: 'The date you finished at this institution',
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
      relationTo: 'media',
      required: true,
    },
  ],
}

export default Education
