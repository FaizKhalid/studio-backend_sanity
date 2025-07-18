import {defineField,defineType} from 'sanity';
export const contact=defineType({
    name:'contact',
    title:'Contact',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'email',
            title:'Email',
            type:'string'
        },
        {
            name:'message',
            title:'Message',
            type:'text'
        }
    ]
})