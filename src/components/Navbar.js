"use client";
import Link from "next/link";
import { useCart } from "src/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          MyStore
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Products
          </Link>
          <Link href="/cart" className="hover:text-gray-300 font-semibold">
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}
