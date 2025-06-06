"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter(); 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="text-lg">This is the about page of our application.</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => router.push("/")}
        >
          Go Home
        </button>
      </main>
    </div>
  );
}