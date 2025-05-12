"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
export default function UserProfile() {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    async function fetchUser<User>() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) throw new Error("No such user!");
        const data = await response.json();
        setUser(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);
  if (loading) return <p>Loading ......</p>;
  if (error) return <p>Error Occured: {error}</p>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        User Details
      </h1>
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Name:</span>{" "}
          {user?.name || "N/A"}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Username:</span>{" "}
          {user?.username || "N/A"}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Email:</span>{" "}
          {user?.email || "N/A"}
        </p>
      </div>
    </div>
  );
}
