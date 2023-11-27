import payload from 'payload';
import { CollectionConfig, FieldHook } from 'payload/types';
import sleep from '../utils/sleep';

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
    read: () => true,
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
