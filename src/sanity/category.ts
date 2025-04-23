import { defineType,defineField } from "sanity";

import { title } from "process";

export const category =defineType( {
    name: "category",
    title: "Category",
    type : "document",
    fields : [
        defineField(
            {
                name : "name",
                title : "category name",
                type : "string"
            })
    ]
} )