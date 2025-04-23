import { category } from "./category"

export const product = {
    name: 'product',
    type: 'document',
    title: 'product',
    fields: [
        {
            name: 'name',
            title: 'Title',
            type : 'string'
        },
        {
            name: 'Description',
            title: 'Product Description',
            type : 'string'
        },
        {
            name: 'Price',
            title: 'Product Price',
            type : 'number'
        },
        {
            name: 'pimage',
            title: 'Product image',
            type : 'image'
        },
        {
            name: 'category',
            title: 'Product Category',
            type : 'reference',
            to:[{
                type:"category"
            }]
        },
        
    ]
}