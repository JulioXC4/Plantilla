"use client";

import React, { useEffect, useState } from "react";
import { fetchData } from "@/app/utils/api";

interface User {
    id: number;
    name: string;
    email: string;
  }

const Dashboard = () => {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        console.log("Result:", result)
        if (result.error) {
          setError(result.error);
        } else {
          setData(result.data);
        }
      } catch (err) {
        setError("Error inesperado al obtener los datos.");
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => {
      // Agrega lógica aquí si quieres hacer algo cuando el componente se desmonte
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <h1 className="text-xl font-bold mb-6">Dashboard</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Profile
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Settings
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to your dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data &&
            data.map((user) => (
              <div key={user.id} className="bg-white p-4 shadow rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
