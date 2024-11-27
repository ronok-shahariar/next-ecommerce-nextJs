"use client"
import Image from "next/image";
import React, { useState } from "react";

// const images = [
//     {
//         id:1,
//         url:"https://images.pexels.com/photos/29501452/pexels-photo-29501452/free-photo-of-historic-red-brick-building-in-autumn-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
//     {
//         id:2,
//         url:"https://images.pexels.com/photos/29472959/pexels-photo-29472959/free-photo-of-stunning-autumn-landscape-with-bridge-and-waterfall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
//     {
//         id:3,
//         url:"https://images.pexels.com/photos/29371448/pexels-photo-29371448/free-photo-of-shadow-play-with-tulips-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
//     {
//         id:4,
//         url:"https://images.pexels.com/photos/16667560/pexels-photo-16667560/free-photo-of-couple-with-dog-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
// ]

const ProductImages = ({items}:{items:any}) => {
    const [index, setIndex] = useState(0)

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {items.map((item:any,i:number) => (
            <div className="w-1/4 h-32 relative gap-4 mt-8" key={item.id} onClick={()=> setIndex(i) }>
                <Image src={item.image?.url} alt="" fill sizes="30vw" className="object-cover rounded-md"/>
            </div>
        ))}
        
      </div>
    </div>
  );
};

export default ProductImages;
