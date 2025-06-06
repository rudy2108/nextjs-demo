"use client";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
    useEffect(() => {
        console.error("Error occurred in UsersServer component:", error);
    }, [error]);        
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4 text-red-600">Error</h1>
            <p className="text-red-500">{error.message}</p>
            <p className="mt-4">Please try again later.</p>
        </div>
    ); 
}