"use client";
import { useCart } from "../../context/CartContext"; // Back 2 levels
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div className="p-4 md:p-8 max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-100 min-h-screen">
      {/* Left: Cart Items */}
      <div className="md:col-span-3 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold mb-1">Shopping Cart</h1>
        <p className="text-sm text-blue-600 mb-4 border-b pb-2 cursor-pointer">
          Deselect all items
        </p>

        {cart.length === 0 ? (
          <p>
            Your cart is empty.{" "}
            <Link href="/" className="text-blue-600 underline">
              Shop now
            </Link>
          </p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex gap-4 border-b py-6">
              <input type="checkbox" checked readOnly className="mt-2" />
              <img
                src={item.image}
                className="w-32 h-32 object-contain"
                alt={item.name}
              />

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium leading-tight max-w-xl text-blue-700 hover:underline cursor-pointer">
                    {item.name}
                  </h3>
                  <p className="font-bold text-lg">${item.price}</p>
                </div>
                <p className="text-green-700 text-sm mt-1">In Stock</p>
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png"
                    className="h-4"
                    alt="prime"
                  />
                </div>

                <div className="flex items-center gap-4 text-sm text-[#007185]">
                  <div className="flex items-center border rounded shadow-sm bg-gray-50 px-2 py-1">
                    Qty: 1
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="hover:underline"
                  >
                    Delete
                  </button>
                  <button className="hover:underline">Save for later</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right: Subtotal Box */}
      <div className="md:col-span-1">
        <div className="bg-white p-5 shadow-sm sticky top-24">
          <div className="text-lg mb-4">
            Subtotal ({cart.length} items):{" "}
            <span className="font-bold">${cartTotal}</span>
          </div>
          <Link href="/checkout">
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] py-2 rounded-lg shadow-sm">
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
