import { GlobalConfig } from 'payload/types'

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'github',
      label: 'Github',
      type: 'text',
      admin: {
        description: 'Link to github account',
      },
    },
    {
      name: 'linkedin',
      label: 'Linkedin',
      type: 'text',
      admin: {
        description: 'Link to Linkedin account',
      },
    },
  ],
}

export default Footer