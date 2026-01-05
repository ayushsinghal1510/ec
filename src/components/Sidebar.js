"use client";

export default function Sidebar() {
  return (
    <div className="w-full md:w-64 bg-white p-4 hidden md:block h-screen shadow-sm">
      <h3 className="font-bold text-lg mb-2">Department</h3>
      <ul className="text-sm space-y-2 text-gray-600 mb-6">
        <li className="hover:text-[#c45500] cursor-pointer">Electronics</li>
        <li className="hover:text-[#c45500] cursor-pointer">Computers</li>
        <li className="hover:text-[#c45500] cursor-pointer">Smart Home</li>
        <li className="hover:text-[#c45500] cursor-pointer">Arts & Crafts</li>
      </ul>

      <h3 className="font-bold text-lg mb-2">Avg. Customer Review</h3>
      <div className="space-y-1 text-sm text-[#007185] hover:text-[#c45500] cursor-pointer">
        <p>★★★★☆ & Up</p>
        <p>★★★☆☆ & Up</p>
        <p>★★☆☆☆ & Up</p>
      </div>

      <h3 className="font-bold text-lg mb-2 mt-6">Price</h3>
      <ul className="text-sm space-y-2 text-gray-600">
        <li className="cursor-pointer hover:text-[#c45500]">Under $25</li>
        <li className="cursor-pointer hover:text-[#c45500]">$25 to $50</li>
        <li className="cursor-pointer hover:text-[#c45500]">$50 to $100</li>
        <li className="cursor-pointer hover:text-[#c45500]">$100 & Above</li>
      </ul>
    </div>
  );
}
