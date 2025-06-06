"use client";
import Link from "next/link"; 
import { usePathname } from "next/navigation";      

export const Navigation = () => {
    const pathname = usePathname();
    
  return (
    <nav>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"}>About</Link>
        </li>
        <li>
          <Link href="/products/1" className={pathname.startsWith("/products/1") ? "font-bold mr-4" : "text-blue-500 mr-4"}>Products 1</Link>
        </li>
      </ul>
    </nav>
  );
}