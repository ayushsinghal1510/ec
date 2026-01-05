"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <header>
      {/* Top Nav - Dark Blue Theme */}
      <div className="bg-[#131921] text-white p-3 flex items-center gap-4 sticky top-0 z-50">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold px-2 border border-transparent hover:border-white rounded flex items-center"
        >
          NextStore
        </Link>

        {/* Search Bar */}
        <div className="flex-grow hidden md:flex h-10 rounded overflow-hidden">
          <select className="bg-gray-100 text-black text-xs px-2 border-r border-gray-300 outline-none cursor-pointer">
            <option>All Departments</option>
            <option>Electronics</option>
            <option>Computers</option>
            <option>Fashion</option>
          </select>
          <input
            type="text"
            className="w-full px-3 text-black focus:outline-none"
            placeholder="Search NextStore"
          />
          <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 text-black font-bold flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        {/* Right Nav Items */}
        <div className="flex items-center gap-6 text-sm">
          {/* STATIC GUEST GREETING (No Link) */}
          <div className="hidden md:block p-1">
            <p className="text-xs text-gray-300">Hello, Guest</p>
            <p className="font-bold">Your Account</p>
          </div>

          <div className="hidden md:block p-1 cursor-pointer hover:border hover:border-white rounded">
            <p className="text-xs text-gray-300">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <Link
            href="/cart"
            className="flex items-end gap-1 font-bold border border-transparent hover:border-white p-2 rounded"
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="absolute -top-1 right-[-5px] bg-[#f3a847] text-[#131921] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </div>
            <span className="mb-1">Cart</span>
          </Link>
        </div>
      </div>

      {/* Sub Header */}
      <div className="bg-[#232f3e] text-white text-sm p-2 px-4 flex gap-4 overflow-x-auto items-center">
        <span className="font-bold flex items-center gap-1 cursor-pointer hover:text-gray-300">
          ☰ All
        </span>
        <span className="cursor-pointer hover:text-gray-300">
          Today's Deals
        </span>
        <span className="cursor-pointer hover:text-gray-300">
          Customer Service
        </span>
        <span className="cursor-pointer hover:text-gray-300">Registry</span>
        <span className="cursor-pointer hover:text-gray-300">Gift Cards</span>
        <span className="cursor-pointer hover:text-gray-300">Sell</span>
      </div>
    </header>
  );
}
