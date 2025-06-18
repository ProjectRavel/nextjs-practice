"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useState } from "react";
export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email: form.email,
      password: form.password,
    });

    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-lg"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "var(--foreground)" }}
        >
          Login to your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--input-bg)",
                color: "var(--foreground)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--input-bg)",
                color: "var(--foreground)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
              placeholder="********"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg font-semibold transition duration-300 cursor-pointer"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--foreground)",
            }}
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="mx-4 text-sm">or</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>

        <button
          onClick={() => signIn("google")}
          type="button"
          className="w-full cursor-pointer flex items-center justify-center gap-3 py-2 px-4 border rounded-lg border-[var(--border)] font-semibold transition duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
        >
          <FcGoogle size={24} />
          <span className="text">Login with Google</span>
        </button>
      </div>
    </div>
  );
}
