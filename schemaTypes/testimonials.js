import {defineField,defineType} from 'sanity';
export const testimonials=defineType({
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
          }
    ]
});