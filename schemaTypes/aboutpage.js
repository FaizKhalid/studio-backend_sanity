import {defineField,defineType} from 'sanity';
export const aboutpage=defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Hero Image',
          type: 'image'
        }
      ]
    },
    {
      name: 'introduction',
      title: 'Introduction Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Introduction Image',
          type: 'image'
        }
      ]
    },
    {
      name: 'vision',
      title: 'Vision Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Vision Image',
          type: 'image'
        }
      ]
    },
    {
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'points',
          title: 'Mission Points',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'image',
          title: 'Mission Image',
          type: 'image'
        }
      ]
    }
  ]
})