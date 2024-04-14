"use client";

import { useSocket } from "@/context/socketProvider";
import { signUp } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUserName] = useState("kete2");
  const [password, setPassword] = useState("12345678");
  const { setAuthUser } = useSocket();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await signUp({ username, password });
    setAuthUser(user);

    router.replace("/chat");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-gray-900 bg-cyan-50 dark:text-white">
      <form
        className="mx-auto space-y-3 rounded-md border-2 border-green-500 text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white p-4  shadow-md w-80"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1 ">
          <label htmlFor="username" className="block text-sm font-semibold">
            UserName
          </label>
          <input
            className="border-2 border-green-100 dark:text-gray-900 px-2 py-1 rounded-md   w-full"
            type="text"
            id="username"
            required
            placeholder="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-semibold">
            Password
          </label>
          <input
            className="border-2 border-green-100 px-2 py-1 dark:text-gray-900 rounded-md w-full "
            type="password"
            id="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="bg-green-800 px-4 py-2 text-center w-full mt-4 rounded-md text-gray-100 text-lg">
          Login
        </button>
      </form>
    </main>
  );
}
