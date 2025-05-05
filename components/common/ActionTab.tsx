"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/lib/reduxstore/hooks";
import { login } from "@/lib/reduxstore/authSlice";
import { set } from "react-hook-form";

const ActionTab = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const userdata = localStorage.getItem("user");

    if (isAuthenticated && userdata) {
      const parsedUser = JSON.parse(userdata);
      dispatch(login(parsedUser)); // Dispatch login action with user data
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4 w-[600px] mx-auto">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key="key1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {/* box here */}
            <header className=" text-zinc-800 py-4">
              <div className="container mx-auto flex flex-col justify-between items-center">
                <div className="flex items-center relative">
                  <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center absolute top-[-80px] left-0 transform -translate-x-1/2 shadow-lg animate-bounce">
                    <span className="text-blue-500 text-2xl font-bold">CC</span>
                  </div>
                </div>
                <div className="text-lg flex flex-col items-center mt-5 space-y-2">
                  {isLoggedIn ? (
                    <>
                      <p>Dear, Member!</p>
                      <Link href="/home">
                        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out">
                          Welcome Home
                        </button>
                      </Link>
                    </>
                  ) : (
                    <div className="space-x-4 space-y-1.5">
                      <p className="text-center">Hey, Visitor!</p>
                      <Link href="/login">
                        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out">
                          Login
                        </button>
                      </Link>
                      <Link href="/home">
                        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out">
                          Browse as Guest
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <hr className="my-4 border-white opacity-25" />
              <div className="container mx-auto flex items-center justify-center space-x-4 border-t pt-4">
                <Link href="/admin/login">
                  <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out">
                    Admin Login
                  </button>
                </Link>
              </div>
            </header>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default ActionTab;
