import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-gray-900 bg-cyan-50 dark:text-white">
      <form className="mx-auto space-y-3 rounded-md border-2 border-green-500 dark:border-gray-700 dark:bg-gray-900 bg-white p-4 text-purple-950 shadow-md w-80">
        <div className="space-y-1">
          <label htmlFor="username" className="block text-sm font-semibold">
            User Name
          </label>
          <input
            type="text"
            id="username"
            required
            placeholder="username"
            className="border-2 border-gray-300 px-2 py-1 rounded-md outline-none w-full"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            placeholder="password"
            className="border-2 border-gray-300 px-2 py-1 rounded-md w-full "
          />
        </div>
        <Link href="/chat">
          <button className="bg-green-800 px-4 py-2 text-center w-full mt-4 rounded-md text-gray-100 text-lg">
            Login
          </button>
        </Link>
      </form>
    </main>
  );
}
