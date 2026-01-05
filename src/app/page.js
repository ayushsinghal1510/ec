import Link from "next/link";
import products from "../data/Products.json";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row max-w-[1500px] mx-auto">
      {/* Sidebar - Hidden on mobile */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 -mt-2">
        {/* Banner Area (Fake) */}
        <div className="bg-gradient-to-b from-gray-200 to-gray-100 p-4 mb-6 text-sm border-b border-gray-300">
          <span className="font-bold">1-24 of over 1,000 results</span> for{" "}
          <span className="text-[#c45500] font-bold">"Electronics"</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-sm p-4 flex flex-col justify-between hover:shadow-lg transition cursor-pointer"
            >
              {/* Image Area */}
              <div className="bg-white h-52 flex items-center justify-center mb-2 p-2 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Text Area */}
              <div className="flex-1">
                <Link href={`/product/${product.id}`}>
                  <h2 className="text-base font-medium leading-snug hover:text-[#c45500] text-gray-900 mb-1 line-clamp-3">
                    {product.name}
                  </h2>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#de7921] text-sm">★★★★☆</span>
                  <span className="text-[#007185] text-xs hover:underline">
                    {product.reviews}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-xs align-top">$</span>
                  <span className="text-2xl font-medium">{product.price}</span>
                  <span className="text-xs align-top">99</span>
                </div>

                <div className="text-xs text-gray-500 mb-4">
                  Delivery{" "}
                  <span className="font-bold text-gray-800">Mon, Aug 19</span>
                </div>
              </div>

              <button className="w-full bg-[#ffd814] border border-[#fcd200] rounded-full py-1.5 text-sm shadow-sm hover:bg-[#f7ca00]">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
