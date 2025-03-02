import {defineField,defineType} from 'sanity';
export const testimonial=defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        description: 'Rating out of 5',
        validation: (Rule) => Rule.min(1).max(5),
      },
    ],
  })