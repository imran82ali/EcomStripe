import Image from "next/image";
import {client} from "@/sanity/lib/client"
import { Interface } from "readline";

export const getProductData = async() =>{
  const result = await client.fetch(`*[_type=='product']{
    name,Description}`);
  return result;
};



interface Iproduct {
  name: string;
  description: string;
}

export default async function Home() {
  const data:Iproduct[] = await getProductData()
  console.log(data);

  return (
    <div >
    {data.map((item)=>(
      <h1> {item.name} </h1>
    ))}

    </div>
  );
}
