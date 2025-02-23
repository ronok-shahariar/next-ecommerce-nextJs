"use client";

import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hooks/useWixClient";



const CartModal = () => {
  // Temporary
  // const cartItems = true;

  const wixClient = useWixClient()
  const { cart, isLoading, removeItem } = useCartStore();

  

  return (
    <div className="w-max absolute p-4 shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {
       !cart.lineItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* List */}
          <div className="flex flex-col gap-8">
            {/* Item  */}
            {cart.lineItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt=""
                    width={72}
                    height={96}
                    className=" object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* Top Section */}
                  <div className="">
                    {/* Title */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>
                      <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                       {item.quantity && item.quantity>1 && <div className="text-xs text-green-500">{item.quantity} x </div>} ${item.price?.amount}
                      </div>
                    </div>
                    {/* Description */}
                    <div className="text-sm  text-gray-500">
                      {item.availability?.status}
                    </div>
                  </div>
                  {/* Bottom Section */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span className="text-blue-500" 
                    style={{cursor: isLoading ? "not-allowed" : "pointer"}}
                    onClick={()=>removeItem(wixClient, item._id!)}>Remove</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom Div */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>${(cart as any).subtotal.amount}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shopping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4  ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed  disabled:opacity-75" disabled={isLoading}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
