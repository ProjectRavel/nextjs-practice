"use client";

import { useState } from "react";

export default function RegsiterForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError({
      username: "",
      email: "",
      password: "",
    });

    if (!form.username || !form.email || !form.password) {
      setError({
        username: form.username ? "" : "Username is required",
        email: form.email ? "" : "Email is required",
        password: form.password ? "" : "Password is required",
      });
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-24 flex items-center justify-center">
      <div className="w-full max-w-sm p-4">
        <h1 className="text-5xl text-center text-[var(--primary)] font-bold">
          Register
        </h1>
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="Username"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
              />
              {error.username && (
                <p className="text-red-500 text-xs mt-1">{error.username}</p>
              )}
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="name@flowbite.com"
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                required
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[var(--primary)] hover:bg-[var(--primary)]/90 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[var(--primary)]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Register new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
