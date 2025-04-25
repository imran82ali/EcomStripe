"use client"

import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";
import { FC } from "react";


const ProductCard: FC<{item:any}> = ({item})=> {
  
    const handleAddtoCard = async () => {
        const res = await fetch ("/api/cart",{
            method:"POST",
            body: JSON.stringify({
                product_id: item._id
            })
        })
    
        const result = await res.json
        console.log(result)
    }
    
    return (
    <div>
        <Image 
            width={300} height={300} 
            className="max-h-[300px] object-cover"
            src={urlForImage(item.pimage).url()} alt="product" />
            <h1> {item.name} </h1>
            <h1> ${item.Price} </h1>
            <h1> ${item._id} </h1>
            <button onClick = {() =>{handleAddtoCard()}} className="border py-2 px-6 rounded bg-blue-700 text-white"> Add to Cart </button>
        
    </div>
  )
}


export default ProductCard;