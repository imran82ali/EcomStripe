import Image from "next/image";
import {client} from "@/sanity/lib/client"

export const getProductData = async() =>{
  const result = await client.fetch(`*[_type=='product']`);
  return result;
}

export default async function Home() {
  const data = await getProductData()
  console.log(data);

  return (
    <div >
    

    </div>
  );
}
