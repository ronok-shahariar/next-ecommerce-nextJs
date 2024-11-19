"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = false;

  return (
    <div className=" absolute p-4 shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <div>
          <Image
            src="https://images.pexels.com/photos/6074050/pexels-photo-6074050.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={72}
            height={96}
            className=" object-cover rounded-md"
          />
        </div>
        
      )}
    </div>
     
  );
};

export default CartModal;
