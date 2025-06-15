'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('/api/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        router.push('/login');
      }
    }

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="p-8">
        <p className="text-gray-600">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full border border-purple-200">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
          Welcome, {user.username} 👋
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          <span className="font-medium text-gray-800">📧 Email:</span> {user.email}
        </p>

        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg shadow-inner">
          <p className="text-md text-purple-800">
            🎉 You’re logged in! This is your dashboard — let’s build something amazing.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/store')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Go to Store
          </button>
        </div>
      </div>
    </div>
  );
}
