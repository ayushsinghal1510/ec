"use client";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartTotal, cart, clearCart } = useCart();
  const router = useRouter();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Simulate API Processing
    const button = document.getElementById("place-order-btn");
    button.innerText = "Processing...";
    button.disabled = true;

    setTimeout(() => {
      alert("Order Placed Successfully!");
      clearCart();
      router.push("/");
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen pb-10">
      {/* Simple Header for Checkout */}
      <div className="bg-gray-100 border-b p-4 flex justify-between items-center shadow-sm">
        <Link href="/" className="text-2xl font-bold">
          NextStore
        </Link>
        <h1 className="text-2xl text-gray-600 font-normal">Checkout</h1>
        <span className="text-gray-500 text-sm">🔒 Secure Connection</span>
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Forms */}
        <div className="md:col-span-2 space-y-6">
          {/* Step 1: Address */}
          <div className="flex gap-4">
            <h2 className="font-bold text-lg w-8">1</h2>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-4 text-[#c45500]">
                Shipping Address
              </h3>
              <form
                id="checkout-form"
                onSubmit={handlePlaceOrder}
                className="space-y-4 max-w-lg"
              >
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full border border-gray-400 p-2 rounded shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Address Line 1
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Street address, P.O. box, company name, c/o"
                    className="w-full border border-gray-400 p-2 rounded shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">City</label>
                  <input
                    required
                    type="text"
                    className="w-full border border-gray-400 p-2 rounded shadow-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">
                      State / Province
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full border border-gray-400 p-2 rounded shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">
                      Zip Code
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full border border-gray-400 p-2 rounded shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full border border-gray-400 p-2 rounded shadow-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    May be used to assist delivery
                  </p>
                </div>
              </form>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Step 2: Payment (Fake) */}
          <div className="flex gap-4">
            <h2 className="font-bold text-lg w-8 text-gray-500">2</h2>
            <div>
              <h3 className="font-bold text-lg text-gray-700 mb-2">
                Payment method
              </h3>
              <div className="border border-gray-300 rounded p-4 bg-gray-50 text-sm">
                <span className="font-bold text-green-700">
                  ✓ Pay on Delivery (Cash / Card)
                </span>
                <p className="text-gray-500 mt-1">
                  Pay smoothly when the item arrives at your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="md:col-span-1">
          <div className="border border-gray-300 rounded-lg p-5 bg-white sticky top-4 shadow-sm">
            <button
              id="place-order-btn"
              form="checkout-form"
              type="submit"
              className="w-full bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] py-2 rounded-lg shadow-sm text-sm mb-4 cursor-pointer font-medium"
            >
              Place your order
            </button>

            <p className="text-xs text-gray-600 text-center mb-4 border-b pb-4">
              By placing your order, you agree to NextStore's privacy notice and
              conditions of use.
            </p>

            <h3 className="font-bold text-lg mb-4">Order Summary</h3>

            <div className="space-y-1 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Items ({cart.length}):</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping & handling:</span>
                <span className="text-[#b12704]">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Total before tax:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated tax:</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold text-[#b12704] border-t pt-4 mt-4">
              <span>Order Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
