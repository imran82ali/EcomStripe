import Image from "next/image";
import {Image as Iimage} from 'sanity';

import {client} from "@/sanity/lib/client"
import { Interface } from "readline";
import { urlForImage } from "@/sanity/lib/image";

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
  price:number,
  cateory : {
    name:string
  }

}

export default async function Home() {
  const data:Iproduct[] = await getProductData()
  console.log(data);

  return (
    <div className="grid grid-cols-2 justify-center gap-x-10 gap-y-10 mt-10 ml-10">
    {data.map((item)=>(
      <div >
        <Image 
        width={200} height={300}
        src={urlForImage(item.pimage).url()} alt="product" />
        <h1> {item.name} </h1>
      </div>
    ))}

    </div>
  );
}
