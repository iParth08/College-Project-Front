"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const loginSchema = z.object({
  username: z.string().min(3, "Username or Student ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      // Here, you will call your backend API.
      console.log(data);

      // simulate fake API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Example fake success
      const success = true; // Replace this with actual API response check

      if (success) {
        toast.success("Login successful! Redirecting...");
        router.push("/home");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4 w-[600px] mx-auto">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Welcome Back!
        </h1>
        <p className="mb-8 text-center text-gray-500 text-sm">
          Enter your credentials to access your dashboard 🚀
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Username / Student ID
            </label>
            <input
              {...register("username")}
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          New here?{" "}
          <a
            href="/register"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Create an account
          </a>
        </p>

        <p className="mt-6 text-center text-gray-500 text-sm">
          What the issue?{" "}
          <a
            href="/resetpassword"
            className="font-semibold text-red-600 hover:underline"
          >
            Forgot Password?
          </a>
        </p>
      </div>
    </main>
  );
}
