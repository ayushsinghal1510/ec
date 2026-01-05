import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VoxioChatbot from "@/components/VoxioChatbot";

export const metadata = {
  title: "My Next.js App",
  description: "Integrated with Voxio Agents Chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Global Navigation Components */}
        <Header />
        <Navbar />
        
        <div className="flex">
          {/* Optional Sidebar - placed inside a flex container if needed */}
          <Sidebar />
          
          <main className="flex-grow">
            {children}
          </main>
        </div>

        {/* 
            Voxio Chatbot Component 
            This is a client component that initializes the SDK 
        */}
        <VoxioChatbot />
      </body>
    </html>
  );
}