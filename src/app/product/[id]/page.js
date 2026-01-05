"use client";
import { useParams } from "next/navigation";
import products from "../../../data/Products.json"; // Back 3 levels
import { useCart } from "../../../context/CartContext"; // Back 3 levels
import Link from "next/link";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="bg-white min-h-screen p-4 md:p-8 max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left: Image (5 cols) */}
        <div className="md:col-span-5 flex justify-center sticky top-20 h-fit">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Middle: Details (4 cols) */}
        <div className="md:col-span-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 text-sm text-[#007185] mb-4 border-b pb-4">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="hover:underline cursor-pointer">
              {product.reviews} ratings
            </span>
          </div>

          <div className="mb-4">
            <span className="text-gray-600 text-sm block">Price:</span>
            <span className="text-3xl font-medium text-red-600">
              ${product.price}
            </span>
          </div>

          <p className="text-gray-800 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="text-sm text-[#007185] space-y-2">
            <p>FREE Returns</p>
            <p>Join Prime to save $20 on this item.</p>
          </div>
        </div>

        {/* Right: Buy Box (3 cols) */}
        <div className="md:col-span-3">
          <div className="border rounded-lg p-5 shadow-sm bg-white">
            <h3 className="text-red-700 font-bold text-lg mb-2">
              ${product.price}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Free delivery{" "}
              <span className="font-bold text-black">Wednesday, Sep 20</span>
            </p>
            <p className="text-green-700 font-medium text-lg mb-4">In Stock</p>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] rounded-full py-2 mb-3 shadow-sm text-sm"
            >
              Add to Cart
            </button>

            <button className="w-full bg-[#fa8900] hover:bg-[#e37b00] border border-[#ca6d00] rounded-full py-2 shadow-sm text-sm text-black">
              Buy Now
            </button>

            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <div className="flex justify-between">
                <span>Ships from</span>
                <span>Amazon.com</span>
              </div>
              <div className="flex justify-between">
                <span>Sold by</span>
                <span>Amazon.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
