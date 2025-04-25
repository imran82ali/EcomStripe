

import Image from "next/image";
import {Image as Iimage} from 'sanity';

import {client} from "@/sanity/lib/client"
import { Interface } from "readline";
import { urlForImage } from "@/sanity/lib/image";
import ProductCard from "./ProductCard";

export const getProductData = async() =>{
  const result = await client.fetch(`*[_type=='product']{
    name,
    _id,
    Description,
    pimage,
    Price,
  category->{
      name
  }
    }`);
  return result;
};



interface Iproduct {
  name: string;
  _id : string
  description: string;
  pimage : Iimage,
  Price:number,
  cateory : {
    name:string
  }

}

export default async function Home() {
  const data:Iproduct[] = await getProductData()
  console.log(data);

  return (
    <div className="flex justify-center gap-x-10 mt-10">
    {data.map((item)=>(
      <div >
        <ProductCard item={item }/> 
      </div>
    ))}

    </div>
  );
}
