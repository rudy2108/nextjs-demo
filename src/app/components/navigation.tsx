"use client";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link"; 
import { usePathname } from "next/navigation";      

export const Navigation = () => {
    const pathname = usePathname();
    
  return (
    <nav className="flex justify-center items-center bg-slate-900 text-white p-4 rounded-lg shadow-lg mx-auto max-w-4xl mt-6">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            href="/"
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              pathname === "/" 
                ? "bg-blue-600 text-white font-bold shadow" 
                : "text-blue-300 hover:bg-blue-800 hover:text-white"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              pathname === "/about" 
                ? "bg-blue-600 text-white font-bold shadow" 
                : "text-blue-300 hover:bg-blue-800 hover:text-white"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/products/1"
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              pathname.startsWith("/products/1") 
                ? "bg-blue-600 text-white font-bold shadow" 
                : "text-blue-300 hover:bg-blue-800 hover:text-white"
            }`}
          >
            Products 1
          </Link>
        </li>
      </ul>
      <div className="ml-6">
        <SignInButton mode="modal"/>
      </div>
    </nav>
  );
}