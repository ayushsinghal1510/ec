import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { CartProvider } from "../context/CartContext";
import VoxioWidget from "../components/VoxioWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amazon Clone",
  description: "Next.js E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning fixes the console red error */}
      <body className={inter.className} suppressHydrationWarning={true}>
        <CartProvider>
          <Header />
          <div className="min-h-screen">{children}</div>
          <VoxioWidget />
        </CartProvider>
      </body>
    </html>
  );
}
