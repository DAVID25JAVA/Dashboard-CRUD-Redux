'use client'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { store } from "./store/store";
// import { Provider } from "react-redux";
import { Providers } from "./provider/Provider";

 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased h-screen overflow-hidden">
      <Providers >
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* Sidebar + Content */}
        <div className="flex pt-10 h-screen">
          {/* Fixed Sidebar */}
          <div className="fixed left-0 top-14 bottom-0 z-40">
            <Sidebar />
          </div>

          {/* Scrollable Content Area */}
          <main className="flex-1 ml-64 overflow-y-auto  ">
            <div className="p-2 md:p-0">
                {children}
            </div>
          </main>
        </div>
              </Providers>
      </body>
    </html>
  );
}
