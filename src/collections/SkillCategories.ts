import payload from 'payload';
import { CollectionConfig, FieldHook } from 'payload/types';
import { adminsOrActive } from '../access/isActive'

// Get the skills for this category
const getSkills: FieldHook = async ({ data }) => {
  const skills = await payload.find({
    collection: 'skills',
    where: {
      'category.value': {
        equals: data.id,
      },
    },
  });

  if (skills.docs) {
    return skills.docs.map((doc) => doc.id);
  }

  return null;
};

const SkillCategories: CollectionConfig = {
  slug: 'skill-categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: adminsOrActive,
  },
  defaultSort: 'order',
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
    {
      name: 'active', // required
      type: 'checkbox', // required
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Should this category be displayed?',
        position: 'sidebar',
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
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
      access: {
        create: () => false,
        update: () => false,
      },
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [({ siblingData }) => {
          delete siblingData.skills;
        }],
        afterRead: [getSkills],
      }
    }
  ],
  
}

export default SkillCategories
