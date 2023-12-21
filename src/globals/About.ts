import { GlobalConfig } from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";

const About: GlobalConfig = {
    slug: 'about',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'intro',
            label: 'Introduction',
            type: 'richText',
            admin: {
                description: 'Write a short introduction about yourself',
            },
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures.filter((feature) => !['relationship', 'upload'].includes(feature.key)),
                    // The HTMLConverter Feature is the feature which manages the HTML serializers. If you do not pass any arguments to it, it will use the default serializers.
                    HTMLConverterFeature({}),
                ],
            }),
        },
        lexicalHTML('intro', { name: 'intro_html' }),
    ],
}

export default About